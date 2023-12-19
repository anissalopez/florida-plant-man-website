import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { slide as Menu } from 'react-burger-menu';
import image from "../images/logo.png"
import { BsCartDashFill } from "react-icons/bs";


const Hamburger = ({outerContainerId, pageWrapId}) => {
    return (
     
    <div className="hamburger-div">
    

      <Menu >
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="">
         All Plants
        </a>
        <a className="menu-item" href="">
        About Us
        </a>
        <a className="menu-item" href="">
          Shipping Policy
        </a>
      </Menu>
      <img src={image} id="nav-image"></img>
      <div id="cart-div">

      
      <BsCartDashFill id="cart" size={25}/>
      </div>

      </div>
  
    );
  };

  export default Hamburger;
