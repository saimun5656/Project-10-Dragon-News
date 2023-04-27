import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Shared/LeftNav/LeftNav';
import RightNav from '../Shared/RightNav/RightNav';
import News from '../pages/News/News';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav>

                        </LeftNav>
                    </Col>
                    <Col lg={6}>
                        <h2>Main content comming</h2>
                        <News></News>
                    </Col>
                    <Col lg={3}>
                        <RightNav>
                            
                        </RightNav>
                    </Col>
                </Row>
            </Container>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;