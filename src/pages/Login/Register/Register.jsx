import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Shared/AuthProvider/AuthProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
const Register = () => {
const [accepted,setAccepted]=useState(false) 
const [error,setError]=useState("")
const [success,setSuccess]=useState("")
const{createUser}=useContext(AuthContext);
const handleCheck=(event)=>{
   setAccepted(event.target.checked);
}
const handleSubmit=(e)=>{
      e.preventDefault();
      const form =e.target;
      const name=form.name.value;
      const url=form.url.value
      const email=form.email.value;
      const password=form.password.value;
      console.log(name,email,password);
      createUser(email,password)
      .then(res=>{
        sendEmailVerification(res.user)
        .then(res=>alert('a vaeification mail sended to your Email please varify your email'))
        .catch();
        updateProfile(res.user,{displayName:name,
                                photoURL:url,
                                })

        console.log(res.user);
        setSuccess('User register successfull');
      })
      .catch(error=>{
        console.log(error);
        setError(error.message)
      })
}
    return (
        <Container  className='d-flex justify-content-center align-items-center bg-white p-5 w-75 mt-5'>
      
      <Form onSubmit={handleSubmit}>
      <h2 className='mb-5'>Create Your Account</h2> <hr />
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name='name' required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Photo Url</Form.Label>
        <Form.Control type="text" placeholder="Url" name='url'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' required />
      </Form.Group>

      <Form.Group onClick={handleCheck} className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={<>Accepted <Link to='/terms'>terms and condition</Link></>}/>
      </Form.Group>

      <Button variant="dark" className='w-100' type="submit" disabled={!accepted}>
        Register
      </Button>
       <p className='text-center'>Already Have An Account ? <Link to='/login'>Login</Link></p>
       <p className='text-success'>{success}</p>
    </Form>
        
      </Container>
    );
};

export default Register;