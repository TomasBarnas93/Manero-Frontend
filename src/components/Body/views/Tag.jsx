import React, { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";
import ProductItem from "../components/ProductItem";
import { useParams } from "react-router-dom";

const Tag = () => {
  const { tagName } = useParams();
  const { products } = useContext(ProductContext);

  const productByTag = products.filter((product) =>
    product.tags.some((productTag) => productTag.name === tagName)
  );
  
  return (
    <>
      <h1 className="font-bold text-center mt-5 mb-5 ml-2">{tagName}</h1>
      <div className="mt-5 mb-5 ml-2">
        <div className="flex">
        
        </div>
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
