from cockroachdb.sqlalchemy import run_transaction
from sqlalchemy.orm import sessionmaker

from ..app import db

class UserModel(db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(50))
    lastname = db.Column(db.String(50))
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(80))
    rewards = db.Column(db.Numeric(10,2))

    owned_jobs = db.relationship('JobModel', backref='owner', lazy=True, foreign_keys="JobModel.owner_id")
    volunteered_jobs = db.relationship('JobModel', backref='volunteer', lazy=True, foreign_keys="JobModel.owner_id")

    def __repr__(self):
        return f"<User({self.id}, {self.firstname}, {self.lastname}, {self.email}, {self.password} {self.rewards})"


    def save(self):
        db.session.add(self)
        db.session.commit()

    def json(self):
        return {
            "id": self.id,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "email": self.email,
            "rewards": self.rewards,
        }

    @classmethod
    def find_by_email(cls, email):
        return cls.query.filter(cls.email==email).first()

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter(cls.id==id).first()

    @classmethod
    def get_users(cls):
        return cls.query.all()