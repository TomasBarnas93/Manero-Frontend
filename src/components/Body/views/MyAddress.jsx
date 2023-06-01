import React, { useState, useContext } from 'react';
import { AddressContext } from '../../../contexts/AddressProvider';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../misc/InputBox';

const MyAddress = () => {
  const { addressData, updateAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');

  const handleAddressSubmit = async (e) => {
    e.preventDefault();

    const newAddress = {
      title,
      firstName,
      lastName,
      street,
      postalCode,
      city,
    };

    const success = await updateAddress(newAddress);
    if (success) {
      // Address updated successfully
      // Perform any additional actions or show a success message
      navigate('/my-address');
    } else {
      // Address update failed
      // Handle the error or show an error message
    }
  };
  console.log(addressData);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-lg w-full bg-white rounded-lg shadow-lg p-8 mt-40'>
        <div className='text-md text-center mt-32'>
          <button
            className='absolute h-8 w-8 flex items-center justify-center rounded-full'
            onClick={() => navigate('/account')}
          >
            <i className='fas fa-chevron-left text-gray-500 cursor-pointer'></i>
          </button>
          Add Address
        </div>

        <div className='relative h-8 mt-5 mb-5'>
          <div className='absolute left-1/2 top-0 bg-black w-[1px] h-full'></div>
        </div>

        <form onSubmit={handleAddressSubmit}>
          <InputBox
            classes='w-full'
            label='Title'
            type='text'
            id='title'
            name='title'
            placeholder='Enter your title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <InputBox
            classes='w-full'
            label='First Name'
            type='text'
            id='firstName'
            name='firstName'
            placeholder='Enter your first name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <InputBox
            classes='w-full'
            label='Last Name'
            type='text'
            id='lastName'
            name='lastName'
            placeholder='Enter your last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <InputBox
            classes='w-full'
            label='Street'
            type='text'
            id='street'
            name='street'
            placeholder='Enter your street'
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />

          <InputBox
            classes='w-full'
            label='Postal Code'
            type='text'
            id='postalCode'
            name='postalCode'
            placeholder='Enter your postal code'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />

          <InputBox
            classes='w-full'
            label='City'
            type='text'
            id='city'
            name='city'
            placeholder='Enter your city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <button
            className='bg-black hover:bg-blue-600 text-white w-full py-2 rounded-3xl mb-20 mt-2'
            type='submit' onClick={() => navigate('/my-address')}
          
          >
            Add Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyAddress;
