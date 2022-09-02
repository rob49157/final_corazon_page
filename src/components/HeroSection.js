import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      {/* <h1>About me</h1>
      <p>
MAX​ - 
Max touches base on issues that may be difficult and will give you a detailed understanding of any underlying emotional blockages.  He has a mission to help others develop their inner child and assist those who seek a greater understanding of self.  His goal is to make a positive impact as a tarot reader with his gift of deep intuition.  His keywords are healing, insight, self-realization, and transformation.
​Schedule with Max here</p> */}
      <div className='hero-btns' >
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          
        >
          WATCH YOUTUBE  <i className='far fa-play-circle'  />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
