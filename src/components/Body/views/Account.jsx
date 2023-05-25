
import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../../../contexts/AuthProvider'
import { useNavigate } from "react-router-dom";
import MenuRow from '../components/MenuRow';
import Login from './Login';
import SignoutConfirm from '../components/SignoutConfirm';

const Account = () => {
  const navigate = useNavigate();

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  
  const [authenticated, setAuthenticated] = useState(false);

  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    isAuthenticated().then((result) => {
      setAuthenticated(result);
    });
    
  }, []);

  const handleConfirmSignOut = () => {
    
    navigate('/logout'); // Redirect to the login page after sign out
  };
  
  const handleCancelSignOut = () => {
    setShowConfirmDialog(false);
  };
  
  const handleSignOut = () => {
    setShowConfirmDialog(true);
    // Handle sign out logic here
    //navigate('/logout'); // Redirect to the login page after sign out
  };

  if(authenticated == false){
    return <Login />
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      {showConfirmDialog && (
      <SignoutConfirm
        onConfirm={handleConfirmSignOut}
        onCancel={handleCancelSignOut}
      />
    )}
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
            <MenuRow title="Order History" iconClass="fas fa-shopping-cart" removeTopMargin addBottomBorder fullWidth />
            <MenuRow title="Payment Method" iconClass="fas fa-credit-card" addBottomBorder fullWidth />
            <MenuRow title="My Address" iconClass="fas fa-map-marker-alt" addBottomBorder fullWidth />
            <MenuRow title="My Promocodes" iconClass="fas fa-tags" addBottomBorder fullWidth />
            <div className="flex items-center h-12 py-2 border-b border-gray-300 w-full">
            <i i className="fas fa-sign-out-alt text-black-500 mr-2"></i>
            <button className="text-base font-normal text-left ml-3" onClick={handleSignOut}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
