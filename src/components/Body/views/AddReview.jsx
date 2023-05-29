import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../contexts/AuthProvider';
import { ReviewContext } from "../../../contexts/ReviewProvider";

const AddReview = () => {
  const { id } = useParams();

  console.log('id:', id);
  const { addReview } = useContext(ReviewContext);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");






  const submitReview = async (e) => {
    e.preventDefault();


    let authUser = await isAuthenticated();

    if (authUser === false) {
        navigate("/login");
    }



    const review = {
      rating: rating,
      comment: comment,
      productId: id,
    };

    let result = await  addReview(review);
    setRating(0);
    setComment("");

    console.log('result:', result);

  };

  return (
    <div>   
        
      <h2 className="font-bold">Please Rate The Product!</h2>

      {/* Rating input */}
      <input type="number" value={rating}  max="5" min ="0" onChange={(e) => setRating(parseInt(e.target.value))} />

      {/* Comment input */}
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />

      {/* Submit button */}
      <button onClick={(e) => submitReview(e)}>Submit Review</button>
    </div>
  );
};

export default AddReview;
