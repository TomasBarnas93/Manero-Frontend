import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const Featured = () => {
  const { products } = useContext(ProductContext);
  const [numOfProducts, setNumOfProducts] = useState(4);
  const tag = "Featured";

  useEffect(() => {
    const updateProductCount = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 600) {
        setNumOfProducts(2);
      } else if (screenWidth >= 600 && screenWidth < 900) {
        setNumOfProducts(4);
      } else {
        setNumOfProducts(6);
      }
    };

    window.addEventListener("resize", updateProductCount);

    return () => {
      window.removeEventListener("resize", updateProductCount);
    };
  }, []);
  const filteredProducts = products.filter((product) =>
    product.tags.some((featuredTag) => featuredTag.name === tag)
  );

  const limitedProducts = filteredProducts.slice(0, numOfProducts);

  return (
    <div className="mt-5 mb-5 ml-2">
      <div className="flex justify-between pr-5">
        <h2 className="font-bold">Featured</h2>
        <Link to={`/${tag}`}>view all&gt;</Link>
      </div>
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

export default Featured;
