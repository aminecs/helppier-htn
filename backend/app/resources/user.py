from flask import request, jsonify
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import (
    create_access_token, create_refresh_token,
    jwt_required
)

from ..models.user import UserModel

class User(Resource):
    def get(self, user_id):
        """Get a specific users details"""
        user = UserModel.find_by_id(user_id)
        print(user)
        print(type(user.id))
        # print(user)
        # print(user.json())
        if user is None:
            return {"error": "User not found"}

        return {"user": user.json()}


class Users(Resource):
    def get(self):
        """Get users"""
        users = UserModel.get_users()
        users_json = [user.json() for user in users]

        return {
            "users": users_json
        }

class UserRanking(Resource):
    def get(self):
        """Get the top users"""

        users = UserModel.get_top_earners()
        users_json = [user.json() for user in users]
        return {"users": users_json}

class UserOwnedJobs(Resource):
    def get(self, user_id):
        """Get the list of all jobs owned by user"""

        user = UserModel.find_by_id(user_id)
        jobs = [job.json() for job in user.posted_jobs]

        return {"jobs": jobs}

class UserVolunteeredJobs(Resource):
    def get(self, user_id):
        """Get a list of jobs the user has volunteered for"""
        user = UserModel.find_by_id(user_id)
        print("Getting volunteered jobs")
        jobs = [job.json() for job in user.volunteered_jobs]

        return {"jobs": jobs}



class UserRegistration(Resource):
    def post(self):
        """Register User"""
        req_json = request.get_json()
        user = UserModel(**req_json)
        try:
            user.save()
        except IntegrityError as e:
            return {"error": "email already registered"}, 404
        return {"msg": "User successfully saved", "user_id": user.id}, 201


class UserLogin(Resource):
    def post(self):
        """Login User"""
        req_body = request.get_json(silent=True)
        if req_body is None:
            return {"msg": "Missing JSON body"}, 400

        if "username" not in req_body or "password" not in req_body:
            return {"msg": "Please specify username & password"}, 400

        # Find user in db
        user = UserModel.find_by_email(req_body["username"])
        if user is None:
            return {"msg": "Username not found"}

        # Generate tokens
        tokens = {
            "access_token": create_access_token(identity=user.id, fresh=True),
            "refresh_token": create_refresh_token(user.id),
        }

        # Return tokens
        return {
            "msg": "successfull login",
            "data": {
                "user id": user.id,
                "tokens": tokens,
            },
        }
