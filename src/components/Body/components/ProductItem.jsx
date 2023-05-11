import React from "react";
import StarRating from "../../misc/StarRating";

const ProductItem = ({ product }) => {
  return (
    <>
      <button className="relative">
      <img
          className="rounded-lg shadow-md p-4 h-64 w-56"
          src={product.imageUrl}
          alt="Img"
          style={{ background: "transparent" }}
        />
        <div className="absolute top-0 right-0 m-2 flex flex-col">
          <button className="link mb-2"><i className="fa-regular fa-heart opacity-50"></i></button>
          <button className="link"><i className="fa-regular fa-bag-shopping opacity-50"></i></button>
        </div>
      </button>

      <div>
        <div>
          <div>
            <StarRating rating={product.starRating} />
            <h3 className="text-left">{product.name}</h3>
          </div>
          <div>
            <p className="text-left font-bold">${product.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
