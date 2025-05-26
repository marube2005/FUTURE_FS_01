import React from 'react';
import './styles/ProjectsCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, liveUrl, codeUrl } = project;
  
  return (
    <div className="project-card">
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="image-placeholder">
            <span>Project Image</span>
          </div>
        )}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        
        <div className="project-tags">
          {tags && tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        
        <p className="project-description">{description}</p>
        
        <div className="project-links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live-link">
              Live Demo
            </a>
          )}
          
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="project-link code-link">
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
