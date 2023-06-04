import React from 'react';
import ProductCard from '../ProductCard'; // asegúrate de importar el componente ProductCard

const PRODUCTS = [
    {
      id: 1,
      name: 'Smartphone Samsung Galaxy S21',
      price: 799.99,
      image: 'https://p.turbosquid.com/ts-thumb/Un/rflL7q/Sn/02/jpg/1625845073/1920x1080/fit_q87/a4a8fec6fe79e94c0ee5ed779b4e14ea0e43654d/02.jpg',
    },
    {
      id: 2,
      name: 'Laptop Dell XPS 13',
      price: 999.99,
      image: 'url_to_product2_image',
    },
    {
      id: 3,
      name: 'Auriculares Sony WH-1000XM4',
      price: 349.99,
      image: 'url_to_product3_image',
    },
    {
      id: 4,
      name: 'Apple Watch Series 6',
      price: 399.99,
      image: 'url_to_product4_image',
    },
    {
      id: 5,
      name: 'Cámara Sony Alpha A7 III',
      price: 1999.99,
      image: 'url_to_product5_image',
    },
    {
      id: 6,
      name: 'Router Wi-Fi Google Nest',
      price: 149.99,
      image: 'url_to_product6_image',
    },
    {
      id: 7,
      name: 'Monitor Gaming Asus ROG Swift',
      price: 699.99,
      image: 'url_to_product7_image',
    },
    {
      id: 8,
      name: 'Tablet Apple iPad Pro',
      price: 799.99,
      image: 'url_to_product8_image',
    },
    {
      id: 9,
      name: 'Altavoz Bluetooth Bose SoundLink',
      price: 129.99,
      image: 'url_to_product9_image',
    },
    {
      id: 10,
      name: 'Smart TV LG OLED 55"',
      price: 1499.99,
      image: 'url_to_product10_image',
    },
  ];

const ProductList = () => {
  return (
    <div>
      {PRODUCTS.map(product => (
        <ProductCard 
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;