import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa500px, faFacebookSquare, faFlickr, faGithubSquare, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import './Links.css'
import { Col, Container, Row } from 'react-bootstrap';

const Links = () => {
    return (
        <Container className="mt-3">
            <Row>
                <Col className="links text-center pt-5">
                        <a href="https://github.com/piaspro" className="p-3"><FontAwesomeIcon icon={faGithubSquare} size="2x" /></a>
                        <a href="https://www.linkedin.com/in/golam-rahman/" className="p-3"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                        <a href="https://500px.com/p/piasrahman?" className="p-3"><FontAwesomeIcon icon={fa500px} size="2x" /></a>
                        <a href="https://www.flickr.com/photos/jugantori/" className="p-3"><FontAwesomeIcon icon={faFlickr} size="2x" /></a>
                        <a href="mailto:{golamrahman09@gmail.com}" className="p-3"><FontAwesomeIcon icon={faEnvelopeSquare} size="2x" /></a>
                </Col>
            </Row>
            <Row>
                <Col className="copyright text-center pt-3">
                    <p>Copyright @<span className="copyright-name">Pias</span> 2020 || All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Links;