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
    }, [handleLogout, navigate]);

    return null; // Or you can return any JSX you need for the Logout component
}

export default Logout;
