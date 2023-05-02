import React from 'react';
import Navigationbar from '../Shared/Navigationbar/Navigationbar';
import { Outlet } from 'react-router-dom';

const LoginLoayout = () => {
    return (
        <div style={{backgroundColor:'#f1f0f0',
                     height:'100vh'}}>
            <Navigationbar></Navigationbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLoayout;