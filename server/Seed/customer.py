#!/usr/bin/env python3
from Models.customer import Customer
from config import db, app
from faker import Faker
import os 
from Models.review import Review


if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
         def create_customer_data():
            customers = []
            print("Deleting existing data...")
            Customer.query.delete()
            for i in range(1,5):
                customers.append(Customer(first_name=fake.first_name(), 
                                last_name=fake.last_name()))
                
            db.session.add_all(customers)
            db.session.commit()
         print("Adding seed data...")
         create_customer_data()
            


