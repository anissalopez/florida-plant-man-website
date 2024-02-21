#!/usr/bin/env python3
from app import app
from models import db, Customer
from faker import Faker


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
            


