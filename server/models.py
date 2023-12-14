from sqlalchemy import DateTime, func
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class Plant(db.Model, SerializerMixin):
    __tablename__ ='plants'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    water = db.Column(db.String)
    sun = db.Column(db.String)
    qty = db.Column(db.Integer)
    price = db.Column(db.String)
    image1 = db.Column(db.String)
    image2 = db.Column(db.String)
    image3 = db.Column(db.String)
    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    @validates('name', 'care_instructions', 'images')
    def validate_inputs(self, key, value):  # Use 'key' to access the field name, and 'value' for its value
        if not len(value):
            raise ValueError('Please enter a valid input')
        return value
    

    def __repr__(self):
        return f'Id: {self.id} - Name: {self.name} - Qty:{self.qty} - price:{self.price}'
