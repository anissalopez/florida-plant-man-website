import React from "react";
import { slide as Menu } from 'react-burger-menu';


export default props => {
    return (
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
    );
  };
