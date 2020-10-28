import React from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import './Contact.css'
import Header from '../Header/Header';
import Links from '../Links/Links';

const Contact = () => {
    return (
        <div className="about">
            <Header></Header>
            <Container>
                <h1 className="text-white text-center mt-3">Contact Me</h1>
                <div className=" d-flex justify-content-center pt-3 ">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your Email </Form.Label>
                            <Form.Control type="email" placeholder="Your email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Say Something</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Your Text Here..." />
                        </Form.Group>
                        <Button variant="outline-danger" type="submit">
                            Submit
                    </Button>
                    </Form>
                </div>
            </Container>
            <Links></Links>
        </div>
    );
};

export default Contact;