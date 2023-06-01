import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddressRow = ({ title, iconClass, addBottomBorder, fullWidth, street, postalCode }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate('/edit-profile');
      }}
      className={`flex items-center justify-between h-15 py-2 ${addBottomBorder ? 'border-b' : ''} w-full bg-transparent`}
    >
      <div className="flex items-center">
        <i className={`${iconClass} text-gray-500 w-6 mr-2`} />
        <div>
          <p className="text-base font-normal text-left">{title}</p>
          <p className="text-sm text-gray-500 text-left">{postalCode}</p>
          <p className="text-sm text-gray-500 text-left">{street}</p>
        </div>
      </div>
      <i className="fas fa-pencil-alt text-gray-500" />
    </button>
  );
};

export default AddressRow;
