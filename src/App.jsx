import React from 'react';
import { ProductProvider } from './contexts/ProductProvider';
import Body from './components/Body/Body';
import { Header } from './components/Header/Header';
import SplashScreen from './components/Body/components/SplashScreen';

function App() {


  return (
    <ProductProvider>
      <SplashScreen />
      <Header />
      <Body />
    </ProductProvider>
  );
}

export default App;
