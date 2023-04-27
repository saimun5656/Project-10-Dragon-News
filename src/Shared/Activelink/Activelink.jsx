import React from 'react';
import { NavLink } from 'react-router-dom';
import './Activelink.css'

const Activelink = ({to,children}) => {
    return (
        <div className=''>
            <NavLink  className={({ isActive}) =>isActive?"bg-secondary text-dark px-4 py-2 rounded bg-opacity-25 text-decoration-none width": "text-decoration-none px-4"} to={to}>{children}</NavLink>
        </div>
    );
};

export default Activelink;