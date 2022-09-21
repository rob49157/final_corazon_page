import React, { Component } from 'react';
import CartItem from './CartItem';
import PropTypes from 'prop-types';
import { Button, Card } from "react-bootstrap";

const Cart = ({ cart, onEmptyCart, onUpdateCartQty, onRemoveFromCart }) => {

  const handleEmptyCart = () => {
    onEmptyCart();
  }

  const renderEmptyMessage = () => {
    if (cart.total_unique_items > 0) {
      return;
    }

    return (
      <p className="cart__none">
        You have no items in your shopping cart, start adding some!
      </p>
    );
  }

  const renderItems = () => (
    cart.line_items.map((lineItem) => (
      <CartItem
        item={lineItem}
        key={lineItem.id}
        onRemoveFromCart={onRemoveFromCart}
        onUpdateCartQty={onUpdateCartQty}
        className="cart__inner"
      />
    ))
  );

  const renderTotal = () => (
    <Card className="border border-white mt-1">
    <div className="cart__total">
      <p className="cart__total-title">Subtotal:</p>
      <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
    </div>
    </Card>
  );

  return (
    <div className="cart">
      <h4 className="cart__heading">Your Shopping Cart</h4>
      { renderEmptyMessage() }
      { renderItems() }
      { renderTotal() }
      <Card className="border border-white pb-2"><div className="d-flex align-items-center justify-content-center" style={{ gap: ".9rem" }}>
        <Button className="cart__btn-empty">Empty cart</Button>
        <Button className="cart__btn-checkout">Checkout</Button> 
      </div>
      </Card>
    </div>
  );
};

Cart.propTypes = {
    cart: PropTypes.object,
    onRemoveFromCart: () => {},
    onUpdateCartQty: () => {},
    onEmptyCart: () => {},
};

export default Cart;
