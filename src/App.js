import React, { useState, useEffect } from "react";
import { Container, Nav, Modal, Tab } from "react-bootstrap";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/Services";
import Products from "./components/Products";
// import Hero from "./compoments/Hero";
import commerce from "./lib/Commerce";
import "./styles/scss/styles.scss";
import ShoppingCart from "./components/ShoppingCart";
// import Cart from "./compoments/Cart";
// import ProductsList from "./compoments/ProductsList";

function App() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetchCart();
  }, []);

  /**
   * Retrieve the current cart or create one if one does not exist
   * https://commercejs.com/docs/sdk/cart
   */
  const fetchCart = () => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        setCart(cart);
      })
      .catch((error) => {
        console.log("There was an error fetching the cart", error);
      });
  };

  /**
   * Adds a product to the current cart in session
   * https://commercejs.com/docs/sdk/cart/#add-to-cart
   *
   * @param {string} productId The ID of the product being added
   * @param {number} quantity The quantity of the product being added
   */
  const handleAddToCart = (productId, quantity) => {
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        setCart(item.cart);
      })
      .catch((error) => {
        console.error("There was an error adding the item to the cart", error);
      });
  };

  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart
      .remove(lineItemId)
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error(
          "There was an error removing the item from the cart",
          error
        );
      });
  };

  /**
   * Empties cart contents
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   */
  const handleEmptyCart = () => {
    commerce.cart
      .empty()
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error("There was an error emptying the cart", error);
      });
  };

  /**
   * Updates line_items in cart
   * https://commercejs.com/docs/sdk/cart/#update-cart
   *
   * @param {string} lineItemId ID of the cart line item being updated
   * @param {number} newQuantity New line item quantity to update
   */
  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart
      .update(lineItemId, { quantity })
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.log("There was an error updating the cart items", error);
      });
  };

  return (
    <Router>
      <Navbar
        cart={cart}
        onUpdateCartQty={handleUpdateCartQty}
        onRemoveFromCart={handleRemoveFromCart}
        onEmptyCart={handleEmptyCart}
      />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        {/* <Route path='/products' component={Products} /> */}
        <Route
          path="/products"
          render={(props) => <Products onAddToCart={handleAddToCart} />}
        />

        {/* <Route
          path="/"
          exact
          render={(props) => {
            return (
              <>
                <Hero merchant={merchant} />
                {this.renderCartNav()}
                {isCartVisible && (
                  <Cart
                    {...props}
                    cart={cart}
                    onUpdateCartQty={this.handleUpdateCartQty}
                    onRemoveFromCart={this.handleRemoveFromCart}
                    onEmptyCart={this.handleEmptyCart}
                  />
                )}
                <ProductsList
                  {...props}
                  products={products}
                  onAddToCart={this.handleAddToCart}
                />
              </>
            );
          }}
        /> */}
      </Switch>
    </Router>
  );
}

export default App;
