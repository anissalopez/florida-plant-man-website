#!/usr/bin/env python3
from flask import abort, make_response, request, session
from models import Plant, Customer, Review, Cart, CartItem
from flask_restful import Resource
from werkzeug.utils import secure_filename
import uuid
from config import app, db, api
import os
import base64

def encode_imgage_directory():
    image_directory = os.path.join(app.config["Images"])
    image_files = os.listdir(image_directory)

    images = {}
    for filename in image_files:
        file_path = os.path.join(image_directory, filename)
        with open(file_path, 'rb') as f:
            encoded_image = base64.b64encode(f.read()).decode('utf-8')
            encoded_image = encoded_image.replace('\n', '')
            image_url = 'data:image/jpg;base64,' + encoded_image
            images[filename] = image_url
    return images

class Plants(Resource):
    def get(self):
        encoded_images = encode_imgage_directory()
        plants = Plant.query.all()
        plant_data = []

        for plant in plants:
            plant_info = {
                "id": plant.id,
                "name": plant.name,
                "description": plant.description,
                "price": plant.price,
                "qty": plant.qty,
                "sun": plant.sun,
                "water": plant.water,
                "reviews": [review.to_dict() for review in plant.reviews],
                "customers": [customer.to_dict() for customer in plant.customers],
                "image1": encoded_images[plant.image1],
                "image2": encoded_images[plant.image2],
                "image3": encoded_images[plant.image3],
            }
            plant_data.append(plant_info)
        return make_response(plant_data, 200)

    def post(self):
        default_value = '0'

        image_directory = app.config["Images"]
        images = []

        uploaded_files = [
            request.files.get('image1', default_value),
            request.files.get('image2', default_value),
            request.files.get('image3', default_value)
        ]

        unique_str = str(uuid.uuid4())[:8]

        for image in uploaded_files:
            try:
                filename = f"{unique_str}_{secure_filename(image.filename)}"
                images.append(filename)
                image_path = os.path.join(image_directory, filename)
                image.save(image_path)

            except Exception as exc:
                return make_response({"An error occurred saving image": str(exc)}, 400)

        name = request.form.get('name', default_value)
        price = request.form.get('price', default_value)
        description = request.form.get('description', default_value)
        water = request.form.get('water', default_value)
        id = request.form.get('id', default_value)
        sun = request.form.get('sun', default_value)
        qty = request.form.get('qty', default_value)
        image1 = images[0]
        image2 = images[1]
        image3 = images[2]

        new_plant = Plant(
            id=id,
            name=name,
            price=price,
            description=description,
            qty=qty,
            image1=image1,
            image2=image2,
            image3=image3,
            water=water,
            sun=sun
        )
        db.session.add(new_plant)

        encoded_images = encode_imgage_directory()

        new_plant_dict = {
            "id": new_plant.id,
            "name": new_plant.name,
            "description": new_plant.description,
            "price": new_plant.price,
            "qty": new_plant.qty,
            "sun": new_plant.sun,
            "water": new_plant.water,
            "image1": encoded_images[new_plant.image1],
            "image2": encoded_images[new_plant.image2],
            "image3": encoded_images[new_plant.image3],
        }
        try:
            db.session.commit()
            return make_response(new_plant_dict, 201)
        except Exception as exc:
            db.session.rollback()
            return make_response({"An error occurred": str(exc)}, 400)


