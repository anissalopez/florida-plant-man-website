import React, {useState} from "react";
import FeaturedPlantList from "./FeaturedPlantList";
import {Row, Container, Col, Button } from 'react-bootstrap';
import image from "../images/main.jpg"

import DropDown from "./Hamburger";


function HomePage ({ plants }) {
    return(
    <Container >
    <DropDown />
     <div className="image-container"> <img src={image} className="homepage-img rounded"/>
        <Button size="lg"className="button">Explore All Plants</Button>
     </div>
      <Row>
        <h2 className="homepage-headers">Featured Plants</h2>
    </Row>
    <Row><FeaturedPlantList plants={plants}/></Row>
        
     
    </Container>
    )
  

}

export default HomePage;