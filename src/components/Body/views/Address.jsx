import React, { useContext } from 'react';
import AddressRow from '../components/AddressRow';
import { AddressContext } from '../../../contexts/AddressProvider';
import { useNavigate } from 'react-router-dom';

const Address = () => {
  const { addressData } = useContext(AddressContext);
  const navigate = useNavigate();

  const handleAddAddress = () => {
    navigate('/edit-profile');
  };

  const handleGoToAccount = () => {
    navigate('/account');
  };

  return (
    <div className="flex justify-center mx-4">
      <div className="card w-full sm:max-w-md">
        <div className="card-header flex items-center justify-between">
          <button onClick={handleGoToAccount} className="focus:outline-none">
            <i className="fas fa-chevron-left text-gray-500 text-xl"></i>
          </button>
          <h3 className="card-title text-center mb-10 mt-5 mx-auto">My Address</h3>
        </div>
        <div className="card-body">
          {addressData && (
            <div className="mx-4"> {/* Added margin to the container */}
            {addressData.map((address) => (
  <AddressRow
    key={address.id}
    title={address.title}
    street={address.street}
    postalCode={address.postalCode}
    city={address.city}
    iconClass="fas fa-map-marker-alt"
    addBottomBorder
    fullWidth
    onClick={() => navigate('/edit-profile')}
  />
))}

            </div>
          )}
        </div>
        <div className="flex items-center justify-center mt-5">
          <button onClick={handleAddAddress} className="focus:outline-none">
            <i className="fas fa-plus-circle text-gray-500 text-2xl"></i>
          </button>
          <p className="text-gray-500 text-sm ml-2">Add a new address</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
