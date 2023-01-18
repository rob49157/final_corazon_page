import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import "./styles/scss/styles.scss";
import StoreItem from "./components/StoreItem"
import Social from "./components/Social.js"
import Store from "./components/Store.js"

function App() {
  
  return (
    <BrowserRouter>
      <Navbar
        
      />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route
          path="/StoreItem" element={<StoreItem/>}
        />
        <Route
          path="/Contact" element={<Social />}
        />
          <Route
          path="/Store" element={<Store/>}
        />


  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
