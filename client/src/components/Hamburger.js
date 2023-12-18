import React, { useState, useEffect, useRef } from "react";
import { Twirl as Hamburger } from 'hamburger-react';
import Menu from "./Menu";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <div>
      <Hamburger color="#377E30" rounded toggled={isOpen} toggle={toggleMenu} />
      <div ref={menuRef}>
      {isOpen && <Menu />}
      </div>
    </div>
  );
}

export default DropDown;
