import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import icon from '../../images/icon.png'
import './Header.css'
import { faAddressCard, faBlog, faHome, faTasks, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <Container>
            <Navbar bg="transparent" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        src={icon}
                        height="45"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="mr-3 nav-link" exact activeClassName="active" to="/" ><FontAwesomeIcon icon={faHome} size="1x" /> Home</NavLink>
                        <NavLink className="mr-3 nav-link" exact activeClassName="active" to="/about" ><FontAwesomeIcon icon={faUserTie} size="1x" />  About</NavLink>
                        <NavLink className="mr-3 nav-link" exact activeClassName="active" to="/works" ><FontAwesomeIcon icon={faTasks} size="1x" /> Works</NavLink>
                        <NavLink className="mr-3 nav-link" exact activeClassName="active" to="/blog" ><FontAwesomeIcon icon={faBlog} size="1x" /> Blog</NavLink>
                        <NavLink className="mr-3 nav-link" exact activeClassName="active" to="/contact" ><FontAwesomeIcon icon={faAddressCard} size="1x" /> Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;