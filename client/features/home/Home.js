import React from 'react';
import Navbar from '../navbar/Navbar';
import Promotions from '../promotions/Promotions';
import ProductCards from '../productCards/ProductCards';

const dummyDataProducts = [
  {
    id: 1,
    name: 'Produce',
    imageUrl: 'https://www.operationfoodsearch.org/wp-content/uploads/2018/05/produce-image.png',
  },
  {
    id: 2,
    name: 'Meat',
    imageUrl: 'https://i.insider.com/60ff1914f350d50019590549?width=1136&format=jpeg',
  },
  {
    id: 3,
    name: 'Dairy & Eggs',
    imageUrl: 'https://post.healthline.com/wp-content/uploads/2020/08/AN480-Eggs-Dairy-732x549-thumb-1-732x549.jpg',
  },
  {
    id: 4,
    name: 'Beverages',
    imageUrl: 'https://ebcatering.com/usercontent/product_sub_img/menuitem_Beverages.jpg',
  },
  {
    id: 5,
    name: 'Dried Goods',
    imageUrl: 'https://media.istockphoto.com/id/458990173/photo/food-drive-collection.jpg?s=612x612&w=0&k=20&c=lyxmqez8_GFBYg1lHshyHCou2KpWPNsXiHJqOuP2DI8=',
  },
];


const Home = () => {
  return (
    <div>
      <Navbar />
      <Promotions />
      <ProductCards products={dummyDataProducts}/>
    </div>
  );
};


export default Home;
