#!/usr/bin/env python3
import json
from flask import make_response, request, send_from_directory, Response, jsonify
from flask_restful import Resource

# Local imports
from config import app, db, api
import os
# Add your model imports
from models import Plant, Review
import base64


@app.route('/test')
def index():
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
        breakpoint()
        return send_from_directory(app.config['Images'], "ant1.jpg")
    
    
class Plants(Resource):
    def get(self):
        plants = [plant.to_dict() for plant in Plant.query.all()]

        response = make_response(plants, 200)
        return response
    
    def post(self):
        data = request.get_json()

        try:
            name = data['name']
            price = data['price']
            care_instructions = data.get('care_instructions')
            qty = data['qty']
            images = data['images']

          
            new_plant = Plant(
                name=name,
                price=price,
                care_instructions=care_instructions,  
                qty=qty,
                images=images
            )

    
            db.session.add(new_plant)
            db.session.commit()


            response_data = make_response(new_plant.to_dict(), 201)
            return response_data
        except Exception as exc:
            response = make_response({"An error occurred": exc}, 400)
            return response


class PlantById(Resource):
    
    def get(self, id):
        result = None
        for plant in Plant.query.all():
            if plant.id == id:
                result = plant.to_dict()

        try:
            response = make_response(result, 200)
            return response
        except Exception as exc:
            response = make_response({"Error": exc}, 500)
            

class Reviews(Resource):
    def get(self):
        reviews = [review.to_dict() for review in Review.query.all()]

        response = make_response(reviews, 200)
        return response
    
    def post(self):
        data = request.get_json()

        try:
            rating = data['rating']
            comment = data['comment']
        
            new_rating = Review(
                rating=rating,
                comment=comment
            )

            db.session.add(new_rating)
            db.session.commit()


            response = make_response(new_rating.to_dict(), 201)
            return response
        except Exception as exc:
            response = make_response({"An error occurred": exc}, 400)
            return response


api.add_resource(Plants, '/plants')
api.add_resource(PlantById, '/plants/<int:id>')
api.add_resource(Reviews, '/reviews')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

