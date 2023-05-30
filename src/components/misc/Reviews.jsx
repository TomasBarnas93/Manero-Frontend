import React, { useContext } from 'react';
import { ReviewContext } from '../../contexts/ReviewProvider';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Reviews() {
  const {reviews} = useContext(ReviewContext) || [];
  const reviewCount = reviews.length;
  const { id } = useParams();

  return (
    <div className="mt-5">
      <div className='flex justify-between pr-5'>
      <h3 className="mb-4">Reviews ({reviewCount})</h3>
      <Link to={`/reviews/${id}`}>view all&gt;</Link>
      </div>
      {reviews.map((review) => (
        <div key={review.id} className="mb-4">
          <div className="flex items-center mb-2">
            <p className="font-bold"> {review.ratedBy.lastName}</p>
            <div className="ml-2 text-sm">
              <StarRating rating={review.rating} />
            </div>
          </div>
          <p className="ml-8 text-gray-500"> {review.ratedBy.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
