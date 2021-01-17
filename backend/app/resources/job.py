from flask import request, jsonify
from flask_restful import Resource
from geoalchemy2.elements import WKTElement

from ..models.user import UserModel
from ..models.job import JobModel


class Job(Resource):
    def get(self, job_id):
        """Get the Details of a job"""
        job = JobModel.find_by_id(job_id)
        if not job:
            return {"error": "Job not found"}
        return job.json()



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

        new_job = JobModel( description=req_body["description"], owner_id=req_body["owner_id"], longitude=req_body["longitude"], latitude=req_body["latitude"])
        new_job.init_save()

        return {"msg": "Job successfully created"}, 201