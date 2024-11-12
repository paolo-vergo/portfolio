import React from 'react';
import './Hero.css';
import Button from './Button'; // Import the new reusable Button component

function Hero() {
  return (
    <section className="hero">
      <h3>My Portfolio</h3>
      <p>Hi! I’m Paolo, and this is my portfolio of Machine Learning and Data Science projects.</p>
      <p>Explore my work from academia and industry as an ML Engineer.</p>

      {/* Use the Button component with a reference to the projects section */}
      <Button href="#projects" className="view-projects-button">
        View My Projects
      </Button>
    </section>
  );
}

export default Hero;
