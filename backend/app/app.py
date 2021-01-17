from flask_restful import Api
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_marshmallow import Marshmallow


from config import Config

def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    return app

app = create_app()
api = Api(app)
# DB Config
db = SQLAlchemy(app)
from .models.user import UserModel
from .models.job import JobModel
db.create_all()
# Marshmallow config
ma = Marshmallow(app)
# JWT config
jwt = JWTManager(app)


# Define paths for api resources
from .resources.user import User, Users, UserLogin, UserRegistration, UserRanking, UserOwnedJobs, UserVolunteeredJobs
from .resources.job import Job, Jobs, JobCreation

api.add_resource(User, "/api/user/<string:user_id>")
api.add_resource(Users, "/api/users")
api.add_resource(UserRegistration, "/api/register")
api.add_resource(UserLogin, "/api/login")
api.add_resource(Job, "/api/job/<string:job_id>")
api.add_resource(JobCreation, "/api/job/create")
api.add_resource(Jobs, "/api/jobs")
api.add_resource(UserRanking, "/api/users/top")
api.add_resource(UserOwnedJobs, "/api/users/<string:user_id>/posted_jobs")
api.add_resource(UserVolunteeredJobs, "/api/users/<string:user_id>/volunteered_jobs")

# @app.route('/')
# def hello_world():
#     old_user = UserModel.find_by_email("spidey@spiderverse.com")
#     if old_user:
#         return jsonify({
#             "msg": "User {} already exists".format(old_user.email)
#         })
#     new_user = UserModel(firstname="Peter", lastname="Parker", email="spidey@spiderverse.com")
#     new_user.save()

#     # new_request = JobModel(description="Refill webbing", owner_id=625003639321536273, volunteer_id=625012171619903249)


#     return jsonify(new_user.json())

# @app.route("/request")
# def add_req():
#     user1 = UserModel.find_by_email("teth@khandaq.com")
#     user2 = UserModel.find_by_email("spidey@spiderverse.com")
#     if user1 is None or user2 is None:
#         return jsonify({"msg": "Users not found"})
#     print(user1.id)
#     print(user1.id)
#     new_request = JobModel(description="Pick up aunt May", owner_id=user1.id)
#     new_request.save()
#     job = JobModel.find_by_id(625018342876620561)
#     print(f"Job: {job}")
#     return jsonify({"msg": "Got a request"})


if __name__ == '__main__':
    app.run()
