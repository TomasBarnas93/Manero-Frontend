import React, { useState, useEffect } from 'react';
import Home from '../views/Home';
import Icon from '../../misc/Icon';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (


    <div className="container px-4 mx-auto">

    


<div className="bg-[#ffffff] flex items-center justify-center h-screen">
        <div className="absolute bg-black rounded-full w-[5rem] h-[5rem] flex items-center justify-center">
          <div className="absolute bg-[#D7DFF3] rounded-full w-[25.5rem] h-[25.5rem] flex items-center justify-center">
            <div className="bg-white rounded-full w-[20rem] h-[20rem] flex flex-col items-center justify-center">
            <div className="col-start-10 col-span-1 text-center relative">
          <Icon
            to="/shoppingCart"
            button="text-xl"
            icon="fa-regular fa-bag-shopping"
          />
              </div>
            </div>
          </div>
        </div>
      </div>


      {cartItems.length === 0 ? (
        <div>
          <div className='text-3xl text-center mt-9 font-medium'>Your cart is empty!</div>
          <p className='text-center mt-4 font-light'>Looks like you haven't made your order yet!</p>

          <button className="bg-black hover:bg-blue-600 text-white w-full py-2 rounded-3xl mt-11 mb-60" onClick={(Home)}>
          Shop now
          </button>
        </div>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;


