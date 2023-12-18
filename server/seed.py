#!/usr/bin/env python3

# Standard library imports
import random
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Plant

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():

        sunlight = ["bright, indirect", "direct sunlight"]
        water = ["daily", "weekly"]
        name = ["Monstera", "Anthurium", "Syngonium"]
        images = ['https://spokaneplantfarm.com/cdn/shop/files/the-plant-farm-houseplants-2s-monstera-borsigiana-albo-pick-your-plant-6-plant-42264319295796_870x1159.jpg?v=1692991900']

        def create_plant_data():
            print("Deleting existing data...")
            Plant.query.delete()
            plants = []
            for i in range(5):
                plants.append(Plant(name=random.choice(name), price=fake.pricetag(), water=random.choice(water), sun=random.choice(sunlight), qty=random.randint(0,4), 
                            image1=images[0], image3=random.choice(images)))
            db.session.add_all(plants)
            db.session.commit()
        print("Adding seed data...")
        create_plant_data()
                
            
        
        
