import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import Button from 'react-bootstrap/Button'
import me from '../../images/pias large.jpg'
import './AboutMe.css'
import { Link } from 'react-router-dom';

const AboutMe = () => {
    const resume ="https://drive.google.com/u/1/uc?id=1jYx6BIMUPebZH-RikyOvRtUMiNc9oA1O&export=download"
    return (
        <Container className="my-5">
            <Row>
                <Col className="d-flex align-items-center justify-content-center text mb-3" sm={6}>
                    <div className="aboutMe">
                        <h2>Hello,</h2>
                        <h2>I'm <span className="colorText">Golam Rahman</span></h2>
                        <div className="about">
                                <Typewriter
                                    options={{
                                        strings: ["Web Developer", "Web Designer","Programmer", "Photographer"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                        </div>
                        <br/>
                        <a href={resume}>
                                <Button variant="outline-primary" className="text-white">Get Resume</Button>
                            </a>
                            <Link to="/contact" ><Button variant="outline-primary" className="text-white mx-2">Hire Me</Button></Link>
                    </div>
                </Col>
                <Col className="mb-3 d-flex align-items-center justify-content-center" sm={6}>
                    <div className="portfolio">
                        <img height="300px" src={me} alt="..." />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;