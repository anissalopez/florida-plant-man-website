#!/usr/bin/env python3
from dotenv import load_dotenv

load_dotenv(override=True)
import cloudinary
import cloudinary.uploader
import cloudinary.api

from flask import abort, make_response, render_template, request, session
from models import Plant, Customer, Review, Cart, CartItem
from flask_restful import Resource

from config import app, db, api
import os


cloudinary.config(cloud_name =os.getenv('CLOUD_NAME'), api_key=os.getenv('API_KEY'), 
        api_secret=os.getenv('API_SECRET'))


@app.route('/')
@app.route('/<int:id>')
def index(id=0):
    return render_template("index.html")


class Plants(Resource):
    def get(self):
        plants = Plant.query.all()
        data = [plant.to_dict() for plant in plants]
   
        return make_response(data, 200)

    def post(self): 
        default_value = '0'
        images = []

        uploaded_files = [
            request.files.get('image1', default_value),
            request.files.get('image2', default_value),
            request.files.get('image3', default_value)
        ]

        for image in uploaded_files:
            try:
              
                app.logger.info('%s file_to_upload', image)
                upload_result = cloudinary.uploader.upload(image)
                images.append(upload_result['url'])
             

            except Exception as exc:
                return make_response({"An error occurred saving image": str(exc)}, 400)
   
        new_plant = Plant(
            id=request.form.get('id', default_value),
            name=request.form.get('name', default_value),
            price=request.form.get('price', default_value),
            description=request.form.get('description', default_value),
            qty=request.form.get('qty', default_value),
            image1=images[0],
            image2=images[1],
            image3=images[2],
            water=request.form.get('water', default_value),
            sun=request.form.get('sun', default_value)
        )
        db.session.add(new_plant)

        try:
            db.session.commit()
            return make_response(new_plant.to_dict(), 201)
        except Exception as exc:
            db.session.rollback()
            return make_response({"An error occurred": str(exc)}, 400)


class PlantById(Resource):
    def get(self, id):
     

        plant_info = None
        for plant in Plant.query.all():
            if plant.id == id:
                plant_info = plant.to_dict()
             
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

    
        images = []

        uploaded_files = [
            request.files.get('image1', default_value),
            request.files.get('image2', default_value),
            request.files.get('image3', default_value)
        ]

      

        for index, image in enumerate(uploaded_files):
            try:
                if image != default_value:
                    app.logger.info('%s file_to_upload', image)
                    upload_result = cloudinary.uploader.upload(image)
                   
                    images.append((index, upload_result['url']))
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

        try:
            db.session.add(plant)
            db.session.commit()
            # return make_response(updated_plant, 200)
            return make_response(plant.to_dict(), 200)
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
    cartDetails = []
   
    for item in cart.cartitems:
                    
        item_details = {}  
         
        item_details['displayImg'] = item.plant.image1
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
        print(qty)

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
