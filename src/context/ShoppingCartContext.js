
import React, { useState, useEffect, useContext, ReactNode, createContext  } from "react";


var ShoppingCartProviderProps ={
    children: ReactNode
}

var ShoppingCartContext1 ()=>{
    getItemQuantity : (id)=> id,
    increaseCartQuantity : (id )=> void,
    decreaseCartQuantity : (id)=> void,
    removeFromCart : (id) => void,
}



const ShoppingCartContext =createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}




export  function ShoppingCartProvider({children})
{
   
    return(
        
    <ShoppingCartContext.Provider value={{}}>
        {children}
    </ShoppingCartContext.Provider>
    )
}