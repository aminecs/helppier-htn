from flask import request, jsonify
from flask_restful import Resource

from ..models.user import UserModel


class Job(Resource):
    def get(self, job_id):
        """Get the Details of a job"""

        return {"msg": "Job details route under construction"}

    def post(self, job_id):
        """Create a volunteer job"""

        return {"msg": "Create job route under construction"}


class Jobs(Resource):
    def get(self):
        """Get all jobs available/unavailable"""

        return {"msg": "Get jobs route under construction"}