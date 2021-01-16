from cockroachdb.sqlalchemy import run_transaction
from sqlalchemy.orm import sessionmaker

from ..app import db
from .user import UserModel



class JobModel(db.Model):
    __tablename__ = "job"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), default="task")
    description = db.Column(db.String(400))

    owner_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    volunteer_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=True)

    reward = db.Column(db.Integer)

    def __repr__(self):
        return f"<Job({self.id}, {self.title}, {self.description}, {self.reward}, {self.owner_id}, {self.volunteer_id})"


    def save(self):
        db.session.add(self)
        db.session.commit()
        print("Added a job")


    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter(cls.id==_id).first()