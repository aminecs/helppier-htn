from flask import request, jsonify
from flask_restful import Resource

from ..models.user import UserModel

class User(Resource):
    def get(self, user_id):
        """Get a specific users details"""

        return {"msg": "Get user details route under construction"}

class Users(Resource):
    def get(self):
        """Get users"""

        return {"msg": "Get users route under construction"}

class UserRegistration(Resource):
    def post(self):
        """Register User"""
        return {"msg": "Registration route under construction"}

class UserLogin(Resource):
    def post(self):
        """Login User"""

        return {"msg": "Login route under construction"}