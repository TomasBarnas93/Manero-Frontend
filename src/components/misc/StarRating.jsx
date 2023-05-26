import React from 'react';

const StarRating = ({ rating, reviewCount }) => {

  

  const stars = Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className={`fa-sharp fa-star ${index < rating ? "fa-solid" : "fa-regular"}`}
    ></i>
  ));

 const reviewCountText = reviewCount > 0 ? `(${reviewCount})` : '';
  
  return (
    <div className="star-rating text-[#F1C40F]">
      {stars}
      <span className='text-black ml-2'>{reviewCountText}</span>
    </div>);
};

export default StarRating;
