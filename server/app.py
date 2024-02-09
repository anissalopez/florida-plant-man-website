#!/usr/bin/env python3
import json
from flask import make_response, request, send_from_directory, jsonify
from flask_restful import Resource
from werkzeug.utils import secure_filename
import uuid


# Local imports
from config import app, db, api
import os
# Add your model imports
from models import Plant, Review, Customer
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

# @app.route('/test')
# def index():
        # image_path = os.path.join(app.config["Images"], "ant1.jpg")
        # image_directory = os.path.join(app.config["Images"])
        # image_files = os.listdir(image_directory)

        # images = {}
        # for filename in image_files:
        #     file_path = os.path.join(image_directory, filename)
        #     with open(file_path, 'rb') as f:
                # Read the binary image data and encode it as a base64 string
                # image = f.read()
                # images[filename] = image
                # encoded_image = base64.b64encode(f.read()).decode('utf-8')
                # encoded_image = encoded_image.replace('\n', '')
                # image_url = 'data:image/jpg;base64,' + encoded_image
               
        #         images[filename] = image 
        # return make_response(jsonify(images), 200)
        # breakpoint()
        # return send_from_directory(app.config['Images'], "ant1.jpg")
    
    
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
                "reviews": [],  
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
           
        sun = request.form.get('sun', default_value)
        qty = request.form.get('qty', default_value)
        image1 = images[0]
        image2 = images[1]
        image3 = images[2]

          
        new_plant = Plant(
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
        try:
            db.session.commit()
            return make_response(new_plant.to_dict(), 201)
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

        for image in uploaded_files:
            try:
                if image != default_value:
                    filename = f"{unique_str}_{secure_filename(image.filename)}"
                    images.append(filename)
                    image_path = os.path.join(image_directory, filename)
                    image.save(image_path)
            except Exception as exc:
                return make_response({"An error occurred saving image": str(exc)}, 400)

        # for attr in request.form:
        #     if 'image' not in attr:
        #         setattr(plant, attr, request.form[attr])

        # Update specific attributes
        plant.name = request.form.get('name', plant.name)
        plant.price = request.form.get('price', plant.price)
        plant.description = request.form.get('description', plant.description)
        plant.water = request.form.get('water', plant.water)
        plant.sun = request.form.get('sun', plant.sun)
        plant.qty = request.form.get('qty', plant.qty)

        # Update image paths if new images were uploaded
        if images:
            plant.image1 = images[0]
            plant.image2 = images[1]
            plant.image3 = images[2]

        try:
            db.session.add(plant)
            db.session.commit()
            response_dict = plant.to_dict()
            return make_response(response_dict, 200)
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
                plant_id = plant_id,
                customer_id = customer_id
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
        customers = [customers.to_dict() for customers in Customer.query.all()]

        response = make_response(customers, 200)
        return response
    
    def post(self):
        data = request.get_json()
        print(data)

        new_customer = Customer(first_name=data.get("first_name", "0"), last_name=data.get("last_name", "0"))
        db.session.add(new_customer)

        try:
            db.session.commit()
            response = make_response(new_customer.to_dict(), 201)
            return response
        except Exception as exc:
            db.session.rollback()
            
            response = make_response({"Error creating customer": exc}, 400)

    
api.add_resource(Plants, '/plants')
api.add_resource(PlantById, '/plants/<int:id>')
api.add_resource(Reviews, '/reviews')
api.add_resource(Customers, '/customers')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

