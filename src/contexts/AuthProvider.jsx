import { createContext, useState } from "react";
import { handleRegisterService, handleLoginService, handleLogoutService } from "../components/services/AuthenticationService";


export const AuthContext = createContext();


export const AuthProvider = (props) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const handleRegister = async (firstName, lastName, email, password) => {
    return await handleRegisterService(firstName, lastName, email, password);
  };

  const handleLogin = async (email, password, rememberMe) => {
    let result = await handleLoginService(email, password, rememberMe);

    setIsAuthenticated(result);

    return result;
  };

  const handleLogout = async () => {
    setIsAuthenticated(false);
    return await handleLogoutService();
  };



  return (
    <AuthContext.Provider value={{handleRegister, handleLogin, handleLogout, isAuthenticated}}>
      {props.children}
    </AuthContext.Provider>
  );
};
