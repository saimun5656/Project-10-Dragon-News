import React from 'react';
import { Card, Col ,Row} from 'react-bootstrap';

const EditorsInslight = () => {
    return (
        <div className='mt-3'>
            <h2>Editors Insight</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
      
        <Col>
          <div>
           <img className='w-100 mb-2' src="/src/assets/2.png" alt="" />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                
              </Card.Text>
            </Card.Body>
            </div>
        </Col>
        <Col>
          <div>
           <img className='w-100 mb-2' src="/src/assets/3.png" alt="" />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                
              </Card.Text>
            </Card.Body>
            </div>
        </Col>
        <Col>
          <div>
           <img className='w-100 mb-2' src="/src/assets/1.png" alt="" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                
              </Card.Text>
            </Card.Body>
            </div>
        </Col>
        
    
    </Row>
        </div>
    );
};

export default EditorsInslight;