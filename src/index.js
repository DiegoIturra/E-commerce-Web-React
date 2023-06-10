/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductList from './ProductList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <ProductList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

import Header from "./components/Header";
import Featured from "./components/Featured";
import NewProducts from "./components/NewProducts";


const featuredProduct = [
  {
    _id: 1,
    title: 'Smartphone Samsung Galaxy S21',
    price: 799.99,
    images: 'https://p.turbosquid.com/ts-thumb/Un/rflL7q/Sn/02/jpg/1625845073/1920x1080/fit_q87/a4a8fec6fe79e94c0ee5ed779b4e14ea0e43654d/02.jpg',
  },
  {
    _id: 2,
    title: 'Laptop Dell XPS 13',
    price: 999.99,
    images: 'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/13-7390-2in1/pdp/laptop-xps-13-2n1-7390-pdp-consumer-black-mod1.jpg?fmt=jpg',
  },
  {
    _id: 3,
    title: 'Auriculares Sony WH-1000XM4',
    price: 349.99,
    images: 'https://www.sony.cl/image/406fdd3cc9e49e28002ad8baef9185c8?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9',
  },
  {
    _id: 4,
    title: 'Apple Watch Series 6',
    price: 399.99,
    images: 'https://cl.celulares.com/fotos/apple-watch-series-6-40mm-88624-g-alt.jpg',
  },
  {
    _id: 5,
    title: 'Cámara Sony Alpha A7 III',
    price: 1999.99,
    images: 'https://killstorecl.vtexassets.com/arquivos/ids/394999/label-0.jpg?v=638036999235500000',
  },
  {
    _id: 6,
    title: 'Router Wi-Fi Google Nest',
    price: 149.99,
    images: 'https://falabella.scene7.com/is/image/Falabella/gsc_113510422_665481_2?wid=800&hei=800&qlt=70',
  },
];

const newProducts = [
  {
    _id: 7,
    title: 'Monitor Gaming Asus ROG Swift',
    price: 699.99,
    images: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSr4Ye7eXDrfuSQ7ytSyro5BO3gPq657rRhZWiDeP9ZCmp4K8QKpGN6a83o-mYTdI6kHX8blz5ZjsN7Sg6r4esznZ51Yr45i0ZWrlMy15c&usqp=CAE',
  },
  {
    _id: 8,
    title: 'Tablet Apple iPad Pro',
    price: 799.99,
    images: 'https://cdn1.spider.cl/13772-large_default/tablet-apple-ipad-pro-4-generacion-129-wi-fi-128-gb-space-gray.jpg',
  },
  {
    _id: 9,
    title: 'Altavoz Bluetooth Bose SoundLink',
    price: 129.99,
    images: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_mini_ii/product_silo_images/soundlink_mini_II_carbon_EC.psd/_jcr_content/renditions/cq5dam.web.320.320.png',
  },
  {
    _id: 10,
    title: 'Smart TV LG OLED 55',
    price: 1499.99,
    images: 'https://i.blogs.es/4f996b/lgc1ap/1366_2000.jpg',
  },
];


export default function HomePage({featuredProduct,newProducts}) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
    </div>
  );
}
