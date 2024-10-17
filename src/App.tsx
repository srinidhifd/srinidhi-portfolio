import { useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light'); // Use 'light' as the initial theme

  return (
    <BrowserRouter>
      <div className="max-w-5xl mx-auto">
        <Navbar theme={theme} setTheme={setTheme} />
        <main>
          <Intro />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
