// src/components/ProductForm.js
import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';

function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    small: 0,
    medium: 0,
    large: 0,
  });
  
  const { addProduct } = useProductContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({
      name: '',
      description: '',
      price: '',
      small: 0,
      medium: 0,
      large: 0,
    });
  };

  return (
    <div className="form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Product Description"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          type="number"
          name="small"
          value={product.small}
          onChange={handleChange}
          placeholder="Small Size Available"
        />
        <input
          type="number"
          name="medium"
          value={product.medium}
          onChange={handleChange}
          placeholder="Medium Size Available"
        />
        <input
          type="number"
          name="large"
          value={product.large}
          onChange={handleChange}
          placeholder="Large Size Available"
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
