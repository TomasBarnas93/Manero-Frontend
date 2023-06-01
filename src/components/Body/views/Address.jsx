import React, { useContext, useEffect } from 'react';
import AddressRow from '../components/AddressRow';
import { AddressContext } from '../../../contexts/AddressProvider';
import { useNavigate } from 'react-router-dom';

const Address = () => {
  const { addressData, getAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  const handleAddAddress = () => {
    navigate('/add-address');
  };

  const handleGoToAccount = () => {
    navigate('/account');
  };

  useEffect(() => {
    getAddress(); // Fetch the address data on component mount and whenever there's a change in addressData
  }, [getAddress, addressData]);

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
            <div className="mx-4">
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
                  onClick={() => navigate('/add-address')}
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-center mt-8">
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
