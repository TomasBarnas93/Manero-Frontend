import React from 'react';
import { Link } from 'react-router-dom';

function ShoppingCart() {
  const { cartItems, removeFromCart } = [];

  return (
    <div className="menu-content">
      <h2 className="text-white">Varukorg</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Din varukorg är tom.</p>
          <Link to="/search" className="bg-black hover:bg-blue-600 text-white w-80 py-2 rounded-3xl mt-11">
            Börja shoppa
          </Link>
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
          <Link to="/" className="bg-black hover:bg-blue-600 text-white w-80 py-2 rounded-3xl mt-11">
            Forsätt shoppa
          </Link>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
