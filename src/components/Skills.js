import React, { useState } from 'react';
import { FaPython, FaJava, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { MdScatterPlot} from 'react-icons/md';
import {IoPieChartSharp} from 'react-icons/io5'
import { FaM } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa6";
import { SiR, SiCplusplus, SiC, SiGnubash, SiDocker, SiStackblitz, SiJavascript, SiPostman, SiMongodb, SiMeta, SiGithub, SiGitlab, SiFastapi, SiApachekafka, SiHive, SiHuggingface, SiLangchain, SiNeo4J, SiNextra, SiMicrosoftexcel, SiKubernetes, SiTensorflow, SiPytorch, SiScikitlearn, SiReact, SiFlask, SiStreamlit, SiPostgresql, SiGooglegemini, SiSpacy, SiPlotly, SiPandas, SiNumpy, SiSwagger, SiApachehadoop } from 'react-icons/si';
import './Skills.css';
import { FaQ } from "react-icons/fa6";
import { AiOutlineOpenAI } from "react-icons/ai";
import { GrTools } from "react-icons/gr";




function Skills() {
  const skills = [
    // Languages
    { name: 'Python', icon: <FaPython />, category: 'Languages' },
    { name: 'Java', icon: <FaJava />, category: 'Languages' },
    { name: 'JavaScript', icon: <SiJavascript />, category: 'Languages' },
    { name: 'R', icon: <SiR />, category: 'Languages' },
    { name: 'C++', icon: <SiCplusplus />, category: 'Languages' },
    { name: 'C', icon: <SiC />, category: 'Languages' },
    { name: 'Bash', icon: <SiGnubash />, category: 'Languages' },

    // Version Control
    { name: 'Git', icon: <FaGitAlt />, category: 'Version Control' },
    { name: 'GitHub', icon: <SiGithub />, category: 'Version Control' },
    { name: 'GitLab', icon: <SiGitlab />, category: 'Version Control' },

    // LLM Tools
    { name: 'Langchain', icon: <SiLangchain />, category: 'LLM Tools' },
    { name: 'Huggingface', icon: <SiHuggingface />, category: 'LLM Tools' },
    { name: 'Ollama', icon: <GrTools />, category: 'LLM Tools' },
    { name: 'OpenAI', icon: <AiOutlineOpenAI />, category: 'LLM Tools' },
    { name: 'spaCy', icon: <SiSpacy />, category: 'LLM Tools' },
    { name: 'Gemini', icon: <SiGooglegemini />, category: 'LLM Tools' },  
    { name: 'LLaMA', icon: <SiMeta />, category: 'LLM Tools' }, 
    { name: 'Mistral', icon: <FaM />, category: 'LLM Tools' },
    { name: 'Claude', icon: <FaStarOfLife />, category: 'LLM Tools' }, 

    // Databases
    { name: 'MongoDB', icon: <SiMongodb />, category: 'Databases' },
    { name: 'SQL', icon: <FaDatabase />, category: 'Databases' },
    { name: 'Neo4j', icon: <SiNeo4J />, category: 'Databases' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'Databases' },
    { name: 'Qdrant', icon: <FaQ />, category: 'Databases' }, 

    // Containers
    { name: 'Docker', icon: <SiDocker />, category: 'Containers' },
    { name: 'Kubernetes', icon: <SiKubernetes />, category: 'Containers' },

    // Machine Learning
    { name: 'TensorFlow', icon: <SiTensorflow />, category: 'Machine Learning' },
    { name: 'PyTorch', icon: <SiPytorch />, category: 'Machine Learning' },
    { name: 'Scikit-learn', icon: <SiScikitlearn />, category: 'Machine Learning' },
    { name: 'Mediapipe', icon: <SiPlotly />, category: 'Machine Learning' },

    // Data Visualization
    { name: 'Matplotlib', icon: <MdScatterPlot />, category: 'Data Visualization' },
    { name: 'Highcharts', icon: <IoPieChartSharp />, category: 'Data Visualization' },
    { name: 'Plotly', icon: <SiPlotly />, category: 'Data Visualization' },

    // Web Development
    { name: 'React', icon: <SiReact />, category: 'Web Development' },
    { name: 'Flask', icon: <SiFlask />, category: 'Web Development' },
    { name: 'Streamlit', icon: <SiStreamlit />, category: 'Web Development' },

    // Big Data
    { name: 'Spark', icon: <SiStackblitz />, category: 'Big Data' },
    { name: 'Kafka', icon: <SiApachekafka />, category: 'Big Data' },
    { name: 'Hive', icon: <SiHive />, category: 'Big Data' },
    { name: 'HDFS', icon: <SiApachehadoop />, category: 'Big Data' },

    // Data Tools
    { name: 'Matlab', icon: <SiNextra />, category: 'Data Tools' },
    { name: 'Excel', icon: <SiMicrosoftexcel />, category: 'Data Tools' },
    { name: 'Pandas', icon: <SiPandas />, category: 'Data Tools' },
    { name: 'NumPy', icon: <SiNumpy />, category: 'Data Tools' },

    // API
    { name: 'FastApi', icon: <SiFastapi />, category: 'API' },
    { name: 'Postman', icon: <SiPostman />, category: 'API' },
    { name: 'Swagger', icon: <SiSwagger />, category: 'API' },

];


  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter skills based on the selected category
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  // Dynamically get categories from the skills data
  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      {/* Category filter buttons */}
      <div className="category-filter">
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={() => setSelectedCategory(category)} 
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
