from flask import request, jsonify
from flask_restful import Resource
from geoalchemy2.elements import WKTElement

from ..models.user import UserModel
from ..models.job import JobModel
from ..crypto_req import payout, getBalance


class Job(Resource):
    def get(self, job_id):
        """Get the Details of a job"""
        job = JobModel.find_by_id(job_id)
        if not job:
            return {"error": "Job not found"}
        return job.json()

    def post(self, job_id):
        """Assign a user to a job"""
        json_body = request.get_json(silent=True)
        if json_body is None:
            return {"msg": "Invalid JSON"}
        user_id = json_body.get("user_id", None)
        if user_id is None:
            return {"msg": "Missing user_id"}

        job = JobModel.find_by_id(job_id)
        if job is None or job.volunteer_id is not None:
            return {"error": "Job is unavailable"}
        job.assign_volunteer(user_id)

        # Send points to user
        user = UserModel.find_by_id(job.volunteer_id)
        job.completed = True
        job.save()
        if user and user.wallet_addr is not None:
            print("------ PAID OUT")
            payout(user.wallet_addr, job.reward)
            user.rewards = getBalance(user.wallet_addr)
            user.save()

        return {"msg": "user successfully volunteered"}




class Jobs(Resource):
    def get(self):
        """Get all jobs available/unavailable"""
        radius = request.args.get("radius", None)
        latitude = request.args.get("latitude", None)
        longitude = request.args.get("longitude", None)
        limit = int(request.args.get("limit", 5))

        if radius is None:
            jobs = JobModel.get_jobs(limit=limit)
        else:
            jobs = JobModel.find_closest(latitude, longitude, radius, limit)
        print(jobs)
        jobs_json = [job.json() for job in jobs]

        return {"jobs": jobs_json}


class JobCreation(Resource):
    def post(self):
        """Create a volunteer job"""
        req_body = request.get_json()

        new_job = JobModel( description=req_body["description"], owner_id=req_body["owner_id"], longitude=req_body["longitude"], latitude=req_body["latitude"], job_type=req_body["job_type"], time_needed_mins=req_body["time_needed_mins"])
        new_job.init_save()

        return {"msg": "Job successfully created"}, 201