import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './Contact.css'
import Header from '../Header/Header';
import Links from '../Links/Links';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'gmail_template', e.target, 'user_9d6edsL74x1aLb6MyPZZZ')
            .then((result) => {
                if (result.text == "OK") {
                    handleShow();
                    console.log("success")
                };
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="about">
            <Header></Header>
            <Container>
                <h1 className="text-white text-center mt-3">Contact Me</h1>
                <div className=" d-flex justify-content-center pt-3 ">
                    <Form onSubmit={sendEmail}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" name="name" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your Email </Form.Label>
                            <Form.Control type="email" placeholder="Your email" name="email" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Say Something</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Your Text Here..." name="message" required />
                        </Form.Group>
                        <Button variant="outline-danger" type="submit">
                            Submit
                    </Button>
                    </Form>
                </div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Awesome</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex justify-content-center color-text">
                        <strong>Thanks For Contacting Us</strong>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                        Sending E-mail to <strong className="color-text">golamrahman09@gmail.com</strong>
                    </Modal.Footer>
                </Modal>
            </Container>
            <Links></Links>
        </div>
    );
};

export default Contact;