import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-66 w-100 flex flex-col justify-between">
      <div className="flex flex-col justify-between h-full">
        <div>
          <img
            className="w-32 h-32 object-cover"
            src={product.imageUrl}
            alt="Img"
          />
          <div className="mt-2">
            <h3 className="text-xl font-semibold">
              <span className="d-inline-block d-sm-none">{product.name}</span>
              <span className="d-none d-sm-inline-block">{product.name}</span>
            </h3>
            <p className="text-gray-500">
              <span className="d-inline-block d-sm-none">
                {product.description}
              </span>
              <span className="d-none d-sm-inline-block">
                {product.description}
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-sm">{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
