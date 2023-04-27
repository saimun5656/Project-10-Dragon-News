import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import { Container, NavDropdown } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
        <Navbar collapseOnSelect expand="lg" bg="" variant="light">
            <Container>  
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className='fw-semibold' href="#features">Home</Nav.Link>
                        <Nav.Link className='fw-semibold' href="#pricing">About</Nav.Link>
                        <Nav.Link className='fw-semibold' href="#">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Profile</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Container>
  );
};

export default Header;