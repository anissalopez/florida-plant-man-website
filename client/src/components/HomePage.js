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
    <FeaturedPlantList plants={plants}/>
 
    </div>
    )
  

}

export default HomePage;