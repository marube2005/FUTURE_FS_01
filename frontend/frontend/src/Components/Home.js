import React from "react";
import "../css/Home.css"; // Import CSS file
import profileImage from "../assets/elvispassport.jpg"; // Update with your image path
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import icons
import ProjectsCard from './ProjectsCard';  // Import reusable component
import Projectsdata from '../Data/Projectsdata';

const Hero = () => {
  return (
    <div className="home-page">
      <section className="hero">
      {/* Left Side - Introduction */}
      <div className="hero-text">
        <h1>Hi, I'm Elvis Marube </h1>
        <h2>Crafting Modern Mobile & Web Experiences</h2>
        <p>
          A passionate <strong>Frontend Developer</strong> & <strong>UI/UX Designer</strong> dedicated to building sleek, high-performance applications with React, Flutter, and AI-powered solutions.
        </p>

        <div className="hero-buttons">
          <a href="/projects-skills" className="primary-btn">View My Work</a>
          <a href="/contact" className="secondary-btn">Contact Me</a>
        </div>

        {/* Social Media Icons */}
        <div className="social-links">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} color="#0e76a8" /></a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub size={30} color="black" /></a>
          <a href="mailto:your.email@example.com"><FaEnvelope size={30} color="red" /></a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hero-image">
        <img src={profileImage} alt="Your Name" />
      </div>
    </section>
    <section id="home-projects">
        <h3>Featured Projects</h3>
        <div className="projects">
          {Projectsdata.slice(0, 3).map((project) => ( // Show only a few projects
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      </div>
  );
};

export default Hero;
