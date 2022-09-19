import React, {useState, useEffect} from 'react'
import Commerce from '../lib/Commerce.js'
import ProductsList from './components/ProductsList'


function ShoppingCart() {
  const checAPIKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;
  
  const commerce = new Commerce(checAPIKey);

  const [cart, setCart]= useState({})
    
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


 

 


  return (
    <div>ShoppingCart</div>
  )
}

export default ShoppingCart