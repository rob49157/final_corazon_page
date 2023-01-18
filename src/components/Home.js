import React from 'react';
import '../App.css';
import Cards from './Cards';
import banner1 from "../images/banner.jpg"


function Home() {
  return (
    <>

      <img  className="banner" src={banner1}/>
      <Cards />
    </>
  );
}

export default Home;
