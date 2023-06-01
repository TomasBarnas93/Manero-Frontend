import React, { createContext, useEffect, useState } from 'react';
import { ReviewService, ReviewPostService } from '../components/services/ReviewService';

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


  const addReview = async (id, review) => {
    try {
      const data = await ReviewPostService(id, review);
      setReviews([...reviews, data]);
    } catch (error) {
      console.error('Error adding review:', error);
      throw error;
    }
  };

  return (
    <ReviewContext.Provider 
    value={{reviews, addReview}}>{children}
    </ReviewContext.Provider>
  );
};

export { ReviewContext, ReviewProvider };
