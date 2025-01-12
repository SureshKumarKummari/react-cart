// src/App.js
import React from 'react';
import { ProductProvider } from './context/ProductContext';
import { CartProvider, useCartContext } from './context/CartContext';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const { setShowCart, showCart } = useCartContext(); // Use the context to access and set showCart

  return (
    <ProductProvider>
      <CartProvider>
        <div className="app-container">
          <button
            onClick={() => setShowCart(!showCart)} // Toggle cart visibility
            className="cart-button"
          >
            {showCart ? 'Hide Cart' : 'Show Cart'} {/* Button text changes based on showCart state */}
          </button>
          <ProductForm />
          <ProductList />
          <Cart />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
