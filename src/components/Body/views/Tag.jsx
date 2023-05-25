import React, { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";
import ProductItem from "../components/ProductItem";

const Tag = ({ tag }) => {
  const { products } = useContext(ProductContext);

  const productByTag = products.filter((product) =>
    product.tags.some((productTag) => productTag.name === tag)
  );
  
  return (
    <>
      <h1 className="font-bold text-center mt-5 mb-5 ml-2">{tag}</h1>
      <div className="mt-5 mb-5 ml-2">
        <ul className="flex gap-6">
          {productByTag.map((product) => (
            <li key={product.id}>
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tag;
