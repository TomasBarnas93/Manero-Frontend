const loginUrl = 'https://manero-backend-group-3.azurewebsites.net/v1/api/Auth/Login';
const registerUrl = 'https://manero-backend-group-3.azurewebsites.net/v1/api/Auth/Register';
//const apiKey = "";

const handleRegisterService = async (firstName, lastName, email, password) => {

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
        const data = await result.json();
        console.log(data);
        return true;
    }
    
    
    return false;
    

} 

const handleLoginService = async (email, password, rememberMe) => {
  const user = {
    email: email,
    password: password,
    rememberMe: rememberMe ? true : false,
  };

  console.log(user);

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

const handleLogoutService = async () => {
  localStorage.removeItem('accessToken');
};



export { handleRegisterService, handleLoginService, handleLogoutService };