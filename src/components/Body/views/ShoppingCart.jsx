import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

const ShoppingCart = () => {
  const [added, setAdded] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem('accessToken');

    if (!token) {
      navigate('/login');
      return;
    }

    const savedAdded = JSON.parse(localStorage.getItem('addedState'));

    if (savedAdded) {
      const updatedAdded = savedAdded.map((product) => {
        return { ...product, addedState: true };
      });
      setAdded(updatedAdded);
    }
  }, []);

  const handleShopNow = () => {
    navigate('/')
  };

  const removeProduct = (id) => {
    const productIndex = added.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      const updatedAdded = [...added];
      updatedAdded.splice(productIndex, 1);
      setAdded(updatedAdded);
      localStorage.setItem('addedState', JSON.stringify(updatedAdded));
    }
  };

  const updateAddedState = (id, updatedAddedState) => {
    const updatedAdded = added.map((product) => {
      if (product.id === id) {
        return { ...product, addedState: updatedAddedState };
      }
      return product;
    });
    setAdded(updatedAdded);
    localStorage.setItem('addedState', JSON.stringify(updatedAdded));
  };

  const calculateTotal = () => {
    let total = 0;
    added.forEach((product) => {

      total += product.price;

    });
    return total;
  };

  if (added.length === 0) {
    return (
      <div className="bg-white flex flex-col items-center justify-center screen mt-20">
        <div className="rounded-full bg-[#D7DFF3] w-[23rem] h-[23rem] flex items-center justify-center">
          <div className="rounded-full bg-white w-[22rem] h-[22rem] flex flex-col items-center justify-center">
            <div className="bg-[#d7dff3] rounded-full opacity-170 w-[20rem] h-[20rem] flex flex-col items-center justify-center" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 20%, transparent 20%, transparent 40%, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 0.2) 60%, transparent 60%, transparent 80%, rgba(255, 255, 255, 0.2) 80%, rgba(255, 255, 255, 0.2))' }}>

              <button className="link rounded-full p-1 px-2 hover:bg-gray-300" onClick={handleShopNow}>
                <i className="fa-regular fa-bag-shopping opacity-150 fa-5x"></i> 
              </button>

            </div>
          </div>
        </div>
          <h4 className="text-3xl font-bold mt-10 text-center">Your cart is empty!</h4>
          <h4 className="text-3xl font-light mt-4 text-center">Looks like you haven't made your order yet</h4>
          <button className="bg-black hover:bg-blue-600 text-white w-80 py-3 rounded-3xl mb-20 mt-16" onClick={handleShopNow}>
          Shop now
          </button>
      </div>
    );
  } else {
    return (
      <div>
        {added.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            addedState={product.addedState || null}
            updateAddedState={updateAddedState}
            removeProduct={removeProduct}
          />
        ))}

      <hr />
      
      <h3 className="text-3xl font mt-10 ml-3">Your items:</h3>
      {added.map((product) => (
          <p key={product.id}>
            {product.name} - {product.price}
          </p>
      ))}

      <h3 className="text-3xl font-bold mt-10 ml-3">Total: {calculateTotal()}</h3>


      <div className="flex justify-center">
        <button className="bg-black hover:bg-blue-600 text-white  w-80 py-3 rounded-3xl mb-20 mt-16 ">
          Proceed to checkout
        </button>
      </div>

      </div>
    );
  }
};

export default ShoppingCart;
