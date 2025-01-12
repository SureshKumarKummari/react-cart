// src/components/ProductList.js
import React from 'react';
import { useProductContext } from '../context/ProductContext';
import { useCartContext } from '../context/CartContext';

function ProductList() {
  const { products } = useProductContext();
  const { addToCart } = useCartContext();

  return (
    <div className="product-list">
      <h2>Available Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product, index) => (
          <div key={index} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Small: {product.small} | Medium: {product.medium} | Large: {product.large}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
