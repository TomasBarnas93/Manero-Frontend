import React from 'react';
import { ProductProvider } from './contexts/ProductProvider';
import Body from './components/Body/Body';
import { Header } from './components/Header/Header';
import { AuthProvider } from './contexts/AuthProvider';


function App() {
  return (
    <AuthProvider>
    <ProductProvider>
      <Header />
      <Body />
    </ProductProvider>
    </AuthProvider>
  );
}

export default App;
