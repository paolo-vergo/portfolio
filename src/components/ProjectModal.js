import React, { useEffect } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ title, description, techStack, githubLink, detailedInfo, date, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  if (!title) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Close button in the top-right corner */}
        <button className="close-btn" onClick={onClose}>&times;</button>

        <h2>{title || "Project Title"}</h2>

        {/* Display the date if available */}
        {date && <div className="project-date">{date}</div>}

        <div className="description">
          {description || "No description available."}
        </div>

        {/* Loop through the detailedInfo object */}
        {detailedInfo && Object.entries(detailedInfo).map(([subtitle, content], index) => (
          <div key={index} className="detailed-info-section">
            <div className="detailed-info-subtitle">{subtitle}</div>

            {/* Check if content is an array or string, then render accordingly */}
            {Array.isArray(content) ? (
              <ul className="detailed-info-list">
                {content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <div
                className="detailed-info-text"
                dangerouslySetInnerHTML={{ __html: content }} // Renders HTML content
              />
            )}
          </div>
        ))}

        <h3>{techStack ? techStack.join(', ') : "No tech stack available"}</h3>

        {/* Conditionally render the GitHub button if githubLink exists */}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-button">GitHub</a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;