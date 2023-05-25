import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuRow from '../components/MenuRow';

const Account = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Handle sign out logic here
    navigate('/login'); // Redirect to the login page after sign out
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <div className="flex flex-col items-center mb-3">
            <div className="w-32 h-32 rounded-full border-2 border-gray-500">
              {/* Place the profile picture here */}
            </div>
            <h1 className="text-lg font-semibold mt-3">John Doe</h1>
            <p className="text-gray-600 text-sm">john.doe@example.com</p>
          </div>
          <div className="border-t border-gray-300 w-full"></div>
          <div className="flex flex-col space-y-2">
            <MenuRow title="Order History" removeTopMargin addBottomBorder fullWidth />
            <MenuRow title="Payment Method" addBottomBorder fullWidth />
            <MenuRow title="My Address" addBottomBorder fullWidth />
            <MenuRow title="My Promocodes" addBottomBorder fullWidth />
          </div>
          <div className="flex justify-center py-3">
            <button
              className="px-3 py-2 text-base font-semibold text-red-500 bg-transparent border border-red-500 rounded-md hover:bg-red-500 hover:text-white focus:outline-none"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
