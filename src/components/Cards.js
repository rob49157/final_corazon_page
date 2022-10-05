import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Maxpic from '../image/img-10.jpg'
import Aboutme from './Aboutme';

function Cards() {
  return (
    <div className='cards'>
      <h2 className="header">Services</h2>
       <ul className='cards__items'>
        
            <CardItem
              src='images/img-12.jpg'
              text='Tarot card reading is a form of cartomancy whereby practitioners use tarot cards purportedly to gain insight into the past, present or future. They formulate a question, then draw cards to interpret them for this end.'
             label='Tarot'
              path='/Products'
              
            />
            <CardItem
              src='images/img-13.jpg'
              text='Reiki therapy is based on an Eastern belief that vital energy flows through your body. The idea is that a Reiki practitioner uses gentle touch -- or places their hands just above your body -- to help guide this energy in a way that promotes balance and healing.'
              label='Rakki'
              path='/Products'
            />
            <CardItem
              src='images/img-11.jpg'
              text='What astrology really means?
              Astrology is generally defined as the belief that astronomical phenomena, like the stars overhead when you were born or the fact that Mercury is in retrograde, have the power to influence the daily events in our lives and our personality traits.'
             
              label='Astrology'
              path='/Products'
            />
            
          </ul>
         
      <h1>About me!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <div className='maxprofile'> 
          
            <img className='maxpic' src={Maxpic}></img>
            <span className='paragraph'> Maximiliano touches base on issues that are hard to deal with and will give you a detailed understanding of emotional blockages. He has a mission to help others develop their inner child and assist those that seek a greater understanding of self. His keywords are healing, insight, self-realization, and transformation. 
             <span className='quote'> "Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power.”

          ― Lao Tzu. </span>
        <span className='quote1'> "Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power.”

― Lao Tzu. </span>
            </span>
          </div>
          {/* <div>
            <Aboutme
             
             
             />
          </div> */}
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='MAX​ - 
              Max touches base on issues that may be difficult and will give you a detailed understanding of any underlying emotional blockages.  He has a mission to help others develop their inner child and assist those who seek a greater understanding of self.  His goal is to make a positive impact as a tarot reader with his gift of deep intuition.  His keywords are healing, insight, self-realization, and transformation.'
              label='Intuitive Tarot'
              
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul> */}
         
        </div>
      </div>
    </div>
  );
}

export default Cards;
