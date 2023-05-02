import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import { Container,} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Navigationbar from '../Navigationbar/Navigationbar';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
 
  return (
    <Container>
        <div className='text-center'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format('dddd, MMMM d YYYY')}</p>
        </div>
        <div className='bg-secondary bg-opacity-25 p-2 mb-4 d-flex '>
            <button className='btn btn-danger'>Latest</button>
            <Marquee className='fw-bold'>
                I can be a React component, multiple React components, or just some text.
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
        <Navigationbar></Navigationbar>
    </Container>
  );
};

export default Header;