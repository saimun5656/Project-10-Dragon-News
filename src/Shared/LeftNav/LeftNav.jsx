import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import Activelink from '../Activelink/Activelink';

const LeftNav = () => {
    const [categories , setCategories]=useState(null)
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    console.log(categories);
    return (
        <div>
           <h2>All category</h2>
           <div>
           {
            categories?categories.map(ct=><p key={ct.id} >
                <Activelink  to={`/category/${ct.id}`} >{ct.name}</Activelink>
            </p>):''
           }
           </div>
        </div>
    );
};

export default LeftNav;