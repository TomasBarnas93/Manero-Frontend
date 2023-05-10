import React from 'react';
import ShowCase from '../components/ShowCase';
import SmallShowCase from '../components/SmallShowCase';
import CollectionProducts from '../components/CollectionProducts';
import BestSellers from '../components/BestSellers';
import { ProductProvider } from '../../../contexts/ProductProvider';

const Home = () => {
  return (
    <ProductProvider>
      <ShowCase />
      <BestSellers />
      <SmallShowCase />
      <CollectionProducts title="Featured Products" api="featured" />
    </ProductProvider>
  );
};

export default Home;

