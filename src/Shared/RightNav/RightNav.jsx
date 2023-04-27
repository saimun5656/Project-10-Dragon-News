import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <Button className='w-100 mb-3' variant="outline-primary"><FaGoogle className='me-2' />  Login with Google</Button>
            <Button className='w-100' variant="outline-secondary"><FaGithub className='me-2' />  Login with GitHub</Button>
            <div className='my-4'>
                <ListGroup >
                    <h3>Find us on</h3>
                    <ListGroup.Item><FaFacebook/> <a className='text-decoration-none text-secondary  fw-semibold' href=""> Facebook</a></ListGroup.Item>
                    <ListGroup.Item><FaTwitter/>  <a className='text-decoration-none  text-secondary fw-semibold ' href=""> Twitter</a></ListGroup.Item>
                    <ListGroup.Item><FaInstagram/><a className='text-decoration-none  text-secondary fw-semibold ' href=""> Instagram</a></ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='mt-4 position-relative '>
                <img className='w-100'src={bg} alt="" />
                <div className='position-absolute top-0 text-white mx-5 my-5 text-center'>
                   <h2>Create an Amazing Newspaper</h2> 
                   <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                   <button className='btn btn-danger p-3'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;