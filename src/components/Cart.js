// src/components/Cart.js
import React from 'react';
import { useCartContext } from '../context/CartContext';

function Cart() {
  const { cart, clearCart, showCart } = useCartContext();

  // If showCart is false, don't render the Cart component
  if (!showCart) return null; 

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </div>
        ))
      )}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
}

export default Cart;
