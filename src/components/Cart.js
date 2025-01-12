import React from 'react';
import { useCartContext } from '../context/CartContext';

function Cart() {
  const { cart, clearCart } = useCartContext(); // Access cart and clearCart function

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
