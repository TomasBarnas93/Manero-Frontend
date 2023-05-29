import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
import MenuRow from '../components/MenuRow';
import SignoutConfirm from '../components/SignoutConfirm';
import { ProfileContext } from '../../../contexts/ProfileProvider';


const Account = () => {
  const navigate = useNavigate();

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [authenticated, setAuthenticated] = useState();
  const { isAuthenticated } = useContext(AuthContext);
  const { getProfile, profileData, updateProfile } = useContext(ProfileContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    isAuthenticated().then((result) => {
      setAuthenticated(result);
    });
  }, []);

  useEffect(() => {
    if (profileData) {
      setName(profileData.firstName);
      setEmail(profileData.email);
    }
  }, [profileData]);
  const handleConfirmSignOut = () => {
    navigate('/logout');
  };

  const handleCancelSignOut = () => {
    setShowConfirmDialog(false);
  };

  const handleSignOut = () => {
    setShowConfirmDialog(true);
  };

  if (authenticated === false) {
    navigate('/login');
  }

  const handleMenuItemClick = (url) => {
    navigate(url);
  };

  if (authenticated === undefined) {
    return <>Loading ...</>;
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      {showConfirmDialog && (
        <SignoutConfirm onConfirm={handleConfirmSignOut} onCancel={handleCancelSignOut} />
      )}
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg pb-9">
        <div className="p-6">
          <div className="flex flex-col items-center mb-5">
            <div className="w-42 h-42 rounded-full border-4 border-gray-300 relative">
              <img src={profileData?.imageUrl} className='w-40 h-40 rounded-full'/>
              <button
                className="block w-full h-full bg-transparent border-none"
                onClick={() => {
                  window.location.href = '/edit-profile';
                }}
              >
                <i className="fas fa-pencil-alt absolute right-1 bottom-8 transform translate-x-1/4 translate-y-1/4 edit-icon bg-gray-300 rounded-full p-2"></i>
              </button>
            </div>
            <h1 className="text-lg font-semibold mt-3">{name}</h1>
            <p className="text-gray-600 text-sm">{email}</p>
          </div>
          <div className="border-t border-gray-300 w-full"></div>
          <div className="flex flex-col space-y-2">
            <MenuRow
              title="Order History"
              iconClass="fas fa-shopping-cart"
              removeTopMargin
              addBottomBorder
              fullWidth
              onClick={() => handleMenuItemClick('/order-history')}
            />
            <MenuRow
              title="Payment Method"
              iconClass="fas fa-credit-card"
              addBottomBorder
              fullWidth
              onClick={() => handleMenuItemClick('/payment-method')}
            />
            <MenuRow
              title="My Address"
              iconClass="fas fa-map-marker-alt"
              addBottomBorder
              fullWidth
              onClick={() => handleMenuItemClick('/my-address')}
            />
            <MenuRow
              title="My Promocodes"
              iconClass="fas fa-tags"
              addBottomBorder
              fullWidth
              onClick={() => handleMenuItemClick('/my-promocodes')}
            />
          </div>
          <div className="flex items-center h-12 py-2 border-b border-gray-300 w-full">
  <i className="fas fa-sign-out-alt text-black-500 mr-2"></i>
  <button
    className="text-base font-normal text-left ml-3"
    onClick={handleSignOut}
    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0' }}
  >
    Sign Out
  </button>
  <i className="fas fa-edit text-gray-600 hover:text-gray-800 cursor-pointer absolute bottom-0 right-0 m-2"></i>
</div>
        </div>
      </div>
    </div>
  );
  
};

export default Account;
