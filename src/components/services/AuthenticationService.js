const loginUrl = 'https://manero-backend-group-3.azurewebsites.net/v1/api/Auth/Login';
const registerUrl = 'https://manero-backend-group-3.azurewebsites.net/v1/api/Auth/Register';
const authUrl = 'https://manero-backend-group-3.azurewebsites.net/v1/api/Auth/validatetoken';
//const apiKey = "";

export const handleRegisterService = async (firstName, lastName, email, password) => {

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    const result = await fetch(registerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)

    })
    if (result.status === 201) {
        return true;
    }
    
    
    return false;
    

} 

export const handleLoginService = async (email, password, rememberMe) => {
  const user = {
    email: email,
    password: password,
    rememberMe: rememberMe ? true : false,
  };


  try {
    const result = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (result.status === 200) {
      const accessToken = await result.text();
      localStorage.setItem('accessToken', accessToken);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleLogoutService = async () => {
  localStorage.removeItem('accessToken');
};

export const CheckJWTToken = async () => {

  const accessToken = localStorage.getItem('accessToken');
  let result = await fetch(authUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((response) => {
    return response.ok;
  });

  return result;

};

