import React from 'react'
import './Cart.css'
import CartItem from './CartItem'

function Cart({cartItems, setCartItems}) {
  return (
    <div className="cart-container">
      <h2>Your Order</h2>
      <div className="cart-items">
        {cartItems.map((item) => {
          <CartItem key={item.id} item={item}/>
        })}
      </div>
    </div>
   
  )
}

export default Cart