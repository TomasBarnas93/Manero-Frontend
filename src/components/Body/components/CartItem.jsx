import React from 'react';
import StarRating from '../../misc/StarRating';
import CartIcon from './CartIcon';

const CartItem = ({ product, addedState, updateAddedState, removeProduct }) => {
  
  
  const submitRemove = () => {
    removeProduct(product.id);
  };

  if (!product) {
    return null;
  } else {
    return (
      <div className="w-full border-b flex p-3 max-h-44 max-w-2xl relative">
        <img src={product.imageUrl} alt="" className="w-1/3 border" />
        <div className="flex flex-col pl-5">
          <h2>{product.name}</h2>
          <p className="font-bold">${product.price}</p>
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        </div>
        {/* <div className="flex flex-col top-3 right-3 absolute">
          <CartIcon id={product.id} addedState={addedState} updateAddedState={updateAddedState} />
        </div> */}

        <div className="flex flex-col top-3 right-3 absolute">
          {/* <CartIcon
            id={product.id}
            addedState={addedState}
            updateAddedState={updateAddedState}
          /> */}
          <button
            onClick={submitRemove}
            className="link rounded-full p-1 px-2 hover:bg-gray-300"
          >
            <i className="fa-regular fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
};

export default CartItem;
