#!/usr/bin/env python3

# Standard library imports

# Remote library imports
import json
from flask import make_response, request
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Plant


# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class Plants(Resource):
    def get(self):
        plants = [plant.to_dict for plant in Plant.query.all()]

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

            # Create a new Plant object
            new_plant = Plant(
                name=name,
                price=price,
                care_instructions=care_instructions,  # No need to serialize if it's already JSON
                qty=qty,
                images=images
            )

            # Add the new plant to the database session and commit
            db.session.add(new_plant)
            db.session.commit()

            # Return a success response with the created plant data
            response_data = make_response(new_plant.to_dict(), 201)
            return response_data
        except Exception as exc:
            response = make_response({"An error occurred": exc}, 400)
            return response


api.add_resource(Plants, '/plants')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

