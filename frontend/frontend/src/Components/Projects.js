import React from 'react';
import Projectsdata from '../Data/Projectsdata';
import "../css/Projects.css";
import ProjectsCard from './ProjectsCard';  // Import reusable component

function Projects()  {
  return (
    <section id="projects-skills">
      <h3>My Projects </h3>
      <div className="projects">
        {Projectsdata.map((project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>
      <div className="skills">
        {/* Add your skills details here */}
      </div>
    </section>
  );
}

export default Projects;
