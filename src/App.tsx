import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';

function App() {
  // Adding state for theme (light/dark)
  const [theme, setTheme] = useState('light');

  return (
    <BrowserRouter>
      <div className={theme}>
        <Navbar theme={theme} setTheme={setTheme} />
        <main>
          <Intro />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
