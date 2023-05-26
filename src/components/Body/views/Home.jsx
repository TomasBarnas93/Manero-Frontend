import React from 'react';
import ShowCase from '../components/ShowCase';
import SmallShowCase from '../components/SmallShowCase';
import Featured from '../components/Featured';
import BestSellers from '../components/BestSellers';
import Carousel from '../components/Carousel'
import { ProductProvider } from '../../../contexts/ProductProvider';

const Home = () => {
  return (
    <ProductProvider>
      <ShowCase />
      <Carousel/>
      <BestSellers />
      <SmallShowCase />
      <Featured />
    </ProductProvider>
  );
};

export default Home;


