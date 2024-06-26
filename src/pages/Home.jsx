import React from 'react';
import About from '../components/About';
import LatestProjects from '../components/LatestProjects';
import '../styles/home.scss';

const Home = () => {
  return (
    <div className="home">
      <About />
      <div className="separator">
        <div className="line"></div>
      </div>
      <LatestProjects />
    </div>
  );
};

export default Home;
