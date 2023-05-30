import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Logout = () => {

    const authContext = useContext(AuthContext);

    const navigate = useNavigate();

    const { handleLogout } = authContext;


    useEffect(() => {
        handleLogout();
    navigate('/account');
    }
    , []);

}

export default Logout