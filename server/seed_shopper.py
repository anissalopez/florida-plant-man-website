#!/usr/bin/env python3
from app import app
from models import db, Shopper
from faker import Faker


if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
         def create_shopper_data():
            shoppers = []
            print("Deleting existing data...")
            Shopper.query.delete()
            for i in range(1,5):
                shoppers.append(Shopper(first_name=fake.first_name(), 
                                last_name=fake.last_name()))
                
            db.session.add_all(shoppers)
            db.session.commit()
         print("Adding seed data...")
         create_shopper_data()
            


