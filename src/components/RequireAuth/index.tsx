import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import React from 'react'

const RequireAuth = ({children}: {children:JSX.Element})=> {
    const auth = React.useContext(AuthContext)
    const location = useLocation()

    if(!auth.user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    return children;
};

export default RequireAuth;