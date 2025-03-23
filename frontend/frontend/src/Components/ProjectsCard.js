import React from 'react';
import Projectsdata from '../Data/Projectsdata';
import "../css/Projects.css";

function ProjectsCard({project}) {
  return (
    <div className="projects">
    
      <div key ={project.id} className='project-card'> 
        <img src={project.image} alt={project.name} className = "project-image"/>
        <h2>{project.name}</h2>
        <p className = "project-description">{project.description }</p>
        <p className='tech-used'><strong>Tech Used:</strong> {project.technologies.join(", ")}</p>
        <div className="buttons">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
      </div>
   
  </div>
  
  )
}
export default ProjectsCard;