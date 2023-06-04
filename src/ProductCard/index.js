import React from 'react';
import './index.css'; // asegúrate de que la ruta es correcta

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <p className="product-name">{name}</p>
      <p className="product-price">${price}</p>
    </div>
  );
};

export default ProductCard;