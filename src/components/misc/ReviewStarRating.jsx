import React, { useState } from "react";

const StarRating = ({ handleRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
    handleRatingChange(value);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-5xl ${
            star <= rating ? "text-yellow-500" : "text-gray-300"
          } mr-2`}
          onClick={() => handleStarClick(star)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
