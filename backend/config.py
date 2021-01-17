import os
base = os.path.abspath(os.path.dirname(__file__))

class Config:
    DEBUG = False
    LOCAL_DATABASE_URI = f"sqlite:///{os.path.join(base, 'app.db')}"
    SQLALCHEMY_DATABASE_URI = os.environ.get("COCKROACH_DB_URI", None)
    SECRET_KEY = os.environ.get("SECRET_KEY", "some-secret-here")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
