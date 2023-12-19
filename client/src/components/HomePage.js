import React, {useState} from "react";
import FeaturedPlantList from "./FeaturedPlantList";
import {Row, Container, Col, Button, Navbar } from 'react-bootstrap';
import Hamburger from "./Hamburger";
import Header from "./Header";




function HomePage ({ plants }) {
    return(
    <div id="outer-container" >
  
    <Hamburger  pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
   
    <Header />
    <Container id="page-wrap">

      <Row>
        <h2 className="homepage-headers">Featured Plants</h2>
    </Row>
    <Row><FeaturedPlantList plants={plants}/></Row>
 
        
    </Container>
    </div>
    )
  

}

export default HomePage;