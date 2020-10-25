import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import Links from '../Links/Links';
import './Home.css'
import Particle from './Particle';


const Home = () => {


  return (
    <div className="home">
      <div className="components">
        <Header />
        <AboutMe/>
        <Links/>
      </div>
      <Particle />
    </div>
  )
};

export default Home;