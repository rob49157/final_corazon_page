import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/Services";
import Products from "./components/Products";
import commerce from "./lib/Commerce";
import "./styles/scss/styles.scss";
import StoreItem from "./components/StoreItem"
import Social from "./components/Social.js"

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

  return (
    <Router>
      <Navbar
        cart={cart}
      />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        {/* <Route path='/products' component={Products} /> */}
        <Route
          path="/products"
          render={(props) => <Products />}
        />
        <Route
          path="/StoreItem"
          render={(props) => <StoreItem />}
        />
        <Route
          path="/Social"
          render={(props) => <Social />}
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
