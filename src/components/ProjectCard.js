// ProjectCard.js

import React from 'react';
import './ProjectCard.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons


const ProjectCard = ({ title, description, techStack, githubLink, openModal }) => {
  return (
    <div className="project-card" onClick={openModal}>
      <h3 className="project-title">{title || "No Title"}</h3>
      <p className="project-description">{description || "No description available"}</p>
      <p className="project-tech-stack">
        {techStack ? techStack.join(', ') : "No tech stack available"}
      </p>
      {githubLink && (


          <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHubProj">
            <FaGithub size={30} className="social-icon" />
          </a>

        
      )}
    </div>
  );
};

export default ProjectCard;
