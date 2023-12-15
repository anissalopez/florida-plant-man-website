import React from "react";
import FeaturedPlants from "./FeaturedPlants";
import {Row, Container, Col, Button } from 'react-bootstrap';

import image from "../images/main.jpg"

function HomePage ({ plants }) {

    //const navigate = useNavigate();

    //const handleClick = () => navigate('/habits')
   
    const featured_plants = plants.slice(-4).map((plant) => {
       return <FeaturedPlants plant={plant} key={plant.id}/>
        
    });

    return(
 
    <Container >
     <div className="image-container"> <img src={image} className="homepage-img"/>
     <Button size="lg"className="button">Explore All Plants</Button>
    
    </div>
  
      <Row>
        <h2 className="homepage-headers">Featured Plants</h2>
        {featured_plants}
      </Row>
    </Container>
      
    )

}

export default HomePage;