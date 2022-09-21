import React, {useState} from 'react';
import Cart from './Cart';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from "react-bootstrap";

library.add(faShoppingBag, faTimes);

const CartNav = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const [isCartVisible, setCartVisible] = useState(false);

    return (
        <div className="nav">
            <div className="nav__cart" onClick={() => setCartVisible(!isCartVisible)}>
                {!isCartVisible ? (
                <Button variant="white" className="nav__cart-open">
                    <FontAwesomeIcon size="2x" icon="shopping-bag" color="#292B83"/>
                    {cart !== null ? <span>{cart.total_items}</span> : ''}
                </Button>
                ) : (
                    <Button className="nav__cart-close" variant="danger">
                    <FontAwesomeIcon size="1x" icon="times" color="white"/>
                    </Button>
                )}
            </div>
            {isCartVisible &&
                <Cart
                    cart={cart}
                    onUpdateCartQty={onUpdateCartQty}
                    onRemoveFromCart={onRemoveFromCart}
                    onEmptyCart={onEmptyCart}
                />
            }  
        </div>
    )
}

export default CartNav;

CartNav.propTypes = {
    cart: PropTypes.object,
    onUpdateCartQty: PropTypes.func,
    onRemoveFromCart: PropTypes.func,
    onEmptyCart: PropTypes.func,
};