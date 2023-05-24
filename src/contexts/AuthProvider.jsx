import { createContext } from "react";
import { handleRegisterService, handleLoginService } from "../components/services/AuthenticationService";


export const AuthContext = createContext();


export const AuthProvider = (props) => {

  const handleRegister = async (firstName, lastName, email, password) => {
    await handleRegisterService(firstName, lastName, email, password);
  };

  const handleLogin = async (email, password, rememberMe) => {
    await handleLoginService(email, password, rememberMe);
  };



  return (
    <AuthContext.Provider value={{handleRegister, handleLogin}}>
      {props.children}
    </AuthContext.Provider>
  );
};
