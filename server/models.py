from sqlalchemy import DateTime, func
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

from config import db
import re

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

    serialize_rules =('-plant.reviews', '-customer.reviews',)

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


# cart_plants = db.Table('cart_plants',
#     db.Column('cart_id', db.Integer, db.ForeignKey('carts.id'), primary_key=True),
#     db.Column('plant_id', db.Integer, db.ForeignKey('plants.id'), primary_key=True)
# )
    

class CartItem(db.Model, SerializerMixin):
    __tablename__ ='cartitems'

    id = db.Column(db.Integer, primary_key=True)
    plant_id = db.Column(db.Integer, db.ForeignKey('plants.id'))
    cart_id = db.Column(db.Integer, db.ForeignKey('carts.id'))
    qty = db.Column(db.Integer, nullable=False, default=1)

    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    plant = db.relationship('Plant', back_populates='cartitems')
    cart = db.relationship('Cart', back_populates='cartitems')

    serialize_rules =('-cart.cartitems', '-plant.cartitems')

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
   

    cartitems = db.relationship('CartItem', back_populates='plant', cascade='all, delete-orphan')

    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    reviews = db.relationship(
        'Review', back_populates='plant',cascade='all, delete-orphan' )
   
    customers = db.relationship('Customer', secondary="reviews", back_populates='plants')
    
    serialize_rules =('-cartitems.plant','-carts.plants','-reviews.plant', '-customers.reviews', '-customers.plants')

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


class Customer(db.Model, SerializerMixin):
    __tablename__ ='customers'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)

    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    reviews = db.relationship(
        'Review', back_populates='customer', cascade='all, delete-orphan')
    
    plants = db.relationship('Plant', secondary="reviews", back_populates='customers')
    serialize_rules =('-reviews.customer','-plants.customers', '-plants.reviews')

    @validates('first_name', 'last_name')
    def validate_rating(self, key, value):
        if not value:
            raise ValueError('Please enter a valid name')
        return value
    
    def __repr__(self):
        return f'Name: {self.first_name} - reviews: {self.reviews} -plants:{self.plants}'


class Cart(db.Model, SerializerMixin):
    __tablename__ ='carts'

    id = db.Column(db.Integer, primary_key=True)
    total = db.Column(db.Float, default=0.0) 
    #plants = db.relationship('Plant', secondary="cartitems", back_populates='carts')
    cartitems = db.relationship('CartItem', back_populates='cart', cascade='all, delete-orphan', overlaps="carts,plants")

    serialize_rules=('-plants.carts','-cartitems.cart', '-cartitems.plant.reviews', '-cartitems.plant.customers')

    def update_total(self):
        self.total = sum([item.qty * float(item.plant.price) for item in self.cartitems])
        db.session.commit()

  
    def total_quantity(self):
        return sum(item.qty for item in self.cartitems)

    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())
    
    # def __repr__(self):
    #     return f'Total: {self.total}'