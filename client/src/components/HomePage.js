import React, {useState} from "react";
import FeaturedPlantList from "./FeaturedPlantList";
import {Row, Container, Col, Button } from 'react-bootstrap';
import image from "../images/main.jpg";
import Sidebar from "./Hamburger1"




function HomePage ({ plants }) {
    return(
    <div id="app" >
 

 
    <Sidebar pageWrapId={"page-wrap"} outerContainerId={"app"} />
 
 
    <Container id="page-wrap">
    
     <div className="image-container"> <img src={image} className="homepage-img rounded"/>
        <Button size="lg"className="button">Explore All Plants</Button>
     </div>
      <Row>
        <h2 className="homepage-headers">Featured Plants</h2>
    </Row>
    <Row><FeaturedPlantList plants={plants}/></Row>
 
        
    </Container>
    </div>
    )
  

}

export default HomePage;