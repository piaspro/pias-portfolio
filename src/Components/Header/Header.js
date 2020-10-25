import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Container>
            <Navbar bg="transparent"  expand="lg">
                <Navbar.Brand className="id-brand">Pias Rahman</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="mr-3 nav-link" exact activeClassName="active"  to="/" >Home</NavLink>
                        <NavLink className="mr-3 nav-link" exact activeClassName="active"  to="/about" >About</NavLink>
                        <NavLink className="mr-3 nav-link" exact activeClassName="active"  to="/works" >Works</NavLink>
                        <NavLink className="mr-3 nav-link" exact activeClassName="active"  to="/blog" >Blog</NavLink>
                        <NavLink className="mr-3 nav-link" exact activeClassName="active"  to="/contact" >Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;