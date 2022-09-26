import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link, NavLink } from "react-router-dom";
// import "./Navbar.css";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import CartNav from './CartNav'

function Navbar({cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart}) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <NavbarBs sticky="top" className="bg-white shadow mb-3">
    <Container>
      <Nav className="me-auto">
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/Products" as={NavLink}>
          Store
        </Nav.Link>
        <CartNav 
                cart={cart}
                onUpdateCartQty={onUpdateCartQty}
                onRemoveFromCart={onRemoveFromCart}
                onEmptyCart={onEmptyCart}
              />
      
      </Nav>
     
        
     
    </Container>
  </NavbarBs>
   
  );
}

export default Navbar;



