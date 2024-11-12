import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

import { enable as enableDarkMode, disable as disableDarkMode, setFetchMethod } from 'darkreader';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Allow `darkreader` to fetch styles correctly
    setFetchMethod(window.fetch);

    if (isDarkMode) {
      enableDarkMode({
        brightness: 100,
        contrast: 100,
        sepia: 0,
      });
    } else {
      disableDarkMode();
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
