import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navigationbar = () => {
    const{user,logOut}=useContext(AuthContext)
    return (
        <Container>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="" variant="light">
            <Container>  
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className='fw-semibold' href="#features"><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link className='fw-semibold' href="#pricing">About</Nav.Link>
                        <Nav.Link className='fw-semibold' href="#">Career</Nav.Link>
                    </Nav>
                    <Nav>
                         <p className='me-4'>
                            {
                                user?.displayName?`${user.displayName}`:'user'
                            }
                         </p>
                         <img style={{width:'50px',
                                      height:'50px',
                                      borderRadius:'50%'}} src={user?user.photoURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwsS4T3H_KT8Iy9ub5O9Z9A83UqIWnOJccgtuYFDs3-wHDuUULURKikn7U3zW_1uV77s&usqp=CAU'} alt="" />

                         {
                            user?<button onClick={logOut}>logOut</button>:<Link className='bg-secondary px-4 py-1 my-0 text-white rounded' to='/login'>Login</Link>
                         }
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Container>
    );
};

export default Navigationbar;