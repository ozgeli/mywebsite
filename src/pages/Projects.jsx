import React from 'react';
import '../styles/projects.scss';
import project1image from '../assets/project1.png';
import project2image from '../assets/project2.png';
import project3image from '../assets/project3.png';

const projectsData = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1.',
    link: 'https://deploy-preview-5--frabjous-tartufo-85d026.netlify.app/',
    image: project1image, 
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2.',
    link: '#',
    image: project2image, },
  {
    title: 'Project 3',
    description: 'A brief description of project 3.',
    link: '#',
    image: project3image, }
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Latest Projects</h2>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
