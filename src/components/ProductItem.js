import React from "react";
import PropTypes from "prop-types";
import {Card} from "react-bootstrap";


const ProductItem = ({product, updateServiceChange}) => {

    const handleServiceChange = () => {
        updateServiceChange(product.price.raw)
    };
    return (
        <Card className="h-20 ms-5 mt-4 ">
            <Card.Img
                variant="top"
                src={product.image?.url}
                alt={product.name}
                height="400px"
                style={{objectFit: "cover"}}
            />

            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="ms-2 text-muted">{product.name} </span>

                    <span className="ms-2 text-muted">
          </span>
          <span className="ms-2 text-muted">{product.price.formatted_with_symbol}</span>
                 <input type="radio" value={product.price} name="service_amount"
                                           onChange={handleServiceChange}/>
               
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object,
    updateServiceChange: PropTypes.func
};

export default ProductItem;
