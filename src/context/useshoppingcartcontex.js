import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

const ShoppingCartContex =createContext({})

function useshoppingcartcontex() {
  return (
    useContext(ShoppingCartContex)
  )
}

export function ShoppingCartProvider({children}){
  return{
    <ShoppingCartContex.Provider value={{}}>
    {children}
    </ShoppingCartContex.Provider>
    
  }

}

export default useshoppingcartcontex