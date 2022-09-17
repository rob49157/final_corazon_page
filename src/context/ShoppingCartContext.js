
import React, { useState, useEffect, useContext, ReactNode, createContext  } from "react";


var ShoppingCartProviderProps ={
    children: ReactNode
}

 var ShoppingCartContext1 = ()=>{
    getItemQuantity :  id
    increaseCartQuantity : null
    decreaseCartQuantity :  null
    removeFromCart :  null
}




const ShoppingCartContext =createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCartContext1)
}




export  function ShoppingCartProvider({children})
{
   
    return(
        
    <ShoppingCartContext.Provider value={{}}>
        {children}
    </ShoppingCartContext.Provider>
    )
}