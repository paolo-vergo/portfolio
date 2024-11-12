import React from 'react';
import './About.css';
import paoloImage from './assets/paolo_cap.png';  // Ensure the path is correct

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
  <img src={paoloImage} alt="Paolo" className="about-image" />
  <p>
    I'm <strong>Paolo Vergottini</strong>, a <strong>Data Scientist</strong> with a Master of Science in <strong>Mathematical Engineering</strong> from <strong>Politecnico di Milano</strong>. Since 2022, I’ve been working at <strong>Whitehall Reply</strong>, where I apply machine learning and AI to enhance <strong>public administration</strong>. My expertise lies in <strong>Large Language Models (LLMs)</strong>, <strong>Computer Vision</strong> tasks, and <strong>multimodal</strong> approaches to modeling complex and ighly diverse data, which is crucial for delivering adaptable and comprehensive solutions in the <strong>consulting</strong> space.
  </p>
  <p>
    As my role has gradually shifted towards <strong>technical project management</strong>, I’ve developed the ability to balance attention to detail with the capacity to see and drive the big picture, ensuring both short-term tasks and long-term goals are aligned with project objectives.
  </p>
  <p>
    Outside of work, I am deeply passionate about meeting new people and fostering meaningful connections. I actively volunteer with the <strong>World Scout Movement</strong> and engage with international organizations like the <strong>Erasmus Student Network (ESN)</strong>. Through these experiences, I connect with people from diverse backgrounds, share knowledge, and contribute to mutual growth, all while fostering a deeper sense of understanding.
  </p>
</div>

    </section>
  );
}

export default About;
