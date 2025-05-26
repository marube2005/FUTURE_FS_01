import ProjectCard from './ProjectCard';
import { projects } from '../../../data/projects';
import './styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">A collection of my recent work and personal projects</p>
        </div>
      </section>
      
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
