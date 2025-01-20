// Projects.js

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Projects.css';

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
      {
      title: "Data Analytics Converser",
      description: "A powerful tool enabling government personnel to query structured data via a conversational chatbot, providing secure and insightful responses without SQL expertise.",
      techStack: ["Python", "Neo4j", "Kafka", "MongoDB", "Impala", "React", "LLMs (GPT-4o)"],
      date: "2022 - 2024",
      detailedInfo: {
        "Project Overview": "This project is a conversational analytics platform designed to enable government users to query databases through a chatbot interface using natural language. Over two years, I contributed to its development in various roles, initially as a Machine Learning Engineer and later as both Project Manager and Senior ML Engineer, guiding its growth and implementation. The platform integrates LLMs to interpret queries, making data insights easily accessible to non-technical users.",
        "Key Features": "The frontend conversational chatbot allows users to select datasets, type or voice questions, and view suggestions for queries. Through a digital assistant, it can deliver responses both visually and verbally. The system supports context-driven insights by using metadata-based graphs and provides enhanced responses based on user intent and context.",
        "Techniques Used": "Natural Language Understanding with LLMs for query interpretation, metadata-driven graph exploration for relevant insights, secure data handling, and dynamic SQL query generation. Frontend enhancements include real-time response handling and a digital assistant for accessible, multimodal feedback.",
        "Outcome": "This platform democratizes data access for government personnel, facilitating data-driven decision-making without requiring SQL or technical knowledge. It has advanced data accessibility while upholding data privacy and security standards, and its LLM-powered interface has improved user satisfaction through intuitive interactions."
      }
    },
    {
      title: 'Fault Prediction',
      description: 'Monitoring the state of government applications, predicting service health metrics using ML methods, and providing advanced alerts.',
      techStack: ['Python', 'Time Series', 'LSTM', 'Highcharts', 'React'],
      date: "September 2024",
      detailedInfo: {
        "Project Overview": "This project focuses on monitoring the health of various government applications by taking live metrics such as latency and performance. Using machine learning techniques like classical statistics, nonparametric methods, and LSTM models, we predict the evolution of these metrics over the short to medium-term. The goal is to forecast potential issues or faults with a time lag, providing early warnings to technicians for timely intervention.",
        "Key Features": "The system tracks live service metrics, performs predictive modeling on time series data, and displays the results on an intuitive dashboard. Alerts are triggered when potential faults are predicted, helping technicians to act proactively.",
        "Techniques Used": "Classical time series analysis, nonparametric methods, LSTM for time series forecasting, real-time data processing, and dynamic dashboard updates for visualization.",
        "Outcome": "The project ensures high reliability for government applications by anticipating problems before they affect users, providing a seamless user experience and minimizing downtime."
      }
    },
    {
      title: 'Government Bonuses Allocation',
      description: 'Optimizing the allocation of government bonuses for home restructuring based on legal constraints and tax deductions.',
      techStack: ['Java', 'Spring', 'MongoDB', 'Optimization'],
      date: "February 2023",
      detailedInfo: {
        "Project Overview": "This project focuses on computing the optimal allocation of government bonuses for home restructuring, taking into account a variety of legal constraints and conditions necessary to activate specific bonuses. The goal is to maximize the tax deductions by optimizing the intervention strategy based on these constraints.",
        "Approach": "The project involves a combination of mathematical modeling and optimization efforts. Initially, quadratic optimization techniques were considered, but the problem was ultimately reformulated into a simpler simplex problem for easier computation and better performance. This optimization effort ensures compliance with strict regulations while maximizing the tax benefits.",
        "Technologies": [
          "Spring Java: The application was built in Spring, providing a robust and scalable backend for handling requests and managing business logic.",
          "MongoDB: The data regarding available bonuses and home interventions is stored in MongoDB, allowing efficient querying and retrieval of necessary data.",
          "Google Optimization Library: The optimization problem was solved using the Google Optimization library, which provides efficient algorithms for solving linear and non-linear problems."
        ]
      }
    },
    {
      title: 'Conformal Prediction',
      description: 'Conformal Prediction for regression and its application in multivariate and functional contexts.',
      techStack: ['R','Time Series', 'Conformal Prediction'],
      githubLink: 'https://paolo-vergo.github.io/conformal-fd/',
      date:"April 2022",
      detailedInfo: {
        "Conformal Prediction": "Conformal Prediction for regression is a powerful technique that allows us to construct prediction sets with a high level of reliability. These prediction sets come with a marginal coverage guarantee at a specified level, typically denoted as 1-α. This means that we can have a certain degree of confidence in the predictions made by the model.",
        "Multivariate Responses": "In the multivariate case, I explored situations where the outcome variable is composed of multiple correlated variables. This can arise, for example, in finance when predicting stock prices or in medical research when predicting health outcomes.",
        "Functional Responses": "For functional responses, I focused on scenarios where the outcome variable is represented by a function, which is common in fields such as signal processing.",
        "Packages on CRAN": "Both packages, 'conformalInference.multi' and 'conformalInference.fd,' are available on CRAN and GitHub, enabling researchers and practitioners to make reliable predictions in complex data scenarios."
      }
    },
    {
      title: 'Vaccine Stocks Modelling',
      description: 'GARCH modeling of pharmaceutical stocks using advanced statistical methods.',
      techStack: ['MATLAB', 'GARCH', 'Pharmaceutical Stocks'],
      githubLink: 'https://github.com/paolo-vergo/pharmastocks',
      date: "June 2021",
      detailedInfo: {
        "Project Overview": "This project focuses on using GARCH (Generalized Autoregressive Conditional Heteroskedasticity) models to analyze and predict volatility in pharmaceutical stocks. The modeling process involves advanced statistical techniques in MATLAB to forecast fluctuations in stock prices.",
        "Methodologies": [
          "Augmented Dickey Fuller test, ",
          "ARMA modeling, ",
          "Model selection using AIC and BIC, ",
          "Kolmogorov-Smirnov non-parametric test for normality, ",
          "Ljung-Box Q-test, ",
          "GARCH modeling, ",
          "EGARCH modeling, ",
          "Comparison of forecasting performances using MAE and MSE metrics"
        ],
        "Project Report": "For an in-depth analysis and complete discussion of our modeling choices, explore the full project report in the GitHub repository, titled Project Description.pdf. This report encompasses all the necessary references and provides valuable insights into the project."
      }
    },
    {
      title: 'CNN Toolbox',
      description: 'A collection of three independent projects showcasing applications of CNNs in image classification, segmentation, and visual query answering.',
      techStack: ['Python', 'TensorFlow', 'CNN', 'Image Classification', 'Image Segmentation', 'VQA'],
      githubLink: 'https://github.com/paolo-vergo/cnn-toolbox',
      date: "February 2021",
      detailedInfo: {
        "Project Overview": "The CNN Toolbox is a collection of three independent projects developed in Python using TensorFlow, focusing on cutting-edge applications of Convolutional Neural Networks (CNNs) in the fields of image classification, image segmentation, and visual query answering. This project provides valuable insights and practical implementations using state-of-the-art techniques (bear in mind that this was developed in 2021, and research progresses rapidly!).",
        "Project Structure": [
          "Multiclass Image Classification: This project focuses on achieving accurate classification of images into multiple classes using transfer learning techniques with pre-trained CNN models.",
          "Image Segmentation: This project uses a patch-based mechanism with U-Net for semantic segmentation, dividing images into smaller patches and predicting their classes for precise segmentation results.",
          "Visual Query Answering (VQA): Combining an image feature extractor with an attention mechanism, this project enables answering queries related to visual content, enhancing the ability of CNNs to comprehend and interpret visual information."
        ],
        "Platform Compatibility": "The code versions are compatible with both Windows/Linux and OSX operating systems, ensuring ease of use across different platforms.",
        "GitHub Repository": "The full code can be found on the GitHub page."
      }
    },
    {
      title: 'Bayesian Non-parametric Smoother',
      description: 'Hierarchical Nonparametric Bayesian Models for smoothing functional data.',
      techStack: ['C++', 'Bayesian Statistics', 'Dirichlet Mixture Model', 'Gibbs Sampler'],
      githubLink: 'https://github.com/paolo-vergo/npbayes',
      date: "December 2020",
      detailedInfo: {
        "Project Overview": "Welcome to the Hierarchical Nonparametric Bayesian Models for Smooth Functional Data project! This repository contains an implementation of a CPP Gibbs Sampler for a Hierarchical Dirichlet Mixture Model. It was developed as part of the Bayesian Statistics course at PoliMi in 2021, with special thanks to Prof. Raffaele Argiento for his guidance.",
        "Objective": "The goal of this project is to address the task of functional smoothing for grouped data. Specifically, we focus on estimating the step functional component of sport performance data using hierarchical nonparametric Bayesian models. By leveraging the power of Bayesian statistics and nonparametric modeling, we aim to effectively smooth the data and extract meaningful insights.",
        "Methodology": "We have implemented a CPP Gibbs Sampler for the Hierarchical Dirichlet Mixture Model. The sampler utilizes a Markov chain Monte Carlo (MCMC) algorithm to perform posterior inference and estimate the underlying step functional component, providing a flexible and powerful approach for smoothing functional data.",
        "Additional Models": "In addition to the Hierarchical Dirichlet Mixture Model, this repository also includes implementations of Gibbs Samplers designed for slightly different models. Each model offers a unique perspective and approach to functional smoothing.",
        "GitHub Repository": "The full code can be found on its GitHub repo."
      }
    }
  ];
  
  

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.length === 0 ? (
          <p>No projects available</p>
        ) : (
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              openModal={() => openModal(project)}
            />
          ))
        )}
      </div>

      {/* Modal rendering */}
      {modalOpen && currentProject && (
        <ProjectModal
          isOpen={modalOpen}
          onClose={closeModal}
          title={currentProject.title}
          description={currentProject.description}
          techStack={currentProject.techStack}
          githubLink={currentProject.githubLink}
          date={currentProject.date}
          detailedInfo={currentProject.detailedInfo}
        />
      )}
    </section>
  );
}

export default Projects;
