import React, { useContext } from 'react';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user,loader}=useContext(AuthContext);
    if(loader){
        return <h1>Loading............</h1>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>   
};

export default PrivateRoute;