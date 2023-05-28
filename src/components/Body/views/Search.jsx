import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";
import ProductItem from "../components/ProductItem";
import BestSellers from "../components/BestSellers";

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

  useEffect(() => {
    handleSearch();
  }, [searchText]);

  const renderSearchResults = () => {
    if (searchText && searchResults.length === 0) {
      return (<> <p>No Products Found...</p> <BestSellers /> </> )

        
      
    } else if (searchResults.length > 0) {
      return (
        <div className="m-5">
          {searchResults.map((result) => (
            <ProductItem key={result.id} product={result} />
          ))}
        </div>
      );
    } else {
      return <BestSellers />;
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

      <div className="m-10">{renderSearchResults()}</div>
    </div>
  );
};

export default Search;
