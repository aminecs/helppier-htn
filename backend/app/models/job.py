import os
from uuid import uuid4
from cockroachdb.sqlalchemy import run_transaction
from sqlalchemy.orm import sessionmaker
from geoalchemy2 import func
from geoalchemy2.types import Geometry
from geoalchemy2.elements import WKTElement
from haversine import haversine, Unit
from datetime import datetime

from ..app import db, app
from .user import UserModel
from sqlalchemy.dialects.postgresql import UUID
import uuid



class JobModel(db.Model):
    __tablename__ = "job"

    # id = db.Column(db.Integer, primary_key=True)
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True)
    title = db.Column(db.String(100), default="")
    description = db.Column(db.String(400), nullable=False)
    job_type = db.Column(db.String(25))

    owner_id = db.Column(UUID(as_uuid=True), db.ForeignKey("user.id"), nullable=False)
    volunteer_id = db.Column(UUID(as_uuid=True), db.ForeignKey("user.id"), nullable=True)
    reward = db.Column(db.Integer, default=100, nullable=False)

    location = db.Column(Geometry(geometry_type="POINT", srid=4326)) # point representing long & lat
    longitude = db.Column(db.Float)
    latitude = db.Column(db.Float)

    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    time_needed_mins = db.Column(db.Float, nullable=False)

    completed = db.Column(db.Boolean, default=False, nullable=False)


    def __repr__(self):
        return f"<Job({self.id}, {self.title}, {self.description}, {self.reward}, {self.owner_id}, {self.volunteer_id})"

    def json(self):
        created_time = self.created_at.strftime("%m/%d/%Y") if self.created_at is not None else None
        volunteer_id = self.volunteer_id.hex if self.volunteer_id is not None else None
        return {
            "id": self.id.hex,
            "title": self.title,
            "description": self.description,
            "owner_id": self.owner_id.hex,
            "volunteer_id": volunteer_id,
            "longitude": self.longitude,
            "latitude": self.latitude,
            "job_type": self.job_type,
            "reward": self.reward,
            "created_at": created_time,
            "completed": self.completed,
            "time_needed_mins": self.time_needed_mins,
        }

    def dist_from_point(self, latitude, longitude):
        return haversine((float(self.latitude), float(self.longitude)), (float(latitude), float(longitude)))

    def save(self):
        if self.created_at is None:
            self.created_at = datetime.utcnow()
        if self.completed is None:
            self.completed = False
        if self.reward is None:
            self.reward = 100
        db.session.add(self)
        db.session.commit()
        print("Added a job")

    def init_save(self):
        """Saves and turns latitude & longitude into point objects"""
        connection = db.engine.raw_connection()
        with connection.cursor() as cur:
            stmt = f"INSERT INTO job (description, owner_id, location, latitude, longitude, job_type, time_needed_mins) VALUES( '{self.description}', '{self.owner_id}', ST_SetSRID(ST_MakePoint({self.latitude}, {self.longitude}), 4326), {self.latitude}, {self.longitude}, '{self.job_type}', {self.time_needed_mins});"
            cur.execute(
                stmt
            )
        connection.commit()

    def assign_volunteer(self, user_id):
        self.volunteer_id = user_id
        self.save()

    @classmethod
    def find_closest(cls, lon, lat, radius, limit=5):
        """Return the 5 closest jobs to the point"""
        # Get all jobs
        jobs = cls.get_jobs()

        # Sort jobs by distance to point
        if len(jobs) > 1:
            jobs.sort(key=lambda job: job.dist_from_point(lat, lon))

        # Return the top
        return jobs[:limit]

    @classmethod
    def find_closest_sql(cls):
        connection = db.engine.raw_connection()
        with connection.cursor() as cur:
            # stmt = f"SELECT id, ST_Distance("
            stmt = f"INSERT INTO job (description, owner_id, location, latitude, longitude) VALUES( '{self.description}', '{self.owner_id}', ST_SetSRID(ST_MakePoint({self.latitude}, {self.longitude}), 4326), {self.latitude}, {self.longitude});"
            # print(stmt)
            cur.execute(
                stmt
            )
        connection.commit()



    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter(cls.id==_id).first()


    @classmethod
    def get_jobs(cls, limit=None):
        """Return a list of jobs"""
        if limit:
            return cls.query.limit(int(limit))
        return cls.query.all()