from sqlalchemy import DateTime, func
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

from config import db


class Customer(db.Model, SerializerMixin):
    __tablename__ ='customers'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)

    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    reviews = db.relationship(
        'Review', back_populates='customer', cascade='all, delete-orphan')
 
    # plants = association_proxy('reviews', 'plant',
    #                              creator=lambda project_obj: Review(project=project_obj))
    
    plants = db.relationship('Plants', secondary='review', back_populates='customers')
    serialize_rules =('-reviews.customer',)

    @validates('first_name', 'last_name')
    def validate_rating(self, key, value):
        if not value:
            raise ValueError('Please enter a valid name')
        return value
    
    def __repr__(self):
        return f'Name: {self.first_name} - reviews: {self.reviews} -plants:{self.plants}'
