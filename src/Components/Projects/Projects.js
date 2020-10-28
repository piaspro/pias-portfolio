import React from 'react';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import creative from '../../images/Creative Agency.png'
import Volunteer from '../../images/Voluntier Network.png'
import travel from '../../images/Travel Guru.png'
import doctor from '../../images/Doctors Portal.png'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import Header from '../Header/Header';
import './Projects.css'


const projects = [
    {
        id: 0,
        title: "Creative Agency",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi id autem officiis odio soluta.",
        link: "https://github.com/piaspro/creative-agency",
        liveLink: "https://creative-agency-a1c8c.web.app/",
        img: `${creative}`
    },
    {
        id: 1,
        title: "Volunteer Network",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi id autem officiis odio soluta.",
        link: "https://github.com/piaspro/volunteer-network",
        liveLink: "https://volunteer-network-f60dc.web.app/",
        img: `${Volunteer}`
    },
    {
        id: 2,
        title: "Travel Guru",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi id autem officiis odio soluta.",
        link: "https://github.com/piaspro/assignment-9-travel-guru",
        liveLink: "https://assignment-9-red-onion.web.app/",
        img: `${travel}`
    },
    {
        id: 3,
        title: "Doctors Portal",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi id autem officiis odio soluta.",
        link: "https://github.com/piaspro",
        liveLink: "https://creative-agency-a1c8c.web.app/",
        img: `${doctor}`
    },
    {
        id: 4,
        title: "Hello World!",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi id autem officiis odio soluta.",
        link: "https://github.com/piaspro",
        liveLink: "https://creative-agency-a1c8c.web.app/",
        img: "https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
    },
    {
        id: 5,
        title: "Hello World!",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi id autem officiis odio soluta.",
        link: "https://github.com/piaspro",
        liveLink: "https://creative-agency-a1c8c.web.app/",
        img: "https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
    }
]
const Projects = () => {
    return (
        <div className="about">
        <Container>
            <Row className="pb-5 mt-1">
                {
                    projects.map(blog => <Col className="py-3 d-flex justify-content-center zoom">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={blog.img} />
                            <div className="details">
                                <div className="content">
                                    <h3>{blog.title}</h3>
                                    <p>{blog.description}</p>
                                    <div className="link-repo">
                                        <a href={blog.link} className="p-3"><FontAwesomeIcon icon={faGithubSquare} size="2x" /></a>
                                        <a href={blog.liveLink} className="p-3"><FontAwesomeIcon icon={faExternalLinkSquareAlt} size="2x" /></a>
                                    </div>
                                </div>
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

export default Projects;