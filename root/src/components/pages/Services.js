import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import Cards from '../Cards';
import Contact from './Contact';



export default function Services() {
  return (
    
    <div className='cards'>
    <h1>Offerings!</h1>
    <div className='cards__container'>
    <h1>Tarot Readings</h1>
      <div className='cards__wrapper'>
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
        
        <ul className='cards__items'>
          <CardItem
            src='images/img-12.jpg'
            
            text='This is a 30 min sessions. $20'
            label='Tarot'
            path='/services'
            
            
          />
          <CardItem
            src='images/img-12.jpg'
            text='This is a 1hr min sessions. $50'
            label='Tarot'
            path='/products'
          />
          <CardItem
            src='images/img-12.jpg'
            text='This is a 2hr sessions. 
            $80'
            label='Tarot'
            path='/sign-up'
          />
        </ul>
        <h1>Please contact me here to Schedule your appointment and select payment methods</h1>
        <Contact/>
      </div> 
    </div>
   
  </div>
  


  )

}
