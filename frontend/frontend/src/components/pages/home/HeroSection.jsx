import React from 'react';
import Button from '../../ui/Button';
import './styles/HeroSection.css';
import profileImage from '../../../assets/elvispassport.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Elvis Marube</span>
          </h1>
          <h2 className="hero-subtitle">Frontend Developer and a Mobile App Developer</h2>
          <p className="hero-description">
            I build modern, responsive web applications with a focus on clean code and great user experiences.
          </p>
          <div className="hero-buttons">
            <Button variant="primary" size="large" onClick={() => window.location.href = '/projects'}>
              View My Work
            </Button>
            <Button variant="outline" size="large" onClick={() => window.location.href = '/contact'}>
              Contact Me
            </Button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
             <img src={profileImage} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
