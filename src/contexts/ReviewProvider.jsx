import React, { createContext, useEffect, useState } from 'react';
import { ReviewService } from '../components/services/ReviewService';

const ReviewContext = createContext();

const ReviewProvider = ({ children, productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ReviewService(productId);
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchData();
  }, [productId]);

  return (
    <ReviewContext.Provider 
    value={reviews}>{children}
    </ReviewContext.Provider>
  );
};

export { ReviewContext, ReviewProvider };
