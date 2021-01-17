from cockroachdb.sqlalchemy import run_transaction
from sqlalchemy.orm import sessionmaker
from sqlalchemy.dialects.postgresql import UUID
import uuid
import os, random
from ..crypto_req import getBalance

from ..app import db

class UserModel(db.Model):
    __tablename__ = "user"

    # id = db.Column(db.Integer, primary_key=True)
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True)
    firstname = db.Column(db.String(50))
    lastname = db.Column(db.String(50))
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(80))
    rewards = db.Column(db.Float, default=0)
    mobile_phone = db.Column(db.String(15), default="")

    wallet_addr = db.Column(db.String(50))
    wallet_key = db.Column(db.String(50))

    posted_jobs = db.relationship('JobModel', backref='owner', lazy=True, foreign_keys="JobModel.owner_id")
    volunteered_jobs = db.relationship('JobModel', backref='volunteer', lazy=True, foreign_keys="JobModel.volunteer_id")

    def __repr__(self):
        return f"<User({self.id}, {self.firstname}, {self.lastname}, {self.email}, {self.password} {self.rewards})"


    def save(self):
        self.add_wallet()
        db.session.add(self)
        db.session.commit()

    def json(self):
        rewards = float(self.rewards) if self.rewards is not None else None
        return {
            "id": self.id.hex,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "email": self.email,
            "rewards": rewards,
            "mobile_phone": self.mobile_phone,
        }

    def get_posted_jobs(self):
        """Get a list of jobs posted by user"""
        print(self.posted_jobs)

        return []


    def get_volunteered_jobs(self):
        """Get a list of jobs the user volunteered for"""

        return []


    def add_wallet(self):
        """Create and store a users wallet information"""

        if self.wallet_addr is None:
            wallets_str = os.environ.get("CRYPTO_WALLETS", None)
            if wallets_str is not None:
                wallets = wallets_str.split(" ")
                print(wallets)
                self.wallet_addr = random.choice(wallets)
                print(f"Wallet address is {self.wallet_addr}")
                # get balance
                self.rewards = getBalance(self.wallet_addr)
            else:
                print("Coult not find 'CRYPTO_WALLETS' environment variable to add wallet")

    @classmethod
    def get_top_earners(cls, limit=None):
        """Return the top earners by rewards"""
        if limit is None:
            return cls.query.order_by(cls.rewards).all()
        return cls.query.order_by(cls.rewards.desc()).limit(limit)


    @classmethod
    def find_by_email(cls, email):
        return cls.query.filter(cls.email==email).first()

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter(cls.id==id).first()

    @classmethod
    def get_users(cls):
        return cls.query.all()