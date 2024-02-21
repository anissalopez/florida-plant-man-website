from sqlalchemy import DateTime, func
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
import re

from config import db

class Review(db.Model, SerializerMixin):
    __tablename__ ='reviews'

    id = db.Column(db.Integer, primary_key=True)
    plant_id = db.Column(db.Integer, db.ForeignKey('plants.id'))
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))
    rating = db.Column(db.Integer)
    comment = db.Column(db.String)

    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    plant = db.relationship('Plant', back_populates='reviews')
    customer = db.relationship('Customer', back_populates='reviews')

    serialize_rules =('-plant.reviews', '-customer.reviews')

    @validates('rating')
    def validate_rating(self, key, value):
        if value not in range(1,6):
            raise ValueError('Rating must be between 1 and 5')
        return value
    
    @validates('comment')
    def validate_comment(self, key, value):
        if len(value) < 5:
            raise ValueError('Comment must be at least 5 characters')
        return value
    
    @validates('customer_id')
    def validate_comment(self, key, value):
        customer = Customer.query.get(value)
        if customer is None:
            raise ValueError('Customer Id does not exist')
        return value

    @validates('plant_id')
    def validate_comment(self, key, value):
        plant = Plant.query.get(value)
        if plant is None:
            raise ValueError('Plant Id does not exist')
        return value

    def __repr__(self):
        return f'Id: {self.id} - Plant_Info <{self.plant_id}> - PlantName: {self.plant} - Rating: {self.rating}'
    

