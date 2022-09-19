import React, { Component } from "react";
// import stripHtml from 'string-strip-html';
import PropTypes from 'prop-types';
import Commerce from '@chec/commerce.js';
import { Button, Card } from "react-bootstrap";

const ProductItem = ({ product }) => {

  const { result } = (product.description);


 

  




  



  return (   

    <Card className="h-20 ms-5 mt-4 " >
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
        
        <span className="ms-2 text-muted">{product.price.formatted_with_symbol}</span>
      </Card.Title>
      <div className="mt-auto">
        
          <Button className="w-100"  >  Buy </Button>
       
        
      </div>
    </Card.Body>
  </Card>


    // <Card>
    // <div className="product__card">
    // <Card.Img  variant='top' height='200px'  style={{ objectFit: "cover" }} src={product.image?.url} alt={product.name} />
    //   <Card.Body <div className="product__info">
    //     <h4 className="product__name">{product.name}</h4>
    //     <p className="product__description">
          
    //       {/* product description stripped of html tags */}
    //       {result}
    //     </p>
    //     <div className="product__details">
    //       <p className="product__price">
    //         {product.price.formatted_with_symbol}
    //       </p>
    //     </div>
    //   </div>
    // </div> 
    // </Card>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;