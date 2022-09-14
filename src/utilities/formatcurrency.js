import React from 'react'

const currencyformatter= new Intl.NumberFormat(undefined,{
    currency:'USD',
    style: "currency"
})

function formatcurrency( Number) {
  return ( currencyformatter.format(Number))
   
}

export default formatcurrency