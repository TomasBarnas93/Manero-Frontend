import React, { useEffect, useState } from 'react';
import IntroductionSlider from './IntroductionSlider';

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Manero</h1>
          <p className="mt-4 text-gray-500">Please wait while the app is loading.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
     
        
        <IntroductionSlider/>


    </div>
  );
};

export default SplashScreen;
