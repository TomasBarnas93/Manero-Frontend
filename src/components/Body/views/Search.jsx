import React, { useState, useContext } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";
import ProductItem from "../components/ProductItem";

const Search = () => {
  const { fetchSearchProduct } = useContext(ProductContext);
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

  return (
    <div className="mt-5 mb-5 ml-2 text-center justify-center ">
        <div className="gap-4 justify-center flex">
        <button onClick={handleSearch}><i class="fa-thin fa-magnifying-glass"></i></button>
    <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search"
        className="rounded"
      />
      </div>
      <div className="justify-center m-10">
      {searchResults.length > 0 ? (
        <div className="m-5">
          {searchResults.map((result) => (
            <ProductItem key={result.id} product={result} />
          ))}
        </div>
      ) : <p>No Products Found...</p>}
      </div>
    </div>
  );
};

export default Search;
