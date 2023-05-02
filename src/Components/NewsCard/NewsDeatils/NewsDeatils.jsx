import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInslight from '../EditorsInslight/EditorsInslight';
const NewsDeatils = () => {
    const news=useLoaderData()
    const{title, image_url, details, category_id}=news
    return (
        <div>
          <div>
           <Card className='p-4'>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Button variant="danger"><Link to={`/category/${category_id}`}><FaArrowLeft/> All news in this category</Link></Button>
      </Card.Body>
    </Card>
        </div>

        <EditorsInslight ></EditorsInslight>
        </div>
    );
};

export default NewsDeatils;