import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Header from '../Header/Header';
import './Blog.css'

const blogs = [
    {
        id: 0,
        title: "All About React",
        description: "React is an open source JavaScript library. It is used for building UI components...",
        link: "https://medium.com/@golamrahman09/all-about-react-27a61b7b9495",
        img: "https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
    },
    {
        id: 1,
        title: "JavaScript Problem Solving for Beginners",
        description: "When I started learning JavaScript, I found that problem solving is the most difficult ...",
        link: "https://medium.com/swlh/javascript-problem-solving-for-beginners-8be66a6f211b",
        img: "https://miro.medium.com/max/900/1*K1tuKuLou6Y8k3xlBVP_nQ.jpeg"
    },
    {
        id: 2,
        title: "The thing I have learned today about JavaScript",
        description: "We all know about the JavaScript variable and its values, let’s discuss a little bit in detail....",
        link: "https://medium.com/@golamrahman09/the-thing-i-have-learned-today-about-javascript-b8258ca7ea40",
        img: "https://s3.amazonaws.com/fullstackfeed/images/javascript-3.jpg"
    },
    {
        id: 3,
        title: "An Overview of JavaScript",
        description: "JavaScript is world most popular programming Language. It is widely used for web...",
        link: "https://github.com/piaspro",
        img: "https://miro.medium.com/max/893/1*p-znFyNcRilkdBbinrH_dg.jpeg"
    }
]

const Blog = () => {
    return (
        <div className="about">
            <Header></Header>
            <Container className="mt-5">
                <h3 className="text-center text-white newText">Some Of My Blogs</h3>
                <Row className="pb-5 my-5">
                    {
                        blogs.map(blog => <Col>
                            <div class="card mb-3" style={{ width: '30rem' }}>
                                <div class="row no-gutters">
                                    <div class="col-md-5">
                                        <img src={blog.img} class="card-img" alt="..."/>
                                    </div>
                                        <div class="col-md-7">
                                            <div class="card-body">
                                                <h5 class="card-title">{blog.title}</h5>
                                                <p class="card-text">{blog.description}</p>
                                                <a href={blog.link} className="p-3"><Button variant="outline-success">Read More</Button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Blog;