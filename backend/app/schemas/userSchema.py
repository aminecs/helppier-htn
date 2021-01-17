from ..app import ma
from ..models.user import UserModel


class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = UserModel
