import React, { useState } from "react";

import {
  BrowserRouter as Link,
  NavLink,
  Router,
  Switch,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import Home from "./Home";
import Services from "./Services";
import Products from "./Products";
import SignUp from "./SignUp";

function Navbar() {
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

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-cointainer">
          <Link to="/" className="navbar-logo">
            TRVL <i className="fab fa-typo3" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-Links"
                onClick={closeMobileMenu}
                element={Home}
              />
              Home
            </li>
            <li className="nav-item">
              <Link
                to="/Tarot"
                className="nav-Links"
                onClick={closeMobileMenu}
                element={Services}
              >
                {" "}
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Payment"
                className="nav-Links"
                onClick={closeMobileMenu}
                element={Products}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-Links-mobile"
                onClick={closeMobileMenu}
                element={SignUp}
              />

              {button && <Button buttonStyle="btn--outline"> SIGNUP</Button>}
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline"> SIGNUP</Button>}
        </div>
      </nav>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/services" element={Services}></Route>
        <Route path="/products" element={Products}></Route>
        <Route path="/sign-up" element={SignUp}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navbar;
