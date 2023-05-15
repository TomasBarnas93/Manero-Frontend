import React from 'react';
import { ProductProvider } from './contexts/ProductProvider';
import Body from './components/Body/Body';
import { Header } from './components/Header/Header';

function App() {
  return (
    <ProductProvider>
      <Header />
      <Body />
    </ProductProvider>
  );
}

export default App;
