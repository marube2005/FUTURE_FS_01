// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
// import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contacts";
import './css/App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
       <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects-skills">Projects & Skills</a></li>
            {/* <li><a href="/about">About</a></li> */}
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/projects-skills" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
        <p>&copy; 2025 Elvis' Portfolio. All rights reserved.</p>
      </footer>
      </div>
    </Router>
  );
};

export default App;
