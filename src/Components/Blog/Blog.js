import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Header from '../Header/Header';

const blogs = [
    {
        id: 0,
        title: "Hello World!",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi id autem officiis odio soluta.",
        link: "https://github.com/piaspro",
        img: "https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
    },
    {
        id: 1,
        title: "Hello World!",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi id autem officiis odio soluta.",
        link: "https://github.com/piaspro",
        img: "https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
    },
    {
        id: 2,
        title: "Hello World!",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi id autem officiis odio soluta.",
        link: "https://github.com/piaspro",
        img: "https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
    },
    {
        id: 3,
        title: "Hello World!",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi id autem officiis odio soluta.",
        link: "https://github.com/piaspro",
        img: "https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
    },
    {
        id: 4,
        title: "Hello World!",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi id autem officiis odio soluta.",
        link: "https://github.com/piaspro",
        img: "https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
    },
    {
        id: 5,
        title: "Hello World!",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi id autem officiis odio soluta.",
        link: "https://github.com/piaspro",
        img: "https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
    }
]

const Blog = () => {
    return (
        <div className="about">
            <Header></Header>
            <Container className="mt-5">
                <h3 className="text-center text-white">Some of My Blogs</h3>
                <Row className="pb-5">
                    {
                        blogs.map(blog => <Col className="p-3">
                            <Card style={{ width: '18rem' }}>
                                <div>
                                    <Card.Img variant="top" src={blog.img} />
                                </div>
                                <div>
                                    <Card.Body>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                        <a href={blog.link}><Button variant="outline-danger">Read More</Button></a>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Blog;