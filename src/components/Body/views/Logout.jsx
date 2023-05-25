import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Logout = () => {

    const authContext = useContext(AuthContext);

    const navigate = useNavigate();

    const { handleLogout } = authContext;

    handleLogout();

    navigate('/home');
}

export default Logout