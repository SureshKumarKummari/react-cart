// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new root API
import './index.css';
import App from './App';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

// Create root with createRoot (new React 18+ method)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap App component with both context providers and render
root.render(
  <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductProvider>
);
