import React from 'react';
import { useLocation } from 'react-router-dom';

const News = () => {
    const location=useLocation()
    const id=location.pathname.split('/')
    return (
        <div>
            <h1>News {id[1]} {id[2]}</h1>
        </div>
    );
};

export default News;