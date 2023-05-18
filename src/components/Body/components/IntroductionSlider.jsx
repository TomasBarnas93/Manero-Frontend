import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const IntroductionSlider = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    if (hasVisitedBefore) {
      setIsCompleted(true);
    }
  }, []);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const navigateToAcc = () => {
    setIsCompleted(true);
    localStorage.setItem('hasVisitedBefore', true);
    navigate('/account');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Manero!</h1>
            <p className="text-gray-500">This is the first step of the introduction.</p>
            <button onClick={navigateToAcc}>Get Started</button>
          </div>
        );
      case 2:
        return (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Step 2</h1>
            <p className="text-gray-500">This is the second step of the introduction.</p>
            <button onClick={navigateToAcc}>Get Started</button>
          </div>
        );
      case 3:
        return (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Step 3</h1>
            <p className="text-gray-500">This is the third step of the introduction.</p>
            <button onClick={navigateToAcc}>Get Started</button>
          </div>
        );
      default:
        return null;
    }
  };

  if (isCompleted) {
    return (
      <div>
        {/* Rendera huvudapplikationen */}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-lg w-full p-8 bg-white shadow rounded-lg">
        {renderStepContent()}
        <div className="mt-8 flex justify-center">
          <button
            className={`mr-2 w-3 h-3 rounded-full ${currentStep === 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => handleStepChange(1)}
          />
          <button
            className={`mr-2 w-3 h-3 rounded-full ${currentStep === 2 ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => handleStepChange(2)}
          />
          <button
            className={`w-3 h-3 rounded-full ${currentStep === 3 ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => handleStepChange(3)}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroductionSlider;
