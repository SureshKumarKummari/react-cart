// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create Context
const CartContext = createContext();

// Provider Component
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); // Default cart is hidden

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
    setShowCart(false); // Optionally hide cart when cleared
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, showCart, setShowCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use CartContext
export const useCartContext = () => useContext(CartContext);
