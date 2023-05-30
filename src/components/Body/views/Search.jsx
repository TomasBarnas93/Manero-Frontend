import React, { useState, useContext } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";
import ProductItem from "../components/ProductItem";

const Search = () => {
  const { fetchSearchProduct, products } = useContext(ProductContext);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await fetchSearchProduct(searchText);
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const renderSearchResults = () => {
    if (searchText && searchResults.length === 0) {
      return (
        <>
          <p className="text-center mt-5 font-bold">No Products Found...</p>
          <ul className="flex flex-wrap m-5 justify-between items-center md:flex-wrap gap-6 mt-10">
            {products.map((product) => (
              <li key={product.id}>
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
        </>
      );
    } else if (searchResults.length > 0) {
      return (
        <div className="flex flex-wrap m-5 justify-between items-center md:flex-wrap gap-6 mt-10">
          {searchResults.map((result) => (
            <ProductItem key={result.id} product={result} />
          ))}
        </div>
      );
    } else {
      return (
        <ul className="flex flex-wrap m-5 justify-between items-center md:flex-wrap gap-6 mt-10">
          {products.map((product) => (
            <li key={product.id}>
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="mt-5 mb-5 flex flex-col items-center justify-center">
      <div className="gap-4 flex">
        <button onClick={handleSearch}>
          <i className="fa-thin fa-magnifying-glass"></i>
        </button>
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search"
          className="rounded"
        />
      </div>

      <div>{renderSearchResults()}</div>
    </div>
  );
};

export default Search;
