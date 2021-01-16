from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

from config import Config

def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    return app

app = create_app()

# DB Config
db = SQLAlchemy(app)

from .models.user import UserModel
from .models.job import JobModel
db.create_all()



@app.route('/')
def hello_world():
    old_user = UserModel.find_by_email("spidey@spiderverse.com")
    if old_user:
        return jsonify({
            "msg": "User {} already exists".format(old_user.email)
        })
    new_user = UserModel(firstname="Peter", lastname="Parker", email="spidey@spiderverse.com")
    new_user.save()

    # new_request = JobModel(description="Refill webbing", owner_id=625003639321536273, volunteer_id=625012171619903249)


    return jsonify(new_user.json())

@app.route("/request")
def add_req():
    user1 = UserModel.find_by_email("teth@khandaq.com")
    user2 = UserModel.find_by_email("spidey@spiderverse.com")
    if user1 is None or user2 is None:
        return jsonify({"msg": "Users not found"})
    print(user1.id)
    print(user1.id)
    new_request = JobModel(description="Pick up aunt May", owner_id=user1.id)
    new_request.save()
    job = JobModel.find_by_id(625018342876620561)
    print(f"Job: {job}")
    return jsonify({"msg": "Got a request"})


if __name__ == '__main__':
    app.run()