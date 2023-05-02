import React from 'react';
import './NewsCard.css'
import { Link } from 'react-router-dom';
import {FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar} from 'react-icons/fa'
import Rating from 'react-rating';
import EditorsInslight from './EditorsInslight/EditorsInslight';
const NewsCard = ({news}) => {
    const{title,author,image_url,thumbnail_url,details,rating,total_view,_id}=news
    const{name,published_date,img}=author
    // console.log(author);
    return (
        <div className=' border mb-3 rounded'>
          <div className='bg-secondary bg-opacity-25'>
          <div className='card-title d-flex gap-3 align-items-center p-3'>
            <img className='auther-img' src={img} alt="" />
            <div className='flex-grow-1'>
                <h4>{name}</h4>
                <p>{published_date}</p>
            </div>
             <div>
              <FaRegBookmark className='fs-2'></FaRegBookmark>
              <FaShareAlt className='fs-2'></FaShareAlt>
            </div>
          </div>  
          </div>
          <div className='card-body p-3'>
             <h3>{title}</h3>
             <img className='w-100' src={image_url} alt="" />
             <p >\
              {details.length< 250?<>{details}</>:
               <>{details.slice(0,250)}...</>
              }
             </p>
             <Link to={`/news-details/${_id}`}>Read More</Link>
             <hr />
          </div>
          <div className='card-footer d-flex px-3 justify-content-between'>
              <p><Rating
               placeholderRating={rating.number}
               placeholderSymbol={<FaStar/>}
               emptySymbol={<FaRegStar/>}
               fullSymbol={<FaStar/>}
               readonly
               >    
                </Rating> {}</p>
              <p><FaEye/> {total_view}</p>
          </div>
          
        </div>
    );
};

export default NewsCard;