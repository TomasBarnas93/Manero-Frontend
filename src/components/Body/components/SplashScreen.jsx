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

  if (isLoading){
    return (
      <div className="bg-[#D7DFF3] flex items-center justify-center h-screen">
      <div className="absolute bg-white rounded-full w-[11rem] h-[11rem] flex items-center justify-center">
        <div className="absolute bg-[#D7DFF3] rounded-full w-[10.5rem] h-[10.5rem] flex items-center justify-center">
          <div className="bg-white rounded-full w-[8rem] h-[8rem] flex flex-col items-center justify-center">
            <button className={`mr-2 h-2 rounded-full border-2 border-black w-6`} />
            <h1 className="text-5xl font-poppins font-medium mt-2">MANERO</h1>
          </div>
        </div>
      </div>
    </div>
    
    
    );
  }

  return (
    <div className="bg-[#D7DFF3] flex items-center justify-center h-screen">
        <div className="absolute bg-white rounded-full w-[34rem] h-[34rem] flex items-center justify-center">
        </div>
        <div className="absolute bg-white rounded-full w-[35rem] h-[35rem] flex items-center justify-center">
          <div className="bg-[#D7DFF3] rounded-full w-[34.5rem] h-[34.5rem] flex items-center justify-center">
            <IntroductionSlider />
          </div>
        </div>
      </div>
  );
};

export default SplashScreen;
