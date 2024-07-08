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
         
        ant1 = 'https://res.cloudinary.com/ds5xrsi5x/image/upload/v1720463065/ant2_zqfgya.avif'
        ant2 = 'https://res.cloudinary.com/ds5xrsi5x/image/upload/v1720463057/ant1_w578jo.jpg'
        ant3 = 'https://res.cloudinary.com/ds5xrsi5x/image/upload/v1720463065/ant3_bqjblj.jpg'
        burl1 = 'https://res.cloudinary.com/ds5xrsi5x/image/upload/v1720463066/burl2_gta68x.avif'
        burl2 = 'https://res.cloudinary.com/ds5xrsi5x/image/upload/v1720463065/burl1_kybblf.avif'
        burl3 = 'https://res.cloudinary.com/ds5xrsi5x/image/upload/v1720463066/burl3_rs7a1z.jpg'
        thai1 = 'https://res.cloudinary.com/ds5xrsi5x/image/upload/v1720463066/thai1_ro4kmu.avif'
        thai2 = 'https://res.cloudinary.com/ds5xrsi5x/image/upload/v1720463067/thai2_hgcoqn.avif'
        thai3 = 'https://res.cloudinary.com/ds5xrsi5x/image/upload/v1720463067/thai3_lz6ehl.jpg'
        syn1 = 'https://res.cloudinary.com/ds5xrsi5x/image/upload/v1720463066/syn2_vll81q.jpg'
        syn2 = 'https://res.cloudinary.com/ds5xrsi5x/image/upload/v1720463066/syn1_oanifl.avif'
        syn3 = 'https://res.cloudinary.com/ds5xrsi5x/image/upload/v1720463066/syn3_arucla.avif'
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

        
        def create_review_data():
            print("Deleting existing review data...")
            try:
               
                Review.query.delete()

             
                customers = Customer.query.limit(4).all()

                
                plants = Plant.query.limit(4).all()

              
                if len(customers) < 4 or len(plants) < 4:
                    raise ValueError("Not enough customers or plants to create reviews.")

            
                comments = [
                    "Excellent plant, very healthy!",
                    "This plant is beautiful and easy to care for.",
                    "Thriving in my garden!",
                    "Highly recommend, great quality!"
                ]

                reviews = []
                for i in range(4):
                    review = Review(plant_id=plants[i].id, customer_id=customers[i].id, rating=5, comment=comments[i])
                    reviews.append(review)

                db.session.add_all(reviews)
                db.session.commit()
                print("Review seed data added successfully.")
            except Exception as e:
                db.session.rollback()
                print(f"An error occurred: {e}")
                
                    
        def cart_data():
                print("Deleting existing cart data...")
                Cart.query.delete()
                db.session.commit()

        
              
        create_customer_data()
        create_plant_data()
        create_review_data()
        cart_data()

        print("database seeded")
            


