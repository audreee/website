import React from 'react';
import projectData from '../data/projectData.js'
import Card from './Card.jsx';

let Projects = () => {
  return (
    <div className="projects-wrapper">
      <h5>PROJECTS</h5>
      <div className="card-container">
        {projectData.map((project, index) => (
          <Card key={index} img={project.img} title={project.title} video={project.video} repo={project.repo} description={project.description} />
        ))}
      </div>
    </div>
  )
}

export default Projects;