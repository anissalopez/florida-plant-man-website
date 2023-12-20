import React from "react";
import image from "../images/main.jpg";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function Header(){

    return(
    <div>
    <img src={image} id="homepage-img rounded"/>
 
    <Button size="lg"className="explore-btn">Explore All Plants</Button> 
    </div>
    )
}

export default Header;