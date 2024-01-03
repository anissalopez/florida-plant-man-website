#!/usr/bin/env python3
import random
from app import app
from models import db, Plant

if __name__ == '__main__':
    with app.app_context():
        sun = "bright, indirect sunlight for 6-8 hours daily"
        water = "water thorougly once per week, allowing top layer of soil to dry out completely in between waterings."
        ant1 ="https://i.etsystatic.com/46082082/r/il/3a18d1/5453178392/il_fullxfull.5453178392_a88c.jpg"
        ant2="https://i.etsystatic.com/46082082/r/il/b99171/5453178244/il_fullxfull.5453178244_omxc.jpg"
        ant3="https://i.etsystatic.com/46082082/r/il/9ae225/5453178548/il_fullxfull.5453178548_l9a0.jpg"
        montthai1 ="https://i.etsystatic.com/46082082/r/il/b0fb8c/5450792352/il_fullxfull.5450792352_glq5.jpg"
        montthai2="https://i.etsystatic.com/46082082/r/il/283717/5498917375/il_fullxfull.5498917375_kr6s.jpg"
        montthai3="https://i.etsystatic.com/46082082/r/il/fa8ad6/5498917591/il_fullxfull.5498917591_eg4c.jpg"
        syn1="https://i.etsystatic.com/46082082/r/il/edcefa/5475002173/il_fullxfull.5475002173_iost.jpg"
        syn2="https://i.etsystatic.com/46082082/r/il/9f2c6a/5475002321/il_fullxfull.5475002321_b8ds.jpg"
        syn3="https://i.etsystatic.com/46082082/r/il/a33f8b/5475002421/il_fullxfull.5475002421_ibc0.jpg"
        mont1="https://i.etsystatic.com/46082082/r/il/16d248/5400587794/il_fullxfull.5400587794_re3h.jpg"
        mont2="https://i.etsystatic.com/46082082/r/il/c8040d/5400588006/il_fullxfull.5400588006_qa4g.jpg"
        mont3="https://i.etsystatic.com/46082082/r/il/a99203/5400588164/il_fullxfull.5400588164_ssgr.jpg"
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
                            sun=sun, image1=montthai1, image2=montthai2, image3=montthai3,
                            qty=1, description=montthaidesc)
            plant3 = Plant(name="Syngonium Podophyllum Aurea", price='49.99', water=water, 
                            sun=sun, image1=syn1, image2=syn2, image3=syn3,
                            qty=4, description=syndesc)
            plant4 = Plant(name="Monstera Burle Marx Flame", price='599.99', water=water, 
                            sun=sun, image1=mont1, image2=mont2, image3=mont3,
                            qty=4, description=burldesc)
            plants.extend([plant1, plant2, plant3, plant4])
            db.session.add_all(plants)
            db.session.commit()
        print("Adding seed data...")
        create_plant_data()
                
            
        
        
