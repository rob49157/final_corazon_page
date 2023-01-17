import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import "./styles/scss/styles.scss";
import StoreItem from "./components/StoreItem"
import Social from "./components/Social.js"
import Store from "./components/Store.js"

function App() {
  // const [cart, setCart] = useState({});
  // useEffect(() => {
  //   fetchCart();
  // }, []);

  /**
   * Retrieve the current cart or create one if one does not exist
   * https://commercejs.com/docs/sdk/cart
   */
  // const fetchCart = () => {
  //   commerce.cart
  //     .retrieve()
  //     .then((cart) => {
  //       setCart(cart);
  //     })
  //     .catch((error) => {
  //       console.log("There was an error fetching the cart", error);
  //     });
  // };

  return (
    <BrowserRouter>
      <Navbar
        // cart={cart}
      />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route
          path="/StoreItem" element={<StoreItem/>}
        />
        <Route
          path="/Contact" element={<Social />}
        />
          <Route
          path="/Store" element={<Store/>}
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
