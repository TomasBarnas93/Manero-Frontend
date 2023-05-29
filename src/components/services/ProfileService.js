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
  
  export const updateProfile = async (props) => {
    const token = localStorage.getItem('accessToken');
    const user = {
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      phoneNumber: props.phoneNumber,
      location: props.location,
      imageUrl: props.imageUrl,
    };
  
    const result = await fetch(userUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });
  
    return result.status === 204;
  };
  