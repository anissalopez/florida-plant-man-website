#!/usr/bin/env python3

import random
from random import randint, choice as rc

from faker import Faker

from app import app
from models import db, Plant

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        sun = "bright, indirect sunlight for 6-8 hours daily"
        water = "water thorougly, allowing top layer of soil to dry out completely in between waterings."
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
        def create_plant_data():
            print("Deleting existing data...")
            Plant.query.delete()
            plants = []
            plant1 = Plant(name='Anthurium "Michelle" by Doc Block', price='199.99', water=water,
                            sun=sun, image1=ant1, image2=ant2, image3=ant3, 
                            qty=2)
            plant2 = Plant(name="Monstera Thai Constellation", price='129.00', water=water, 
                            sun=sun, image1=montthai1, image2=montthai2, image3=montthai3,
                            qty=1)
            plant3 = Plant(name="Syngonium Podophyllum Aurea", price='49.99', water=water, 
                            sun=sun, image1=syn1, image2=syn2, image3=syn3,
                            qty=4)
            plant4 = Plant(name="Monstera Burle Marx Flame", price='599.99', water=water, 
                            sun=sun, image1=mont1, image2=mont2, image3=mont3,
                            qty=4)
            plants.extend([plant1, plant2, plant3, plant4])
            db.session.add_all(plants)
            db.session.commit()
        print("Adding seed data...")
        create_plant_data()
                
            
        
        