class PlantById(Resource):
    def get(self, id):
        encoded_images = encode_imgage_directory()

        plant_info = None
        for plant in Plant.query.all():
            if plant.id == id:
                plant_info = {
                    "id": plant.id,
                    "name": plant.name,
                    "description": plant.description,
                    "price": plant.price,
                    "qty": plant.qty,
                    "sun": plant.sun,
                    "water": plant.water,
                    "reviews": [],
                    "image1": encoded_images[plant.image1],
                    "image2": encoded_images[plant.image2],
                    "image3": encoded_images[plant.image3],
                }
        try:
            response = make_response(plant_info, 200)
            return response
        except Exception as exc:
            response = make_response({"Error": exc}, 500)

    def patch(self, id):
        plant = Plant.query.filter(Plant.id == id).first()
        default_value = '0'

        if not plant:
            return make_response({"Error": "Plant not found"}, 404)

        image_directory = app.config["Images"]
        images = []

        uploaded_files = [
            request.files.get('image1', default_value),
            request.files.get('image2', default_value),
            request.files.get('image3', default_value)
        ]

        unique_str = str(uuid.uuid4())[:8]

        for index, image in enumerate(uploaded_files):
            try:
                if image != default_value:
                    filename = f"{unique_str}_{secure_filename(image.filename)}"

                    images.append((index, filename))
                    image_path = os.path.join(image_directory, filename)
                    image.save(image_path)
            except Exception as exc:
                return make_response({"An error occurred saving image": str(exc)}, 400)

        plant.name = request.form.get('name', plant.name)
        plant.price = request.form.get('price', plant.price)
        plant.description = request.form.get('description', plant.description)
        plant.water = request.form.get('water', plant.water)
        plant.sun = request.form.get('sun', plant.sun)
        plant.qty = request.form.get('qty', plant.qty)

        for index, image_info in images:
            if index == 0:
                plant.image1 = image_info if image_info else plant.image1
            elif index == 1:
                plant.image2 = image_info if image_info else plant.image2
            elif index == 2:
                plant.image3 = image_info if image_info else plant.image3

        encoded_images = encode_imgage_directory()

        updated_plant = {
            "id": plant.id,
            "name": plant.name,
            "description": plant.description,
            "price": plant.price,
            "qty": plant.qty,
            "sun": plant.sun,
            "water": plant.water,
            "image1": encoded_images[plant.image1],
            "image2": encoded_images[plant.image2],
            "image3": encoded_images[plant.image3],
        }

        try:
            db.session.add(plant)
            db.session.commit()
            return make_response(updated_plant, 200)
        except Exception as exc:
            db.session.rollback()
            return make_response({"Error": str(exc)}, 500)

    def delete(self, id):

        record = Plant.query.filter(Plant.id == id).first()

        db.session.delete(record)
        db.session.commit()

        response_dict = {"message": "record successfully deleted"}

        response = make_response(
            response_dict,
            200
        )
        return response


class Reviews(Resource):
    def get(self):
        reviews = [review.to_dict() for review in Review.query.all()]
        print(reviews)

        response = make_response(reviews, 200)
        
        return response

    def post(self):
        data = request.get_json()

        try:
            rating = int(data['rating'])

            comment = data['comment']
            customer_id = data['customer_id']
            plant_id = data['plant_id']

            new_rating = Review(
                rating=rating,
                comment=comment,
                plant_id=plant_id,
                customer_id=customer_id
            )

            db.session.add(new_rating)
            db.session.commit()

            response = make_response(new_rating.to_dict(), 201)
            return response
        except Exception as exc:
            response = make_response({"An error occurred": exc}, 400)
            return response


class Customers(Resource):
    def get(self):
        customers = [customers.to_dict()
                     for customers in db.session.query(Customer)]
        response = make_response(customers, 200)
        return response

    def patch(self):
        data = request.get_json()
        customerId = data.get('customerId', 0)
        plantId = data.get('plantId',0)
   
        customer = Customer.query.filter_by(id=customerId).first()
        plant = Plant.query.filter_by(id=plantId).first()
        if plant and customer:
            customer.plants.append(plant)
            db.session.commit()
            response = make_response(customer.to_dict(), 201)
        else:
            db.session.rollback()
            response = make_response({"error": "Customer or plant not found"}, 400) 
        return response

    def post(self):
        data = request.get_json()

        new_customer = Customer(first_name=data.get(
            "first_name", "0"), last_name=data.get("last_name", "0"))
        db.session.add(new_customer)

        try:
            db.session.commit()
            response = make_response(new_customer.to_dict(), 201)
        
            return response
        except Exception as exc:
            db.session.rollback()
            response = make_response({"Error creating customer": exc}, 400)

