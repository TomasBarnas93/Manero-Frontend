import React, { useEffect } from 'react';
import "../../../../src/index.css"
const Onboarding = () => {
  useEffect(() => {
    const onboardingContainer = document.querySelector(".onboarding-container");
    const onboardingOverlay = document.querySelector(".onboarding-overlay");
    const skipBtn = document.querySelector(".onboarding-container .skip-btn");
    const steps = document.querySelectorAll(".onboarding-container .step");
    const stepsContainer = document.querySelector(".onboarding-container .steps");
    const nextBtn = document.querySelector(".onboarding-container .next-btn");
    const dots = document.querySelectorAll(".onboarding-container .dot");

    let stepPosition = 0;
    let currentStep = 0;

    const init = () => {
      stepsContainer.style.transition = "unset";
      onboardingContainer.classList.add("active");

      currentStep = 0;
      stepPosition = 0;
      stepsContainer.style.transform = `translateX(-${stepPosition}px)`;

      dots.forEach((d) => {
        d.classList.remove("active");
      });

      dots[currentStep].classList.add("active");

      nextBtn.innerHTML = "Get Started";
    };

    const handleNextStep = () => {
      stepsContainer.style.transition = "all 400ms ease";
      currentStep++;

      if (currentStep >= steps.length) {
        stepsContainer.style.transition = "unset";
        onboardingContainer.classList.remove("active");
        onboardingOverlay.classList.remove("active");
        currentStep = 0;
      }

      stepPosition += steps[0].offsetWidth;

      stepsContainer.style.transform = `translateX(-${stepPosition}px)`;

      dots.forEach((d) => {
        d.classList.remove("active");
      });

      dots[currentStep].classList.add("active");

      if (currentStep === steps.length - 1) {
        nextBtn.innerHTML = "Finish";
      }
    };

    // Automatically trigger the onboarding process when the page loads
    init();

    nextBtn.addEventListener("click", handleNextStep);
  }, []);

  return (
    <div className="container">
      <div className="top"></div>
      <div className="bottom">
        <div className="onboarding-container">
          <div className="content">
            <div className="steps">
              <div className="step">
                <div className="image"></div>
                <h3>Welcome to Manero!</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, facere!</p>
              </div>
              <div className="step">
                <div className="image"></div>
                <h3>Easy Track Order!</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, facere!</p>
              </div>
              <div className="step">
                <div className="image"></div>
                <h3>Door to Door Delivery!</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, facere!</p>
              </div>
            </div>
            <button className="next-btn">Get Started</button>
            <div className="dots">
              <div className="dot active"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
