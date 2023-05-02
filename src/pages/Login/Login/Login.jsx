import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../../Shared/AuthProvider/AuthProvider';

const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname||'/'
    console.log(location,from);
    const [error,setError]=useState("");
    const [success,setSuccess]=useState("");
    const {loginWithEmail}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
    setSuccess('')
    setError('')
    e.preventDefault();
    const form =e.target;
    const email=form.email.value;
    const password=form.password.value;
    loginWithEmail(email,password)
    .then(res=>{
        console.log(res.user);
        setSuccess('User Login successfull');
        navigate(from)
    })
    .catch(error=>{
      console.log(error);
      setError(error.message)
    })
  }
    return (
      <Container  className='d-flex justify-content-center align-items-center bg-white p-5 w-75 mt-5'>
      
      <Form onSubmit={handleSubmit}>
      <h2 className='mb-4'>Login Your Account</h2> <hr />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' required />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' required/>
      </Form.Group>
     
      <Button variant="dark" className='w-100' type="submit">
        Login
      </Button>
       <p className='text-center'>Dont’t Have An Account ? <Link className='text-danger' to='/reg'>Register</Link></p>

       <h1>{success}</h1>
        <h1>{error}</h1>
    </Form>
        
      </Container>
    );
};

export default Login;