import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../contexts/ProductProvider";
import StarRating from "../../misc/StarRating";

const ReviewsAll = () => {
  const { id } = useParams();
  const { fetchSingleProduct } = useContext(ProductContext);
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSingleProduct(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [fetchSingleProduct, id]);

  if (!product) {
    return <>loading..</>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-start w-full m-5 pl-5">
        <Link to={`/details/${id}`}>
          <i className="fas fa-chevron-left fa-lg"></i>
        </Link>
        <div className="flex justify-center flex-auto">
          <p className="text-center font-normal text-lg">Reviews</p>
        </div>
      </div>
      <>
          {product.reviews.map((review) => (
            <>
            <div key={review.id} className="mt-5 mb-8">
              <div className="flex items-left mb-2 mt-2 gap-6">
                <div className="w-9 h-9 border bg-[#D7DFF3] rounded-full"></div>
                <p className="font-bold">
                  {review.ratedBy.firstName} {review.ratedBy.lastName}
                </p>
                <StarRating rating={review.rating} />
              </div>
              <div>
                <p className="text-gray-500 pl-14">
                  {review.ratedBy.comment}
                </p>
              </div>
            </div>
              <div className="border-b-2 border-[#D7DFF3] w-full md:w-[60%]"></div>
              </>
          ))}
      </>
    </div>
  );
};

export default ReviewsAll;
