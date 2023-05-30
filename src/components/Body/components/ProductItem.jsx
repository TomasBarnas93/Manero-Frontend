import {React, useContext} from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../../misc/StarRating";
import HeartIcon from "./HeartIcon";



const ProductItem = ({ product }) => {

  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`/details/${product.id}`);
  };



  return (
    <div>
      <button className="relative" >
        <img
          className="rounded-lg shadow-md p-4 h-64 w-56"
          src={product.imageUrl}
          alt="Img"
          style={{ background: "transparent" }}
          onClick={navigateToDetails}
        />
        <div className="absolute top-0 right-0 m-2 flex flex-col">
          <HeartIcon id={product.id} liked={product.liked} />
          <button className="link rounded-full p-1 px-2 hover:bg-gray-300">
            <i className="fa-regular fa-bag-shopping opacity-50"></i>
          </button>
        </div>
      </button>

      <div>
        <div>
          <div>
            <StarRating rating={product.rating} />
            <h3 className="text-left">{product.name}</h3>
          </div>
          <div>
            <p className="text-left font-bold">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
