import React, { useState } from "react";
import apiService from "../components/services/GetProductsService";

const SearchProvider = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await apiService.searchProducts(searchText);
      setSearchResults(data);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Enter your search query"
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 ? (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default SearchProvider;
