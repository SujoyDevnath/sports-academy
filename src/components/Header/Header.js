import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to={'/home'} style={{ color: '#4EC743', fontWeight: 'bold', fontSize: '25px', cursor: "pointer" }}>Sports academy</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                        <Nav.Link as={Link} to={'/courses'}>Courses</Nav.Link>
                        <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                        <Nav.Link as={Link} to={'/contact'}>Contact us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;