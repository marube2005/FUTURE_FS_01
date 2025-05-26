import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">Elvis Marube</h3>
            <p className="footer-description">
              Frontend Developer creating modern and responsive web applications and Mobile Applications.
            </p>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Links</h4>
            <ul className="footer-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              <a href="https://github.com/marube2005" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://linkedin.com/in/elvis-marube-499bbb299/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://twitter.com/ElvisMarub44524" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {currentYear} Elvis Marube. All rights reserved.</p>
        </div>
      </div>
    </footer>
   );
};

export default Footer;
