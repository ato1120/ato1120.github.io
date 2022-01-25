import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" >
                <Container>
                    <Nav className='flex-column'>
                        <Navbar.Brand href="#home">
                            <i className='fas fa-home'></i>
                            <h4>CV / Bio</h4>
                        </Navbar.Brand>
                        <Navbar.Brand href="#research">
                            <i className='fas fa-user'></i>
                            <h4>Research</h4>
                        </Navbar.Brand>
                        <Navbar.Brand href="#researchProjects">
                            <i className='fas fa-th'></i>
                            <h4>Research Projects</h4>
                        </Navbar.Brand>
                        <Navbar.Brand href="#contact" className='inline-block'>
                            <i className='fas fa-envelope'></i>
                            <h4>Contact</h4>
                        </Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
