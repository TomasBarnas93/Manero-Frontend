import React from 'react';
import { ProductProvider } from './contexts/ProductProvider';
import Body from './components/Body/Body';
import { Header } from './components/Header/Header';
import { presentIntro } from './js/Intro';

function App() {

  presentIntro();

  return (
    <ProductProvider>
      <Header />
      <Body />
    </ProductProvider>
  );
}

export default App;
