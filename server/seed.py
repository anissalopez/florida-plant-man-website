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
        monstera1 = 'https://images.unsplash.com/photo-1605449670493-ca1d812d0488?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vbnN0ZXJhfGVufDB8fDB8fHww'
        monstera2 = 'https://images.unsplash.com/photo-1619423089884-bc5b70bc4e2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vbnN0ZXJhfGVufDB8fDB8fHww'
        monstera3 = 'https://images.unsplash.com/photo-1630565963157-28ed2c8d3edc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vbnN0ZXJhfGVufDB8fDB8fHww'
        syn1 = 'https://images.unsplash.com/photo-1645324843957-0c7e8370c4bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3luZ29uaXVtJTIwcG9kb3BoeWxsdW18ZW58MHx8MHx8fDA%3D'
        syn2 = 'https://images.unsplash.com/photo-1606979608471-6478324d9097?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN5bmdvbml1bSUyMHBvZG9waHlsbHVtfGVufDB8fDB8fHww'
        syn3 = 'https://images.unsplash.com/photo-1688370216821-8aba89b95304?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN5bmdvbml1bSUyMHBvZG9waHlsbHVtfGVufDB8fDB8fHww'
        ant1 = 'https://cdn11.bigcommerce.com/s-pxrevx9n0f/images/stencil/1280x1280/products/3367/16485/Waroc_1C.4a__17580.1660341103.jpg?c=2'
        ant2 = 'https://cdn11.bigcommerce.com/s-pxrevx9n0f/images/stencil/1280x1280/products/3367/16484/Waroc_1C.3a__15245.1660341062.jpg?c=2'
        ant3 = 'https://cdn11.bigcommerce.com/s-pxrevx9n0f/images/stencil/1280x1280/products/3367/16427/Anth._waroc_mother_plant__83362.1660341096.jpg?c=2'
        mont1 = 'https://i.ebayimg.com/images/g/zKsAAOSwlcpldTXY/s-l1600.jpg'
        mont2 = 'https://i.ebayimg.com/images/g/zKsAAOSwlcpldTXY/s-l1600.jpg' 
        mont3 = 'https://i.ebayimg.com/images/g/m90AAOSwas5ldTXc/s-l1600.jpg'
        def create_plant_data():
            print("Deleting existing data...")
            Plant.query.delete()
            plants = []
            plant1 = Plant(name="Monstera", price='399.99', water=water,
                            sun=sun, image1=monstera1, image2=monstera2, image3=monstera3, 
                            qty=2)
            plant2 = Plant(name="Syngonium", price='280.99', water=water, 
                            sun=sun, image1=syn1, image2=syn2, image3=syn3,
                            qty=1)
            plant3 = Plant(name="Anthurium", price='190.99', water=water, 
                            sun=sun, image1=ant1, image2=ant2, image3=ant3,
                            qty=4)
            plant4 = Plant(name="Variegated Monstera", price='203.99', water=water, 
                            sun=sun, image1=mont1, image2=mont2, image3=mont3,
                            qty=4)
            plants.extend([plant1, plant2, plant3, plant4])
            db.session.add_all(plants)
            db.session.commit()
        print("Adding seed data...")
        create_plant_data()
                
            
        
        
