import React, { useEffect, useState } from 'react';
import { ProductProvider } from './contexts/ProductProvider';
import Body from './components/Body/Body';
import { Header } from './components/Header/Header';
import { AuthProvider } from './contexts/AuthProvider';
import SplashScreen from './components/Body/components/SplashScreen';
import { ReviewProvider } from './contexts/ReviewProvider';
import { ProfileProvider } from './contexts/ProfileProvider';
import { AddressProvider } from './contexts/AddressProvider';
import { OrderProvider } from './contexts/OrderProvider';


function App() {
  const [hasVisitedBefore, setHasVisitedBefore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (hasVisited) {
      setHasVisitedBefore(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (hasVisitedBefore) {
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, [hasVisitedBefore]);

  if (isLoading) {
    return <SplashScreen />;
  }

  if (!hasVisitedBefore) {
    return (
      <div>
        <SplashScreen onComplete={() => setHasVisitedBefore(true)} />
      </div>
    );
  }

  return (
    <AuthProvider>
      <OrderProvider>
      <ProductProvider>
        <ReviewProvider>
          <AddressProvider>
          <ProfileProvider>
            <Header />
            <Body />
           
          </ProfileProvider>
          </AddressProvider>
        </ReviewProvider>
      </ProductProvider>
      </OrderProvider>
    </AuthProvider>
  );
}

export default App;
