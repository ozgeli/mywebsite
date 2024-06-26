import React from 'react';
import '../styles/about.scss';
import profilePic from '../assets/profile-pic.jpg';

const About = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Email address copied to clipboard');
    }).catch(err => {
      alert('Failed to copy email address');
    });
  };

  return (
    <section className="about">
      <div className="about-left">
        <h1>özge alpaslan kayıkçı</h1>
        <h2 className="typewriter">Front End Developer | computer science teacher</h2>
        <p>
          I am a junior front end developer specializing in creating modern, responsive web applications using React and SCSS. Previously, I worked as a Computer Science teacher.
        </p>
        <div className="email-button" onClick={() => copyToClipboard('ozgalpaslan@gmail.com')}>
          ozgalpaslan@gmail.com
        </div>
      </div>
      <div className="about-right">
        <div className="about-image">
          <img src={profilePic} alt="Your Name" />
          <div className="frame frame1"></div>
          <div className="frame frame2"></div>
          <div className="frame frame3"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
