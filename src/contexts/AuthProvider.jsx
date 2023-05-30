import { createContext } from "react";
import { handleRegisterService, handleLoginService, handleLogoutService, CheckJWTToken } from "../components/services/AuthenticationService";


export const AuthContext = createContext();


export const AuthProvider = (props) => {

  const handleRegister = async (firstName, lastName, email, password) => {
    return await handleRegisterService(firstName, lastName, email, password);
  };

  const handleLogin = async (email, password, rememberMe) => {
    let result = await handleLoginService(email, password, rememberMe);

    return result;
  };

  const handleLogout = async () => {
    return await handleLogoutService();
  };

  const isAuthenticated = async () => {
    return await CheckJWTToken();
  }



  return (
    <AuthContext.Provider value={{handleRegister, handleLogin, handleLogout, isAuthenticated}}>
      {props.children}
    </AuthContext.Provider>
  );
};
