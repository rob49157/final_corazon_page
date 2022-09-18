import React, {useState, useEffect} from 'react'
import Commerce from '../lib/Commerce.js'
import ProductsList from './components/ProductsList'


function ShoppingCart() {
    
    const fetchProducts = () => {
        commerce.products.list().then((products) => {
          setProducts(products.data);
        }).catch((error) => {
          console.log('There was an error fetching the products', error)
        });
      }

      useEffect(()=>{
        fetchProducts();

      }, [])

const [products,setProducts]= useState([])
  return (
    <div>ShoppingCart</div>
  )
}

export default ShoppingCart