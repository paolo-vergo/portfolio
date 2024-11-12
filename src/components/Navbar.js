import React, { useState } from 'react';
import './Navbar.css';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1>Paolo Vergottini</h1>

      {/* Menu Toggle Button for Mobile */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#about" className="nav-btn" onClick={closeMenu}>About</a></li>
        <li><a href="#projects" className="nav-btn" onClick={closeMenu}>Projects</a></li>
        <li><a href="#skills" className="nav-btn" onClick={closeMenu}>Skills</a></li>
        <li>
          <a href="https://www.linkedin.com/in/paolo-vergottini-934015187/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onClick={closeMenu}>
            <FaLinkedin size={30} className="social-icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/paolo-vergo" target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={closeMenu}>
            <FaGithub size={30} className="social-icon" />
          </a>
        </li>
        <li>
          <Button
            href="https://raw.githubusercontent.com/paolo-vergo/resume/main/docs/paolo_vergottini_cv.pdf"
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Download CV"
            onClick={closeMenu}
          >
            Download CV
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
