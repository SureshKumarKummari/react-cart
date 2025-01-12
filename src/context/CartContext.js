import React, { createContext, useState, useContext } from 'react';

// Create the Cart Context
const CartContext = createContext();

// CartProvider component to wrap around the app and provide state
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // Cart holds the items
  const [showCart, setShowCart] = useState(false); // State to toggle cart visibility

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]); // Clear the cart
    setShowCart(false); // Optionally close the cart after clearing
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, showCart, setShowCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use CartContext
export const useCartContext = () => useContext(CartContext);
