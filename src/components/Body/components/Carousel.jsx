import React, { useState } from 'react';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 2) % 3);
  };

  const slides = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1',
      alt: 'Slide 1',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e',
      alt: 'Slide 2',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3',
      alt: 'Slide 3',
    },
  ];

  return (
    <div className='pt-1'>

   
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
