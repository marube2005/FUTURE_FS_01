import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      
      {/* Featured Projects Section */}
      <section className="section featured-projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Check out some of my recent work</p>
          
          <div className="featured-grid">
            {/* You can add 2-3 featured project cards here */}
            <div className="featured-placeholder">
              <h3>Project 1</h3>
              <p>Short description of the project</p>
            </div>
            
            <div className="featured-placeholder">
              <h3>Project 2</h3>
              <p>Short description of the project</p>
            </div>
          </div>
          
          <div className="view-all-container">
            <a href="/projects" className="view-all-link">View All Projects</a>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">Frontend</h3>
              <ul className="skills-list">
                <li className="skill-item">HTML5 & CSS3</li>
                <li className="skill-item">JavaScript (ES6+)</li>
                <li className="skill-item">React.js</li>
                <li className="skill-item">Responsive Design</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">Backend</h3>
              <ul className="skills-list">
                <li className="skill-item">Node.js</li>
                <li className="skill-item">Express</li>
                <li className="skill-item">MongoDB</li>
                <li className="skill-item">RESTful APIs</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">Tools & Others</h3>
              <ul className="skills-list">
                <li className="skill-item">Git & GitHub</li>
                <li className="skill-item">Webpack</li>
                <li className="skill-item">Figma</li>
                <li className="skill-item">VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
