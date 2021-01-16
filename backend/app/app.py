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
db.create_all()



@app.route('/')
def hello_world():
    old_user = UserModel.find_by_email("pparker@spidey.com")
    if old_user:
        return jsonify({
            "msg": "User {} already exists".format(old_user.email)
        })
    new_user = UserModel(firstname="Peter", lastname="Parker", email="pparker@spidey.com")
    new_user.save()
    return jsonify(new_user.json())

if __name__ == '__main__':
    app.run()