def cart_details(cart):
    encoded_images = encode_imgage_directory()
    cartDetails = []
   
    for item in cart.cartitems:
                    
        item_details = {}  
         
        item_details['displayImg'] = encoded_images[item.plant.image1]
        item_details['qty'] = item.qty
        item_details['name'] = item.plant.name
        item_details['price'] = item.plant.price
        item_details['id'] = item.plant.id

        cartDetails.append(item_details)

    modified_cart_dict = cart.to_dict() 
    modified_cart_dict['cartitems'] = cartDetails
    modified_cart_dict['total_items'] = cart.total_quantity()

    return modified_cart_dict

    
class CartItems(Resource):

    def get(self):

        if 'cart_id' in session:
            cart = Cart.query.filter_by(id=session['cart_id']).first()

            if not cart:
                del session['cart_id']
                response = make_response({"cartitems": [], "total": 0}, 200)
                return response 

            cart_info = cart_details(cart)
            response = make_response(cart_info, 200)
            return response
     
        else: 
            response = make_response({"cartitems": [], "total": 0}, 200)
            return response 


    def post(self):
        data = request.get_json()
        plant_id = data.get('plant_id')
        qty = data.get('qty', 1)

        if not plant_id:
            return abort(400, description="Plant ID is required")

        plant = Plant.query.filter_by(id=plant_id).first()

        if not plant:
            return abort(404, description="Plant not found")

        if 'cart_id' in session:
            cart = Cart.query.filter_by(id=session['cart_id']).first()
            if not cart:
                del session['cart_id']
                return abort(404, description="Cart not found")

        
            cart_plant = CartItem.query.filter_by(
                cart_id=cart.id, plant_id=plant_id).first()
            
            if cart_plant:
                
                cart_plant.qty += qty
            else:
            
                cart_plant = CartItem(
                    plant_id=plant_id, cart_id=cart.id, qty=qty)
              
                cart.cartitems.append(cart_plant)

            db.session.commit()
            cart.update_total()

            cart_info = cart_details(cart)

            response = make_response(cart_info, 201)

            return response
          
        else:
         
            new_cart = Cart()
            db.session.add(new_cart)
      
            cart_plant = CartItem(
                plant_id=plant_id, cart_id=new_cart.id, qty=qty)

            new_cart.cartitems.append(cart_plant)

            db.session.add(cart_plant)
            
            db.session.commit()
            new_cart.update_total()

            cart_info = cart_details(new_cart)

            response = make_response(cart_info, 201)
            session['cart_id'] = new_cart.id
            return response
        
    def patch(self):
        data = request.get_json()

        plant_id = data.get('plant_id')
        qty = data.get('qty', 1)

        cart = Cart.query.filter_by(id=session['cart_id']).first() 

        cart_plant = CartItem.query.filter_by(
                cart_id=cart.id, plant_id=plant_id).first()
           
        cart_plant.qty = qty

        db.session.commit()
        cart.update_total()
      
        cart_info = cart_details(cart)

        response = make_response(cart_info, 201)
  
        return response
    
    def delete(self):
        data = request.get_json()
        plant_id = data.get('plant_id')
        cart = Cart.query.filter_by(id=session['cart_id']).first()
        cart_plant = CartItem.query.filter_by(
                cart_id=cart.id, plant_id=plant_id).first()
            
        db.session.delete(cart_plant)
        db.session.commit()

        cart.update_total()
        cart_info = cart_details(cart)

        response = make_response(cart_info, 201)
        return response
            
           
api.add_resource(Plants, '/plants')
api.add_resource(PlantById, '/plants/<int:id>')
api.add_resource(Reviews, '/reviews')
api.add_resource(Customers, '/customers')
api.add_resource(CartItems, '/cartitems')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
