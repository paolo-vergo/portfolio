import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaLinkedin, FaGithub, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import Button from './Button';
import { enable as enableDarkMode, disable as disableDarkMode, setFetchMethod } from 'darkreader';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setFetchMethod(window.fetch); // Ensures darkreader fetches styles correctly

    if (isDarkMode) {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    } else {
      disableDarkMode();
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="navbar">
      <h1>Paolo Vergottini</h1>

      {/* Menu Toggle Button for Mobile */}
      <button 
        className="menu-toggle" 
        onClick={toggleMenu} 
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
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

        {/* Dark Mode Toggle Button with Icons */}
        <li>
          <button onClick={toggleDarkMode} className="dark-mode-toggle" aria-label="Toggle Dark Mode">
            {isDarkMode ? <FaSun size={30} /> : <FaMoon size={30} />}
          </button>
        </li>

        {/* Download CV Button */}
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
