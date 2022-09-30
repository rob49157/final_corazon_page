import React from "react";
import "../App.css";
import Contact from "./Contact";
import StoreItems from "../data/items.json";
import { Col, Row } from "react-bootstrap";
import StoreItem from "./StoreItem.js";

export default function Services() {
  return (
    <div className="cards">
      <h1>Offerings!</h1>

      <Row md={2} xs={1} lg={3} className="g-1">
        {StoreItems.map((items) => (
          <Col key={items.id}><StoreItem {...items}/></Col>
        ))}
      </Row>

      {/* <div className='cards__container'>
    
      <div className='cards__wrapper'>
       
        
        <ul className='cards__items'>
          <CardItem
            src='images/img-12.jpg'
            
            text='This is a 10 min sessions. $20'
            label='Tarot'
            
            
            
          />
          <CardItem
            src='images/img-12.jpg'
            text='This is a 30min min sessions. $60'
            label='Tarot'
            path='/services'
          />
          <CardItem
            src='images/img-12.jpg'
            text='This is a 1hr sessions. $100'
            
            label='Tarot'
            path='/services'
          />
          <CardItem
            src='images/img-11.jpg'
            text='Astrology, Coming soon!' 
            
            label='Tarot'
            path='/services'
          />
          <CardItem
            src='images/img-13.jpg'
            text='Reiki, Coming soon!'
            label='Tarot'
            path='/services'
          />
          
        </ul>
        
       
          
        <h1>Please contact me here to Schedule your appointment and select payment methods</h1>
        <Contact/>
      </div> 
    </div> */}

      <h1>
        Please contact me here to Schedule your appointment and select payment
        methods
      </h1>
      <Contact />
    </div>
  );
}
