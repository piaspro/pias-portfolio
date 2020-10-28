import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import me from '../../images/pias.png'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col className="d-flex align-items-center justify-content-center text mb-3" sm={6}>
                    <div className="aboutMe">
                        <h2>Hello,</h2>
                        <h2>I'm <span className="colorText">Golam Rahman</span></h2>
                        <div className="about">
                            <h1>I'm a</h1>
                                <Typewriter
                                    options={{
                                        strings: ["Web Developer", "Web Designer", "Photographer"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                        </div>
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