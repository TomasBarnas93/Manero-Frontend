import React, { createContext, useEffect, useState } from 'react';

const userUrl = 'https://manero-backend-group-3.azurewebsites.net/v1/api/User/profile';

const ProfileContext = createContext();

const ProfileProvider = (props) => {
  const [profileData, setProfileData] = useState(null);

  const getProfile = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const result = await fetch(userUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await result.json();
      setProfileData(data);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  const updateProfile = async (firstName, lastName,email, phoneNumber,location, imageUrl) => {
    const token = localStorage.getItem('accessToken');
    const user = {
      firstName,
        lastName,
      email,
      phoneNumber,
      location,
      imageUrl,
     
    };

    // Remove null values from the user object
    Object.keys(user).forEach((key) => {
      if (user[key] === null) {
        delete user[key];
      }
    });

    const result = await fetch(userUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });
    console.log(user)
    return result.status === 204;
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ getProfile, profileData , updateProfile}}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
