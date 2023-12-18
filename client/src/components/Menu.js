import React from "react";
import image from "../images/logo.png"

const Menu = React.forwardRef((props, ref) => {
    return (

        <div className="nav-bar" ref={ref}>
        <div className="nav-logo">
            <img  src={image} width="25%"/>
        </div>
        <ul className="nav-list">
            <li><a>Home</a></li>
            <li><a>All Plants</a></li>
            <li><a>Alocasia</a></li>
            <li><a>Anthurium</a></li>
            <li><a>Monstera</a></li>
            <li><a>Philodendron</a></li>
            <li><a>Syngonium</a></li>
            <div className="other-items"></div>
            <li><a>About Us</a></li>
            <li><a>Shipping Policy</a></li>
            <li><a>Return Policy</a></li>
        </ul>
        </div>
      );
});
 


export default Menu;
