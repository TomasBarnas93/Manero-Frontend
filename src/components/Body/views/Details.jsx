import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../../misc/StarRating';
import { ProductContext } from '../../../contexts/ProductProvider';

function Details() {
  const { id } = useParams();
  const products = useContext(ProductContext);
  const [counter, setCounter] = useState(1);

  const plusCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const minusCounter = () => {
    if (counter > 1) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  const productSizeList = ["XXL", "XL", "S", "M", "L", "XS"];
  const colorOptions = ["#ff6262", "#63c7ff", "#f8e7cd", "#323858", "#111111"];

  const product = products.find((item) => item.id === id);

  return (
    <div className="container px-4 mx-auto">
      <div>
        <img
          src={product.imageUrl}
          alt="img"
          className="rounded-lg shadow-md p-4 h-64 w-full lg:w-80"
        />
      </div>
      <div className="pt-4">
        <div className='flex gap-24'>
        <h2 className="font-bold">{product.name}</h2>
        <button className="link">
            <i className="fa-regular fa-heart opacity-50"></i>
          </button>
        </div>
        <StarRating rating={product.starRating} />
        <div className='flex gap-48'>
        <p>${product.price}</p>
        <div className='flex gap-2'>
          <button onClick={minusCounter}>-</button>
          <span>{counter}</span>
          <button onClick={plusCounter}>+</button>
        </div>
        </div>
        <div className="mt-3">
          <p>Size</p>
          <div className="flex pt-2">
            {productSizeList.map((size) => (
              <button
                key={size}
                className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full mr-2"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="pt-4 flex">
          <p>Color</p>
          <div className="flex pl-5">
            {colorOptions.map((color) => (
              <button
                key={color}
                className="w-8 h-8 rounded-full mr-2"
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>
        <div className='mt-5'>
            <p>Description</p>
            <p className='text-zinc-400 font-light'>{product.description}</p>
        </div>
        <button className='bg-black hover:bg-blue-600 text-white w-80 py-2 rounded-3xl mt-11'>+ ADD TO CART</button>

        {/* <Reviews/> */}
      </div>
    </div>
  );
}

export default Details;
