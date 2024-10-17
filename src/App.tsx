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
      <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-all duration-500`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="max-w-5xl mx-auto">
          <Intro theme={theme} />
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
