import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IntroductionSlider = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
    if (hasVisitedBefore) {
      setIsCompleted(true);
    }
  }, []);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const navigateToAcc = () => {
    setIsCompleted(true);
    localStorage.setItem("hasVisitedBefore", true);
    navigate("/account");
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center mt-7">
            <div class="relative h-8">
              <div class="absolute left-1/2 top-0 bg-black w-[1px] h-full"></div>
            </div>
            <h1 className="text-4xl font-semibold mb-4 mt-4">
              Welcome to <br /> Manero!
            </h1>
            <p className="text-gray-500">
              This is the first step of the introduction.
            </p>
            <button
              className="bg-black hover:bg-blue-600 text-white w-72 py-3 rounded-3xl mt-11"
              onClick={navigateToAcc}
            >
              Get Started
            </button>
          </div>
        );
      case 2:
        return (
          <div className="text-center mt-7">
            <div class="relative h-8">
              <div class="absolute left-1/2 top-0 bg-black w-[1px] h-full"></div>
            </div>
            <h1 className="text-4xl font-semibold mb-4 mt-4">
              Easy Track <br /> Order!
            </h1>
            <p className="text-gray-500">
              This is the second step of the introduction.
            </p>
            <button
              className="bg-black hover:bg-blue-600 text-white w-72 py-3 rounded-3xl mt-11"
              onClick={navigateToAcc}
            >
              Get Started
            </button>
          </div>
        );
      case 3:
        return (
          <div className="text-center mt-7">
            <div class="relative h-8">
              <div class="absolute left-1/2 top-0 bg-black w-[1px] h-full"></div>
            </div>
            <h1 className="text-4xl font-semibold mb-4 mt-4">
              Door to Door <br /> Delivery!
            </h1>
            <p className="text-gray-500">
              This is the third step of the introduction.
            </p>
            <button
              className="bg-black hover:bg-blue-600 text-white w-72 py-3 rounded-3xl mt-11"
              onClick={navigateToAcc}
            >
              Get Started
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  if (isCompleted) {
    return <div>{/* Rendera huvudapplikationen */}</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="rounded-full bg-white w-[30rem] h-[30rem]">
        <div className="w-[30rem] h-[30rem] p-8 bg-white shadow rounded-full">
          {renderStepContent()}
          <div className="mt-8 flex justify-center">
            <button
              className={` mr-2 w-2 h-2 rounded-full ${
                currentStep === 1 ? "border-2 border-black w-5" : "bg-black"
              }`}
              onClick={() => handleStepChange(1)}
            />
            <button
              className={`mr-2 w-2 h-2 rounded-full ${
                currentStep === 2 ? "border-2 border-black w-5" : "bg-black"
              }`}
              onClick={() => handleStepChange(2)}
            />
            <button
              className={`w-2 h-2 rounded-full ${
                currentStep === 3 ? "border-2 border-black w-5" : "bg-black"
              }`}
              onClick={() => handleStepChange(3)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSlider;
