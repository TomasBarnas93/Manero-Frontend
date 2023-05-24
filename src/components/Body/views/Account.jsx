import {React, useContext} from 'react'
import Login from './Login'
import Register from './Register'
import { AuthContext } from '../../../contexts/AuthProvider'
import Home from './Home'
import { useNavigate } from "react-router-dom";

const Account = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { isAuthenticated } = authContext;

  if(!isAuthenticated){

    navigate('/login');
  }
  else{
    return (
      // Here you place account info
      <Home />
    )
  }
}

export default Account