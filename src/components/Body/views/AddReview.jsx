import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { ReviewContext } from "../../../contexts/ReviewProvider";
import StarRating from "../../misc/ReviewStarRating";

const AddReview = () => {
  const { id } = useParams();
  const { addReview } = useContext(ReviewContext);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const submitReview = async (e) => {
    e.preventDefault();

    let authUser = await isAuthenticated();

    if (authUser === false) {
      navigate("/login");
    }
    navigate(`/details/${id}`);

    const review = {
      rating: rating,
      comment: comment,
      productId: id,
    };

    let result = await addReview(review);
    setRating(0);
    setComment("");

    console.log("result:", result);
  };

  return (


    <div className="flex flex-col items-center justify-center p-4">
    
      <p className="mb-6">Leave a Review</p>

      <div className="w-24 h-24 flex items-center justify-center border-2 border-black rounded-full mb-8 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-14 h-14 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
      </div>

      <h2 className="font-bold text-2xl">Please rate the quality of</h2>
      <h2 className="font-bold text-2xl mb4"> service for the order!</h2>

      <StarRating rating={rating} handleRatingChange={handleRatingChange}/>
        <h4 className="mt-6 mb-6 text-sm text-gray-500">
        Your comments and suggestions help us <br /> improve the security quality better
      </h4>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter your comment"
        className="border border-gray-300 rounded-lg px-4 py-2 mb-4 resize-none w-full md:w-56 h-32"
      />
      <button
        onClick={submitReview}
        className="bg-black hover:bg-blue-600 text-white w-80 py-2 rounded-3xl mt-11 mb-32" 
      >
        Submit
      </button>
    </div>
  );
};

export default AddReview;
