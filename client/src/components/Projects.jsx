import React from 'react';
import projectData from '../data/projectData.js'
import Card from './Card.jsx';

let Projects = () => {
  return (
    <div className="projects-wrapper">
      {projectData.map((project, index) => (
        <Card key={index} img={project.img} title={project.title} link={project.link} description={project.description} />
      ))}
    </div>
  )
}

export default Projects;