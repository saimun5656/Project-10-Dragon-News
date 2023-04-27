import React, { useEffect, useState } from 'react';

const LeftNav = () => {
    const [categories , setCategories]=useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
           <h2>All category</h2>
        </div>
    );
};

export default LeftNav;