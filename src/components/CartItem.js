import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const handleUpdateCartQty = (lineItemId, quantity) => {
    onUpdateCartQty(lineItemId, quantity);
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
  };

  return (
    <Card >
      <Card.Img
        variant="top"
        height="400px"
		
        style={{ objectFit: "cover" }}
        className="cart-item__image"
        src={item.image.url}
        alt={item.name}
      />
      <Card.Body className="d-flex flex-column">
        <div className="cart-item">
          <div className="fs-2">
            <h4 className="fs-2">{item.name}</h4>
            <div  className="d-flex align-items-center justify-content-center" style={{ gap: ".9rem" }}>
              <Button
                type="button"
                onClick={() =>
                  item.quantity > 1
                    ? handleUpdateCartQty(item.id, item.quantity - 1)
                    : handleRemoveFromCart()
                }
              >
                -
              </Button>
              <p>{item.quantity}</p>
              <Button
                type="button"
                onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
              >
                +
              </Button>
            </div>
            <div className="cart-item__details-price">
              {item.line_total.formatted_with_symbol}
            </div>
          </div>
          <Button
            type="button"
            className="cart-item__remove"
            variant="danger"
            onClick={handleRemoveFromCart}
          >
            Remove
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object,
  handleUpdateCartQty: PropTypes.func,
  onUpdateCartQty: () => {},
  onRemoveFromCart: () => {},
};
