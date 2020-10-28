import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Photographs from '../Photographs/Photographs';
import Projects from '../Projects/Projects';
import Button from 'react-bootstrap/Button'
import './Works.css'


const Works = () => {

    const displayPhotograph = (value) => {
        const photos = document.getElementById("photos")
        const web = document.getElementById("web")
        
        if (value) {
            photos.style.display = "block";
            web.style.display = "none";
        }

    }
    const displayWeb = (value) => {
        const photos = document.getElementById("photos")
        const web = document.getElementById("web")
        if (value) {
            photos.style.display = "none";
            web.style.display = "block";
        }
    }


    return (
        <div className="about">
            <Header></Header>
            <Container className="mt-5">
                <h3 className="text-center text-white">My Recent Works</h3>
                <div className="py-3 d-flex justify-content-center">
                    <Button variant="outline-danger" className="text-white m-2" onClick={(value) => displayWeb(value)} >Web Projects</Button>
                    <Button variant="outline-danger" className="text-white m-2" onClick={(value) => displayPhotograph(value)}>Photographs</Button>
                </div>
                <div id="web">
                    <Projects></Projects>
                </div>
                <div id="photos">
                    <Photographs></Photographs>
                </div>
            </Container>
        </div>
    );
};

export default Works;