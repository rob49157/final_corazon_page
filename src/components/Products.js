import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import commerce from '../lib/Commerce';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProducts();
    }, []);
  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */
  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }
    return (
        <div className="products" id="products">
            { products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
};

Products.propTypes = {
    products: PropTypes.array,
};

export default Products;