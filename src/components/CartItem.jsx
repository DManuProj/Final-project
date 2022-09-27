import React from 'react'
import { api } from '../config'

function CartItem(item) {
  return (
    <div className='cart-item-container'>
        <img src={`${api}${item.image}`} alt="" />
        <div className='cart-item-details'>
            <h3 className='cart-item-title'>{item.name}</h3>
            <h5 className='cart-item-price'>{item.price}</h5>
        </div>
    </div>
  )
}

export default CartItem