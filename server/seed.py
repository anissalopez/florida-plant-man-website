#!/usr/bin/env python3
from models import Plant, Customer, Review, Cart

from config import db, app
from faker import Faker

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        def create_customer_data():
            customers = []
            print("Deleting existing customer data...")
            Customer.query.delete()
            for i in range(1,5):
                customers.append(Customer(first_name=fake.first_name(), 
                                last_name=fake.last_name()))
                
            db.session.add_all(customers)
            db.session.commit()
            print("Adding customer seed data...")
         

        ant1 = 'ant1.jpg'
        ant2 = 'ant2.jpg'
        ant3 = 'ant3.jpg'
        burl1 = 'burl1.jpg'
        burl2 = 'burl2.jpg'
        burl3 = 'burl3.jpg'
        thai1 = 'thai1.jpg'
        thai2 = 'thai2.jpg'
        thai3 = 'thai3.jpg'
        syn1 = 'syn1.jpg'
        syn2 = 'syn2.jpg'
        syn3 = 'syn3.jpg'
        sun = "bright, indirect sunlight for 6-8 hours daily"
        water = "water thorougly once per week, allowing top layer of soil to dry out completely in between waterings."
        antdesc= """The new Anthurium 'Michelle' is  said to have been named after the "Anthurium Doctor" Jeff Block's wife, 
                    Michelle.These new hybrids are vigorous plants with bold colors ranging from burgundy-purples to red-browns! 
                    As the foliage matures, their hues grow richer and the color on the veins more pronounced. Even more unique is that 
                    the cultivar retains its dark red color as it matures, while most Anthuriums don't.
                    """
        montthaidesc ="""This rare and striking plant boasts lush, heart-shaped leaves adorned with unique, silvery-white 
                            crescent patterns, making it a true standout in any plant collection. The unique, speckled coloring that
                            puts the "constellation" in this variety's name (the variegation is likened to the  starry night sky) is due to a gene mutation, 
                            which means it can only be reproduced through propagation."""
        syndesc = """The Syngonium Aurea Variegated plant is a stunning tropical houseplant known for its striking foliage. 
                        This easy-to-care-for plant is a popular choice among plant enthusiasts, making it an ideal addition to 
                        any indoor garden or home decor."""
        burldesc = """Monstera Burle Marx Flame, a botanical masterpiece that will set your space ablaze with style and 
                        sophistication. With its uniquely shaped, flame-like leaves, this Monstera variety is a true work of art, 
                        adding a touch of drama to your interior decor. It thrives in bright indirect sunlight, making it an ideal 
                        choice for well-lit areas in your home."""
        
        def create_plant_data():
                print("Deleting existing plant data...")
                Plant.query.delete()
                plants = []
                plant1 = Plant(name='Anthurium "Michelle" by Doc Block', price='199.99', water=water,
                                sun=sun, image1=ant1, image2=ant2, image3=ant3, 
                                qty=2, description=antdesc)
                plant2 = Plant(name="Monstera Thai Constellation", price='129.00', water=water, 
                                sun=sun, image1=thai1, image2=thai2, image3=thai3,
                                qty=1, description=montthaidesc)
                plant3 = Plant(name="Syngonium Podophyllum Aurea", price='49.99', water=water, 
                                sun=sun, image1=syn1, image2=syn2, image3=syn3,
                                qty=4, description=syndesc)
                plant4 = Plant(name="Monstera Burle Marx Flame", price='599.99', water=water, 
                                sun=sun, image1=burl1, image2=burl2, image3=burl3,
                                qty=4, description=burldesc)
                plants.extend([plant1, plant2, plant3, plant4])
                db.session.add_all(plants)
                db.session.commit()
                print("Adding seed data...")
        comment1= """Item is exactly as described. Packaged very well and plant started putting out a new 
                        leaf right away. Roots also looked very healthy!"""
         
        comment2="""Awesome plant from a great seller with excellent communication"""
        comment3="""Plant showed up absolutely stunning and the seller did an amazing job answering all my 
                    questions before ordering."""
        comment4="""Company was wonderful to work with. The packaging was impeccable 
                     and my plants arrived in great condition."""
        def create_review_data():
            print("Deleting existing review data...")
            Review.query.delete()
            reviews = []
            review1 = Review(plant_id=1, customer_id=1, rating=5, comment=comment1)
            review2 = Review(plant_id=1, customer_id=2, rating=5, comment=comment2)
            review3 = Review(plant_id=2, customer_id=3, rating=5, comment=comment3)
            review4 = Review(plant_id=3, customer_id=4, rating=5, comment=comment4)
            
            reviews.extend([review1, review2, review3, review4])
            db.session.add_all(reviews)
            db.session.commit()
            print("Adding review seed data...")
        
             
        # def create_cart_data():
        #         print("Deleting existing cart data...")
        #         Cart.query.delete()

        #         plants = Plant.query.all()
         

        #         cart1 = Cart()
        #         cart2 = Cart()

        #         cart1.plants.extend([plants[0], plants[1], plants[2]])
        #         cart2.plants.extend([plants[1], plants[2]])
              
 
        #         db.session.add_all([cart1, cart2])

        #         cart1.update_total()
        #         cart2.update_total()
        #         print(cart1.plants)

        #         db.session.commit()
        #         print("Cart seeded!")
                    
        create_customer_data()
        create_plant_data()
        create_review_data()
        # create_cart_data()
        print("database seeded")
            


