from sqlalchemy import DateTime, func
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
import re


from config import db


class Plant(db.Model, SerializerMixin):
    __tablename__ ='plants'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    water = db.Column(db.String, nullable=False)
    sun = db.Column(db.String, nullable=False)
    qty = db.Column(db.Integer)
    price = db.Column(db.String, nullable=False)
    image1 = db.Column(db.String, nullable=False)
    image2 = db.Column(db.String, nullable=False)
    image3 = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)

    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    reviews = db.relationship(
        'Review', back_populates='plant', cascade='all, delete-orphan')
   
    customers = association_proxy('reviews', 'customer',
                                 creator=lambda customer_obj: Review(customer=customer_obj))

    serialize_rules =('-reviews.plant',)

    @validates('name', 'water', 'sun', 'image1', 'image2', 'image3', 'description')
    def validate_inputs(self, key, value):  
        if len(value) < 5:
            raise ValueError('Input must be greater than 5 characters')
        return value
    
    @validates('qty')
    def validate_qty(self, key, value):
        if int(value) < 1:
            raise ValueError('Must enter a value greater than 1')
        return value
    
    @validates('price')
    def validate_price(self, key, value):
        pattern = r'^\d+\.[0-9][0-9]$'
        if not re.match(pattern, value):
            raise ValueError("""Price must be formatted with two digits 
            after the decimal i.e 299.99. If whole number enter two 0s i.e 30.00""")
        return value
    
    def __repr__(self):
        return f'Id: {self.id} - Name: {self.name} - Qty:{self.qty} - price:{self.price}'







# from sqlalchemy import DateTime, func
# from sqlalchemy_serializer import SerializerMixin
# from sqlalchemy.orm import validates
# from sqlalchemy.ext.associationproxy import association_proxy
# import re
# # from .review import Review

# from config import db

# class Plant(db.Model, SerializerMixin):
#     __tablename__ ='plants'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String, nullable=False)
#     water = db.Column(db.String, nullable=False)
#     sun = db.Column(db.String, nullable=False)
#     qty = db.Column(db.Integer)
#     price = db.Column(db.String, nullable=False)
#     image1 = db.Column(db.String, nullable=False)
#     image2 = db.Column(db.String, nullable=False)
#     image3 = db.Column(db.String, nullable=False)
#     description = db.Column(db.String, nullable=False)

#     created_at = db.Column(DateTime(), server_default=func.now())
#     updated_at = db.Column(DateTime(), onupdate=func.now())

#     reviews = db.relationship(
#         'Review', back_populates='plant', cascade='all, delete-orphan')
    
#     customers = db.relationship('Customer', back_populates='plants', secondary="reviews")

#     serialize_rules =('-reviews.plant',)

#     @validates('name', 'water', 'sun', 'image1', 'image2', 'image3', 'description')
#     def validate_inputs(self, key, value):  
#         if len(value) < 5:
#             raise ValueError('Input must be greater than 5 characters')
#         return value
    
#     @validates('qty')
#     def validate_qty(self, key, value):
#         if int(value) < 1:
#             raise ValueError('Must enter a value greater than 1')
#         return value
    
#     @validates('price')
#     def validate_price(self, key, value):
#         pattern = r'^\d+\.[0-9][0-9]$'
#         if not re.match(pattern, value):
#             raise ValueError("""Price must be formatted with two digits 
#             after the decimal i.e 299.99. If whole number enter two 0s i.e 30.00""")
#         return value
    
#     def __repr__(self):
#         return f'Id: {self.id} - Name: {self.name} - Qty:{self.qty} - price:{self.price}'


