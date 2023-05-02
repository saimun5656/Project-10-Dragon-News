import React from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import NewsCard from '../../Components/NewsCard/NewsCard';

const News = () => {
    const {id}=useParams()
    const newses=useLoaderData();
    
    return (
        <div>
            {
                id?<h1>Total news :{newses.length}</h1>:<></>
            }
            
            {
                newses.map(ns=><NewsCard key={ns._id} news={ns}></NewsCard>)
            }
        </div>
    );
};

export default News;