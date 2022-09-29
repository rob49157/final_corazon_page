import React, { Component } from "react";
// import stripHtml from 'string-strip-html';
import PropTypes from "prop-types";
import Commerce from "@chec/commerce.js";
import { Button, Card } from "react-bootstrap";
import Paypal from "./Paypal.js"


const ProductItem = ({ product, onAddToCart }) => {
  const { result } = product.description;

 
const handleAddToCart = () => {
    onAddToCart(product.id, 1);
  }
  return (
    <Card className="h-20 ms-5 mt-4 ">
      <Card.Img
        variant="top"
        src={product.image?.url}
        alt={product.name}
        height="400px"
        style={{ objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="ms-2 text-muted">{product.name} </span>

          <span className="ms-2 text-muted">
            {product.price.formatted_with_symbol}
          </span>
          {/* <Button><Paypal/></Button> */}
        </Card.Title>
        {/*<button*/}
        {/*    name="Add to cart"*/}
        {/*    className="product__btn"*/}
        {/*    onClick={handleAddToCart}*/}
        {/*  >*/}
        {/*  Quick add*/}
        {/*</button>*/}
        {/* <div className="mt-auto">
          <Button className="w-100" > Buy </Button>
        </div> */}
      </Card.Body>
    </Card>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
  handleAddToCart: PropTypes.func,
  onAddToCart: () => {},
};

export default ProductItem;
