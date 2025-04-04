import React from 'react';
import './About.css';
import paoloImage from './assets/paolo_cv.jpg';  // Ensure the path is correct

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={paoloImage} alt="Paolo" className="about-image" />
        <p>
          I'm <strong>Paolo Vergottini</strong>, a <strong>Senior Machine Learning Engineer</strong> with a Master of Science in <strong>Mathematical Engineering</strong> from <strong>Politecnico di Milano</strong>. Since 2022, I've been working at <strong>Whitehall Reply</strong>, where I lead the development of AI-driven solutions that support and innovate <strong>public administration</strong>.
        </p>
        <p>
          My work centers on <strong>Large Language Models (LLMs)</strong>, <strong>Computer Vision</strong>, and <strong>multimodal AI</strong>, combining deep technical expertise with a system-wide perspective. While I coordinate across multiple teams and contribute to strategic planning, I continue to hold a <strong>technical oversight role</strong>, ensuring architectural coherence, technical excellence, and hands-on guidance throughout the development lifecycle.
        </p>
        <p>
          In parallel, I've developed a strong interest in the ethical and regulatory dimensions of AI. I completed a course on <strong>AI Ethics</strong> at the <strong>London School of Economics</strong>, and I’ve become well-versed in the <strong>EU AI Act</strong>, helping bridge the gap between fast-moving AI technologies and responsible, compliant deployment. This has positioned me to actively contribute to discussions and decisions around <strong>AI governance</strong> and the integration of ethical standards into real-world systems.
        </p>
        <p>
          Outside of work, I’m passionate about building connections and communities. I volunteer with the <strong>World Scout Movement</strong> and engage with organizations like the <strong>Erasmus Student Network (ESN)</strong>, where I promote intercultural exchange, learning, and shared growth.
        </p>
      </div>
    </section>
  );
}

export default About;
