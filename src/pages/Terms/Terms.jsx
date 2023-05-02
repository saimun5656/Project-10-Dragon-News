import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h1>Terms and conditions</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tempora, ducimus ipsum ipsa exercitationem doloremque dolor cum labore, asperiores perferendis placeat odio minus quasi quaerat eveniet porro consequatur provident voluptas.</p>
            <p>Back to <Link to='/reg'>Register</Link></p>
        </Container>
    );
};

export default Terms;