import React from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
import formatcurrency from "../utilities/formatcurrency";

function StoreItem({ id, name, price, imgUrl ,time, updateServiceChange }) {

    const handleServiceChange = () => {
        updateServiceChange(price)
    };
  return (
    <Card className="h-100">
    <Card.Img
      variant="top"
      src={imgUrl}
      height="200px"
      style={{ objectFit: "cover" }}
    />

    <Card.Body className="d-flex flex-column">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <span className="fs-2">{name}</span>
        <span className="ms-6">{time} Minutes</span>
        <span className="ms-2 text-muted">{formatcurrency(price)}</span>
      </Card.Title>
      <input type="radio" value={price} name="service_amount"
                                           onChange={handleServiceChange}/>
      
      
    </Card.Body>
  </Card>
);
}

export default StoreItem;
