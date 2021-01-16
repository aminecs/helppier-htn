from flask import request, jsonify
from flask_restful import Resource

from ..models.user import UserModel
from ..models.job import JobModel


class Job(Resource):
    def get(self, job_id):
        """Get the Details of a job"""
        job = JobModel.find_by_id(job_id)
        if not job:
            return {"msg": "Job not found"}
        return job.json()

        return {"msg": "Job details route under construction"}



class Jobs(Resource):
    def get(self):
        """Get all jobs available/unavailable"""

        jobs = JobModel.get_jobs()
        print(jobs)
        jobs_json = [job.json() for job in jobs]

        return {"jobs": jobs_json}


class JobCreation(Resource):
    def post(self):
        """Create a volunteer job"""
        req_body = request.get_json()
        print(req_body)

        # create a job
        # point = 'POINT({} {})'.format(req_body["longitude"], req_body["latitude"])
        new_job = JobModel(description=req_body["description"], owner_id=req_body["owner_id"], longitude=req_body["longitude"], latitude=req_body["latitude"])
        # save to db
        new_job.save()

        return {"msg": "Job successfully created"}, 201