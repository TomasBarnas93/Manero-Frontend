const userUrl = 'https://manero-backend-group-3.azurewebsites.net/v1/api/User/profile';

export const getProfile = async () => {
  const token = localStorage.getItem('accessToken');
  const result = await fetch(userUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await result.json();
  return data;
};

export const updateProfile = async (firstName, lastName, email, phoneNumber, location, imageUrl) => {
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
    console.log(result)
    console.log(user)
    return result.status === 204;
  };
  
