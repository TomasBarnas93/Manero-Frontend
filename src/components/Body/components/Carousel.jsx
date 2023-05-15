import React, { useState, useContext } from 'react';


import { ProductContext } from '../../../contexts/ProductProvider';


const Carousel = () => {
  const products = useContext(ProductContext);
  const [activeSlide, setActiveSlide] = useState(0);


  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % products.length);
  };


  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + products.length - 1) % products.length);
  };


  const slides = products.map((product) => ({
    id: product.id,
    src: product.imageUrl,
    alt: product.name,
  }));


  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="relative w-80 h-80">
          {slides.map((slide, index) => (
            <img
              key={slide.id}
              src={slide.src}
              alt={slide.alt}
              className={`absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                activeSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-center mt-2">
        </div>
      </div>
      <div className="flex justify-center mt-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`mx-1 bg-gray-200 rounded-full w-4 h-4 focus:outline-none ${
              activeSlide === index ? 'bg-gray-600' : ''
            }`}
            onClick={() => setActiveSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};


export default Carousel;
