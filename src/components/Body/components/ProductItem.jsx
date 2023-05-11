import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="bg-slate-200 rounded-lg shadow-md p-4 h-64 w-64 ;">
      <div className="flex justify-center">
      <img
        className="h-32"
        src={product.imageUrl}
        alt="Img"
      />
      </div>
      <div>
      <div>
        <h3 className="text-center underline underline-offset-8 font-bold">{product.name}</h3>
        <p className="text-center">{product.description}</p>
      </div>
      <div>
        <p className="text-center font-bold">{product.price}$</p>
      </div>
      </div>
    </div>
  );
};

export default ProductItem;
