import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartIcon = ({ id }) => {
  const [addedState, setAddedState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAdded = localStorage.getItem('addedState');
    if (savedAdded) {
      const parsedAdded = JSON.parse(savedAdded);
      const isAdded = parsedAdded.includes(id);
      setAddedState(isAdded);
    }
  }, [id]);

  const submitAdded = () => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/login');
      return;
    }

    const savedAdded = localStorage.getItem('addedState');
    let updatedAdded = [];
    if (savedAdded) {
      updatedAdded = JSON.parse(savedAdded);
    }

    const isAdded = updatedAdded.includes(id);
    if (isAdded) {
      updatedAdded = updatedAdded.filter((productId) => productId !== id);
    } else {
      updatedAdded.push(id);
    }

    localStorage.setItem('addedState', JSON.stringify(updatedAdded));
    setAddedState(!isAdded);
  };

  return (
    <div>
      <button onClick={submitAdded} className="link rounded-full p-1 px-2 hover:bg-gray-300">
        <i className={`fa-regular fa-bag-shopping ${addedState ? 'text-blue-500' : 'opacity-50'}`}></i>
      </button>
    </div>
  );
};

export default CartIcon;
