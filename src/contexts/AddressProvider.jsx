
import React, { createContext, useEffect, useState } from 'react';


const addressUrl = 'https://manero-backend-group-3.azurewebsites.net/v1/api/address';


const AddressContext = createContext();


const AddressProvider = (props) => {
  const [addressData, setAddressData] = useState(null);


  const getAddress = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const result = await fetch(addressUrl + "es", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await result.json();
      setAddressData(data);
    } catch (error) {
      console.error('Error fetching address data:', error);
    }
  };


  const updateAddress = async (newAddress) => {
    const token = localStorage.getItem('accessToken');


    const result = await fetch(addressUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newAddress),
    });


    return result.status === 204;
  };


  useEffect(() => {
    getAddress();
  }, []);


  return (
    <AddressContext.Provider value={{ getAddress, addressData, updateAddress }}>
      {props.children}
    </AddressContext.Provider>
  );
};


export { AddressContext, AddressProvider };


