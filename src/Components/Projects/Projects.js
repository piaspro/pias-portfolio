import React from 'react';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import creative from '../../images/Creative Agency.png'
import Volunteer from '../../images/Voluntier Network.png'
import travel from '../../images/Travel Guru.png'
import doctor from '../../images/Doctors Portal.png'
import online from '../../images/online learning.png'
import weather from '../../images/weather app.png'
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import './Projects.css'


const projects = [
    {
        id: 0,
        title: "Creative Agency",
        description: "A Full Stack Service Provider app. Where User Purchase services, See their services in the dashboard & give feedback. An admin have control over everything using dashboard",
        link: "https://github.com/piaspro/creative-agency",
        liveLink: "https://creative-agency-a1c8c.web.app/",
        img: `${creative}`
    },
    {
        id: 1,
        title: "Volunteer Network",
        description: "A FullStack Charity Organizations app. An User Become part of it by registration, and see all-volunteer services they are registered to. User can also cancel them if they want",
        link: "https://github.com/piaspro/volunteer-network",
        liveLink: "https://volunteer-network-f60dc.web.app/",
        img: `${Volunteer}`
    },
    {
        id: 2,
        title: "Travel Guru",
        description: "Select your desire location and see brief info. Book your service with selected date. After booking you can see google map location and available hotels",
        link: "https://github.com/piaspro/assignment-9-travel-guru",
        liveLink: "https://assignment-9-red-onion.web.app/",
        img: `${travel}`
    },
    {
        id: 3,
        title: "Doctors Portal",
        description: "A full-stack app where you can pick the date and time and fix an appointment with your doctor & More..",
        link: "https://github.com/piaspro/doctors-portal",
        liveLink: "https://github.com/piaspro/doctors-portal",
        img: `${doctor}`
    },
    {
        id: 4,
        title: "Online Learning",
        description: "Created using react app where you can enroll to different courses & can see how many courses you enrolled and the total cost",
        link: "https://github.com/piaspro/online-learning",
        liveLink: "https://online-course-learning.netlify.app/",
        img: `${online}`
    },
    {
        id: 5,
        title: "Weather App Live",
        description: "A React app that uses Rest api to display weather of the different cities",
        link: "https://https://github.com/piaspro/weather-app",
        liveLink: "https://piaspro.github.io/weather-app/",
        img: `${weather}`
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