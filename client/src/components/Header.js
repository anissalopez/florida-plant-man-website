import React from "react";
import image from "../images/main.jpg";
import { Button, Container } from 'react-bootstrap';


function Header(){

    return(
    <Container className="header-container">
    <div className="cover-img-div"> 
    <img src={image} className="homepage-img rounded"/>
 
    <Button size="lg"className="explore-btn">Explore All Plants</Button> 
    </div>
    </Container>
    )
}

export default Header;