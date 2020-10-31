import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Header from '../Header/Header';
import img1 from '../../images/SVG icons/html.svg';
import img2 from '../../images/SVG icons/css.svg';
import img3 from '../../images/SVG icons/javascript-programming-language.svg';
import img4 from '../../images/SVG icons/bootstrap-4.svg';
import img5 from '../../images/SVG icons/sass.svg';
import img6 from '../../images/SVG icons/react-js.svg';
import img7 from '../../images/SVG icons/redux.svg';
import img8 from '../../images/SVG icons/node-js.svg';
import img9 from '../../images/SVG icons/mongodb.svg';
import img10 from '../../images/SVG icons/expressjs.svg';
import img11 from '../../images/SVG icons/angular.svg';
import img12 from '../../images/SVG icons/graphql.svg';
import img13 from '../../images/SVG icons/google-firebase.svg';
import img14 from '../../images/SVG icons/git.svg';
import img15 from '../../images/SVG icons/github.svg';
import img16 from '../../images/SVG icons/typescript-programming-language.svg';
import img17 from '../../images/SVG icons/wordpress.svg';
import img18 from '../../images/SVG icons/visual-studio-code.svg';
import img19 from '../../images/SVG icons/atom-editor.svg';
import img20 from '../../images/SVG icons/windows.svg';
import img21 from '../../images/SVG icons/apple.svg';
import img22 from '../../images/SVG icons/adobe-lightroom.svg';
import img23 from '../../images/SVG icons/adobe-illustrator.svg';
import img24 from '../../images/SVG icons/adobe-photoshop.svg';
import img25 from '../../images/SVG icons/Terminal.png';
import img26 from '../../images/SVG icons/heroku.svg';
import img27 from '../../images/SVG icons/material-ui.svg';
import img28 from '../../images/SVG icons/React-Router-01.svg';
import me from '../../images/pias.png';
import './About.css'


const About = () => {
    const resume = "https://drive.google.com/u/1/uc?id=1jYx6BIMUPebZH-RikyOvRtUMiNc9oA1O&export=download"

    return (
        <div className="about">
            <Header></Header>
            <Container className="mt-5">
                <Row>
                    <Col className="mb-3" sm={6}>
                        <div className="d-flex justify-content-center portfolio-img">
                            <img height="300px" src={me} alt="..." />
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center mb-3" sm={6}>
                        <div className="aboutMe-text">
                            <h3>Hello,</h3>
                            <h3>I'm <span className="colorText">Golam Rahman</span></h3>
                            <h5 className="color">I'm a Simple, Honest, Soft Spoken & Moderate Educated. A Hardworking Person, Passionate about new technology.
                                Always interested in learning new things. </h5> <br />
                            <a href={resume}>
                                <Button variant="outline-primary" className="text-white">Get Resume</Button>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="py-5">
                    <Col className="box p-3">
                        <h3>Skills</h3>
                        <h4>Expertise:</h4>
                        <Row className="d-flex align-items-center">
                            <div className="p-3 text-center">
                                <img height="30px" src={img1} alt="..." />
                                <h6>Html5</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img2} alt="..." />
                                <h6>Css3</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img3} alt="..." />
                                <h6>Javascript</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img4} alt="..." />
                                <h6>Bootstrap</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img27} alt="..." />
                                <h6>Metarial UI</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img6} alt="..." />
                                <h6>ReactJs</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img28} alt="..." />
                                <h6>React Router</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img8} alt="..." />
                                <h6>Nodejs</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img9} alt="..." />
                                <h6>MongoDB</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="25px" src={img10} alt="..." />
                                <h6>Express</h6>
                            </div>
                        </Row>
                        <h4>Familiar With:</h4>
                        <Row className="d-flex align-items-center">
                            <div className="p-3 text-center">
                                <img height="30px" src={img11} alt="..." />
                                <h6>AngularJS</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img5} alt="..." />
                                <h6>Sass</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img7} alt="..." />
                                <h6>Redux</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img12} alt="..." />
                                <h6>GraphQL</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img16} alt="..." />
                                <h6>TypeScript</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img17} alt="..." />
                                <h6>Wordpress</h6>
                            </div>
                        </Row>
                        <h4>Version Management:</h4>
                        <Row className="d-flex align-items-center">
                            <div className="p-3 text-center">
                                <img height="30px" src={img14} alt="..." />
                                <h6>Git</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img15} alt="..." />
                                <h6>Github</h6>
                            </div>
                        </Row>
                        <h4>Other Tools:</h4>
                        <Row className="d-flex align-items-center">
                            <div className="p-3 text-center">
                                <img height="30px" src={img18} alt="..." />
                                <h6>Visual Studio Code</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="35px" src={img19} alt="..." />
                                <h6>Atom Editor</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="35px" src={img25} alt="..." />
                                <h6>Terminal</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="35px" src={img26} alt="..." />
                                <h6>Heroku</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="35px" src={img13} alt="..." />
                                <h6>Firebase</h6>
                            </div>
                        </Row>
                        <h4>Software:</h4>
                        <Row className="d-flex align-items-center">
                            <div className="p-3 text-center">
                                <img height="40px" src={img22} alt="..." />
                                <h6>Adobe Lightroom</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img23} alt="..." />
                                <h6>Adobe Illustrator</h6>
                            </div>
                            <div className="p-3 text-center">
                                <img height="30px" src={img24} alt="..." />
                                <h6>Adobe Photoshop</h6>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;