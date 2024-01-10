#!/usr/bin/env python3
from app import app
from models import db, Review


if __name__ == '__main__':
    with app.app_context():
         comment1= """"Item is exactly as described. Packaged very well and plant started putting out a new 
                        leaf right away. Roots also looked very healthy!"""
         
         comment2="""Awesome plant from a great seller with excellent communication"""
         comment3="""Plant showed up absolutely stunning and the seller did an amazing job answering all my 
                    questions before ordering."""
         comment4="""Company was wonderful to work with. The packaging was impeccable 
                     and my plants arrived in great condition."""
         def create_review_data():
            print("Deleting existing data...")
            Review.query.delete()
            reviews = []
            review1 = Review(plant_id=1, customer_id=1, rating=5, comment=comment1)
            review2 = Review(plant_id=1, customer_id=2, rating=5, comment=comment2)
            review3 = Review(plant_id=2, customer_id=3, rating=5, comment=comment3)
            review4 = Review(plant_id=3, customer_id=4, rating=5, comment=comment4)
            
            reviews.extend([review1, review2, review3, review4])
            db.session.add_all(reviews)
            db.session.commit()
         print("Adding seed data...")
         create_review_data()