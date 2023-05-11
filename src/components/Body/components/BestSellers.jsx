import React, { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";
import ProductItem from "./ProductItem";

const BestSellers = () => {
  const products = useContext(ProductContext);

  const limitedProducts = products.slice(0, 4);

  return (
    <div className="mt-5 mb-5 ml-2">
      <h2>Best Sellers</h2>
      <ul className="flex gap-6">
        {limitedProducts.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestSellers;
