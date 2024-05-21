import { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children }) => {
    const [user] = useContext(UserContext);

    return user.email ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;