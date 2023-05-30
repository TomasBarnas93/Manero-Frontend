import React, { useState } from "react";
import { Link } from "react-router-dom";

const Filter = () => {
  const productSizeList = ["XS", "S", "M", "L", "XL", "XXL"];
  const colorOptions = ["#ff6262", "#63c7ff", "#f8e7cd", "#323858", "#111111"];
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [filters, setFilters] = useState({
    sale: false,
    new: false,
    top: false,
  });
  const [activeTags, setActiveTags] = useState([]);
  const [activeSize, setActiveSize] = useState([]);
  const [activeColor, setActiveColor] = useState([]);

  const handlePriceRangeChange = (event) => {
    const value = event.target.value.split(",").map(Number);
    setPriceRange(value);
  };

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handleTagClick = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  const handleSizeClick = (size) => {
    if (activeSize.includes(size)) {
      setActiveSize(activeSize.filter((s) => s !== size));
    } else {
      setActiveSize([...activeSize, size]);
    }
  };

  const handleColorClick = (color) => {
    if (activeColor.includes(color)) {
      setActiveColor(activeColor.filter((c) => c !== color));
    } else {
      setActiveColor([...activeColor, color]);
    }
  };

  const renderTagButtons = () => {
    const tags = [
      "KIDS",
      "SPORT",
      "DRESS",
      "PANTS",
      "T-SHIRT",
      "HAT",
      "UNISEX",
      "BAG",
      "ACCESSORIES",
      "SHOES",
      "POLO",
    ];

    return tags.map((tag) => (
      <div className="flex flex-col gap-3">
      <button
        key={tag}
        className={`rounded-full border border-gray-400 py-2 px-4 text-sm font-medium ${
          activeTags.includes(tag) ? "bg-slate-200 text-black" : "bg-white"
        }`}
        onClick={() => handleTagClick(tag)}
      >
        {tag}
      </button>
      </div>
    ));
  };

  return (
    <div className="m-auto max-w-screen-2xl">
      <div className="flex items-center justify-between md:flex-auto gap-4 m-5">
        <Link to={`/`}>
          {" "}
          <i className="fas fa-chevron-left fa-lg"></i>
        </Link>
        <div className="flex justify-center flex-auto">
          <h2 className="text-center font-normal text-lg">Filter</h2>
        </div>
      </div>

      <div className="ml-5 mb:ml-auto">
        <div className="mt-7">
          <p className="text-base font-medium">Size</p>
          <div className="flex pt-2 gap-1">
            {productSizeList.map((size) => (
              <button
                key={size}
                className={`w-11 h-11 flex items-center justify-center border border-gray-400 rounded-full mr-2 
                ${activeSize.includes(size) ? "bg-slate-200 text-black" : "bg-white"}`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-5 flex">
          <p className="text-base font-medium">Color</p>
          <div className="flex pl-6 gap-1">
            {colorOptions.map((color) => (
              <button
              key={color}
              className={`relative w-8 h-8 rounded-full mr-2 ${
                activeColor.includes(color) ? "bg-slate-200" : "bg-white"
              }`}
              onClick={() => handleColorClick(color)}
              style={{ backgroundColor: color }}
            >
              {activeColor.includes(color) && (
                <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
              )}
            </button>
            ))}
          </div>
        </div>

        <div className="pt-5 mt-2">
          <p className="text-base font-medium">Price</p>
          <input
            type="range"
            min={0}
            max={10000}
            value={priceRange.join(",")}
            onChange={handlePriceRangeChange}
            className="w-72 md:w-96 mt-5"
          />
          <div>{`$${priceRange[0]}`}</div>
        </div>

        <div className="pt-5 mt-2">
          <div className="flex gap-12">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="sale"
                checked={filters.sale}
                onChange={handleFilterChange}
                className="mr-2"
              />
              <span className="bg-lime-700 h-5 w-10 text-white text-center text-xs font-medium">
                Sale
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="new"
                checked={filters.new}
                onChange={handleFilterChange}
                className="mr-2"
              />
              <span className="bg-yellow-400 w-10 h-5 text-white text-center text-xs font-medium">
                New
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="top"
                checked={filters.top}
                onChange={handleFilterChange}
                className="mr-2"
              />
              <span className="bg-purple-500 h-5 w-9 text-white text-center text-xs font-medium">
                Top
              </span>
            </label>
          </div>
        </div>

        <div className="pt-5 mt-2">
          <p className="text-base font-medium">Tags</p>
          <div className="flex flex-wrap pt-4 gap-3">{renderTagButtons()}</div>
        </div>

        <button className="bg-black hover:bg-blue-600 text-white w-72 md:w-96 py-2 rounded-3xl mt-11">
          APPLY FILTERS
        </button>
      </div>
    </div>
  );
};

export default Filter;
