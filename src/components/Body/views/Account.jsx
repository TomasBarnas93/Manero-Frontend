import {React, useContext, useEffect, useState} from 'react'
import { AuthContext } from '../../../contexts/AuthProvider'
import { useNavigate } from "react-router-dom";

const Account = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { isAuthenticated } = authContext;

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    isAuthenticated().then((result) => {
      setAuthenticated(result);
    });
    
  }, []);



  if(authenticated){
    return(<>logged in</>)
  }
  else{
    return(<>not logged in</>)
  }


}

export default Account