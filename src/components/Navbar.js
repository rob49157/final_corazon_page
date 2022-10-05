import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
//  import "./Navbar.css";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";

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
    <NavbarBs sticky="top" className="bg-light shadow mb-3  navbar-expand-lg "  alt="Max-width 100%" >
    <Container>
      <Nav className="me-auto " >
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/Store" as={NavLink}>
          Store 
        </Nav.Link>
        <Nav.Link to="/Social" as={NavLink}>
          Contact me
        </Nav.Link>
        
      
      
      
      </Nav>
     
        
     
    </Container>
  </NavbarBs>
   
  );
}

export default Navbar;



