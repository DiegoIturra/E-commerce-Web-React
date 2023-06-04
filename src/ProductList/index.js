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
      image: 'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/13-7390-2in1/pdp/laptop-xps-13-2n1-7390-pdp-consumer-black-mod1.jpg?fmt=jpg',
    },
    {
      id: 3,
      name: 'Auriculares Sony WH-1000XM4',
      price: 349.99,
      image: 'https://www.sony.cl/image/406fdd3cc9e49e28002ad8baef9185c8?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9',
    },
    {
      id: 4,
      name: 'Apple Watch Series 6',
      price: 399.99,
      image: 'https://cl.celulares.com/fotos/apple-watch-series-6-40mm-88624-g-alt.jpg',
    },
    {
      id: 5,
      name: 'Cámara Sony Alpha A7 III',
      price: 1999.99,
      image: 'https://killstorecl.vtexassets.com/arquivos/ids/394999/label-0.jpg?v=638036999235500000',
    },
    {
      id: 6,
      name: 'Router Wi-Fi Google Nest',
      price: 149.99,
      image: 'https://falabella.scene7.com/is/image/Falabella/gsc_113510422_665481_2?wid=800&hei=800&qlt=70',
    },
    {
      id: 7,
      name: 'Monitor Gaming Asus ROG Swift',
      price: 699.99,
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSr4Ye7eXDrfuSQ7ytSyro5BO3gPq657rRhZWiDeP9ZCmp4K8QKpGN6a83o-mYTdI6kHX8blz5ZjsN7Sg6r4esznZ51Yr45i0ZWrlMy15c&usqp=CAE',
    },
    {
      id: 8,
      name: 'Tablet Apple iPad Pro',
      price: 799.99,
      image: 'https://cdn1.spider.cl/13772-large_default/tablet-apple-ipad-pro-4-generacion-129-wi-fi-128-gb-space-gray.jpg',
    },
    {
      id: 9,
      name: 'Altavoz Bluetooth Bose SoundLink',
      price: 129.99,
      image: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_mini_ii/product_silo_images/soundlink_mini_II_carbon_EC.psd/_jcr_content/renditions/cq5dam.web.320.320.png',
    },
    {
      id: 10,
      name: 'Smart TV LG OLED 55',
      price: 1499.99,
      image: 'https://i.blogs.es/4f996b/lgc1ap/1366_2000.jpg',
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