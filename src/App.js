import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Services';
import Products from './components/Products';
import SignUp from './components/SignUp';
import commerce from './lib/Commerce';
import './styles/scss/styles.scss';

function App() {

  return (
    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          {/* <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
      </Router>
      
    
  );
}

export default App;
