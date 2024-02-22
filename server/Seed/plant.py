#!/usr/bin/env python3
from app import app
from Models.plant import db, Plant


if __name__ == '__main__':
    with app.app_context():
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
            print("Deleting existing data...")
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
        create_plant_data()
                
            
        
        
