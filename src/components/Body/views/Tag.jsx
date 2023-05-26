import React, { useContext, useState } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";
import ProductItem from "../components/ProductItem";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Tag = ({ children }) => {
  const { tagName } = useParams();
  const { products } = useContext(ProductContext);

  const productByTag = products.filter((product) =>
    product.tags.some((productTag) => productTag.name === tagName)
  );

  // Sort
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedProductByTag = [...productByTag];

  if (sortOption === "price lowest") {
    sortedProductByTag.sort((a, b) => a.price - b.price);
  } else if (sortOption === "rating lowest") {
    sortedProductByTag.sort((a, b) => a.rating - b.rating);
  } else if (sortOption === "price highest") {
    sortedProductByTag.sort((a, b) => b.price - a.price);
  } else if (sortOption === "rating highest") {
    sortedProductByTag.sort((a, b) => b.rating - a.rating);
  }
  // Sort end

  return (
    <>
      <h1 className="font-bold text-center mt-5 mb-5 ml-2">
        {tagName} {children}
      </h1>
      <div className="m-auto max-w-7xl">
        <div className="flex flex-col m-5 justify-between items-center md:flex-row">
          <div className="mb-8 md:mb-5">
            <Link to={`/filters`}>
              <div className="flex gap-2 mt-4">
                <i className="fa-light fa-filter fa-xl"></i>
                <p>Filters</p>
              </div>
            </Link>
          </div>
          <div className="flex gap-2 mb-4">
            <p className="mr-2">Sorting by</p>
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="border border-gray-300 rounded-md px-1 py-1 md:px-1"
            >
              <option value=""></option>
              <option value="price lowest">Price lowest</option>
              <option value="price highest">Price highest</option>
              <option value="rating lowest">Rating lowest</option>
              <option value="rating highest">Rating highest</option>
            </select>
          </div>
        </div>
        <ul className="flex flex-wrap justify-center gap-6">
          {sortedProductByTag.map((product) => (
            <li key={product.id} className="w-full md:w-auto">
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tag;
