import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Header from '../Header/Header';
import me from '../../images/pias.png';
import './About.css'


const About = () => {
    return (
        <div className="about">
            <Header></Header>
            <Container className="mt-5">
                <Row>
                    <Col className="mb-3">
                        <div className="d-flex justify-content-center portfolio-img">
                            <img height="300px" src={me} alt="..." />
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center mb-3">
                        <div className="aboutMe-text">
                            <h3>Hello,</h3>
                            <h3>I'm <span className="colorText">Golam Rahman</span></h3>
                            <h5>I'm a Simple, Honest, Soft Spoken & Moderate Educated. A Hardworking Person, Passionate about new technology.
                                Always interested in learning new things. </h5> <br />
                            <Button variant="outline-danger" className="text-white">Download CV</Button>
                        </div>
                    </Col>
                </Row>
                <Row className="py-5">
                    <Col sm={4}>
                        <div className="box p-3">
                            <h4>Education</h4>
                            <h5>Wev Development: <span className="color">Programming Hero.com (2020)</span></h5>
                            <h5>H.S.C: <span className="color">Chandpur Govt.College (2010)</span></h5>
                            <h5>S.S.C: <span className="color">Hasan Ali High School (2008)</span></h5>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="box p-3">
                            <h4>Skills</h4>
                            <h5>Web: <span className="color"> Html, Css, Bootstrap, Javascript, ReactJs,  REST Api, Git, Firebase</span></h5>
                            <h5>Database: <span className="color">Nodejs, Express, MongoDB</span></h5>
                            <h5>Familiar With: <span className="color">AngularJs,TypeScript, GraphQL</span></h5>
                            <h5>Tools: <span className="color">VS Code, Github, Chrome Dev</span></h5>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="box p-3">
                            <h4>Personal Info</h4>
                            <h5>Name: <span className="color">Golam Rahman</span></h5>
                            <h5>DOB: <span className="color">22-jun-1992</span></h5>
                            <h5>Nationality: <span className="color">Bangladeshi</span></h5>
                            <h5>Blood Group: <span className="color">B+</span></h5>
                        </div></Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;