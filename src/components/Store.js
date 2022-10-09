import React, {useState,useEffect} from 'react'
import { Col, Card, Row } from "react-bootstrap";
import storeItems from "../data/items.json"
import StoreItem from "./StoreItem.js"
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";


function Store() {
    
    const [servicePrice, setservicePrice] = useState(0);
    const [radioSelected, setRadioSelected] = useState(0);
    
    const paypal_clnt_id = process.env.REACT_APP_PAYPAL_CHECKOUT;
    const updateServiceChange = (service_price) => {
        // serviceValue = service_price;
        setRadioSelected(1);
        setservicePrice(service_price);
    };
    
    const initialOptions = {
        "client-id": paypal_clnt_id,
        currency: "USD",
        intent: "capture"
    };

    return (
    <>
    <h1>Store</h1>
    {/* {process.env.REACT_APP_PAYPAL_CHECKOUT} */}
    <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item=>( 
            <Col key={item.id}><StoreItem updateServiceChange={updateServiceChange} {...item}/></Col>
        ))}
        {radioSelected &&
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons forceReRender={[servicePrice]}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: servicePrice,
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            alert(`Transaction completed by ${name}`);
                        });
                    }}
                />
            </PayPalScriptProvider>
            }

    </Row>
    <h2>I will contact you within 24hrs after the purchase to schedule reading</h2>
    </>
        
  )
}

export default Store