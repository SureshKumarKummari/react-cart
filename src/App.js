import React from 'react';
import { ProductProvider } from './context/ProductContext';
import { CartProvider, useCartContext } from './context/CartContext';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const { setShowCart, showCart } = useCartContext(); // Get state and setter from context

  return (
    <ProductProvider>
      <CartProvider>
        <div className="app-container">
          {/* Toggle Cart Button */}
          <button
            onClick={() => setShowCart(!showCart)} // Toggle showCart state
            className="cart-button"
          >
            {showCart ? 'Hide Cart' : 'Show Cart'} {/* Change button text based on state */}
          </button>

          {/* Product Form and Product List Components */}
          <ProductForm />
          <ProductList />

          {/* Cart Component */}
          {showCart && <Cart />} {/* Conditionally render the Cart component */}
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
