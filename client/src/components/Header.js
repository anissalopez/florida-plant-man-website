import React from "react";
import image from "../images/main.jpg";
import { Button, Container } from 'react-bootstrap';


function Header(){

    return(
    <section className="header-container">
    <img src={image} id="homepage-img rounded"/>
 
    <Button size="lg"className="explore-btn">Explore All Plants</Button> 
    </section>
    )
}

export default Header;