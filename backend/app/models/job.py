import os
from uuid import uuid4
from cockroachdb.sqlalchemy import run_transaction
from sqlalchemy.orm import sessionmaker
from geoalchemy2 import func
from geoalchemy2.types import Geometry
from geoalchemy2.elements import WKTElement
from haversine import haversine, Unit

from ..app import db, app
from .user import UserModel

import psycopg2



class JobModel(db.Model):
    __tablename__ = "job"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), default="task")
    description = db.Column(db.String(400), nullable=False)

    owner_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    volunteer_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=True)
    reward = db.Column(db.Integer)

    location = db.Column(Geometry(geometry_type="POINT", srid=4326)) # point representing long & lat
    longitude = db.Column(db.Float)
    latitude = db.Column(db.Float)


    def __repr__(self):
        return f"<Job({self.id}, {self.title}, {self.description}, {self.reward}, {self.owner_id}, {self.volunteer_id})"

    def json(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "owner_id": self.owner_id,
            "volunteer_id": self.volunteer_id,
            "longitude": self.longitude,
            "latitude": self.latitude,
        }

    def dist_from_point(self, latitude, longitude):
        return haversine((float(self.latitude), float(self.longitude)), (float(latitude), float(longitude)))

    def save(self):
        db.session.add(self)
        db.session.commit()
        print("Added a job")

    def init_save(self):
        """Saves and turns latitude & longitude into point objects"""
        connection = db.engine.raw_connection()
        with connection.cursor() as cur:
            stmt = f"INSERT INTO job (description, owner_id, location, latitude, longitude) VALUES( '{self.description}', {self.owner_id}, ST_SetSRID(ST_MakePoint({self.latitude}, {self.longitude}), 4326), {self.latitude}, {self.longitude});"
            # print(stmt)
            cur.execute(
                stmt
            )
        connection.commit()

    @classmethod
    def find_closest(cls, lon, lat, radius, limit=5):
        """Return the 5 closest jobs to the point"""
        # Get all jobs
        jobs = cls.get_jobs()

        print(jobs[0])
        print(jobs[1])
        print(type(jobs[0]))

        # Sort jobs by distance to point
        jobs.sort(key=lambda job: job.dist_from_point(lat, lon))
        print(jobs)

        # Return the top
        return jobs[:limit]

    @classmethod
    def find_closest_sql(cls):
        connection = db.engine.raw_connection()
        with connection.cursor() as cur:
            # stmt = f"SELECT id, ST_Distance("
            stmt = f"INSERT INTO job (description, owner_id, location, latitude, longitude) VALUES( '{self.description}', {self.owner_id}, ST_SetSRID(ST_MakePoint({self.latitude}, {self.longitude}), 4326), {self.latitude}, {self.longitude});"
            # print(stmt)
            cur.execute(
                stmt
            )
        connection.commit()


    # @classmethod
    # def find_closest(cls, lon, lat, radius, limit=5):
    #     """Find the closest requests to a point"""

    #     center = 'POINT({}, {})'.format(lon, lat)
    #     cls.query.order_by(func.ST_Distance(cls.location, center))

    #     pt = WKTElement('POINT({0} {1})'.format(lon, lat), srid=4326)
    #     return cls.query.order_by(cls.location.distance_box(pt)).all()


    def add_location(self):
        # connection = db.engine.raw_connection()
        # print(self.id)
        # with connection.cursor() as cur:
        #     cur.execute(
        #         f"UPDATE job SET location = ST_SetSRID(ST_MakePoint({self.latitude}, {self.longitude}), 4326) where id={self.id};"
        #     )
            # db.session.commit()
        # self.location = WKTElement(f'POINT({req_body["longitude"]} {req_body["latitude"]})')
        # def callback(session):
        #     session.query(self.__class__).filter("jobModel.id"==self.id).update(
        #         {"location": f'POINT({self.longitude}, {self.latitude})'}
        #     )

        # run_transaction(sessionmaker(bind=db.engine), callback)
        conn = psycopg2.connect(os.environ.get("POSTGRES_DB_URI"))
        with conn.cursor() as cur:
            print("Connected with driver")
            ret = cur.execute(f"UPDATE job SET description = 'Wish it worked' where id={self.id};")
            print("ret", ret)
            # cur.execute(f"UPDATE job SET location = ST_SetSRID(ST_MakePoint({self.latitude}, {self.longitude}), 4326) where id={self.id};")
        conn.commit()
        conn.close()
        return None

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter(cls.id==_id).first()


    @classmethod
    def get_jobs(cls, limit=None):
        """Return a list of jobs"""
        if limit:
            return cls.query.limit(int(limit))
        return cls.query.all()