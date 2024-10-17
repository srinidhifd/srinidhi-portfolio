import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Apply the theme to the entire document
    document.body.className = theme === 'light' ? 'bg-white text-black' : 'bg-[#1a1a1a] text-white';
  }, [theme]);

  // Toggle theme between light and dark modes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="font-poppins">
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/50 backdrop-blur-lg shadow-md dark:bg-black/50' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between py-4 relative max-w-6xl mx-auto px-4 md:px-8">
          {/* Main Navigation (Hidden on Mobile) */}
          <nav
            className={`hidden md:flex items-center justify-center bg-[#2f2f2f] py-4 px-10 rounded-full shadow-lg ml-[30%] ${
              isScrolled && theme === 'dark' ? 'border border-white' : ''
            }`}
          >
            <ul className="flex gap-10 text-white font-semibold">
              <li className="hover:text-orange-500">
                <a href="#home" className="hover:border-b-2 border-orange-500 pb-1">Home</a>
              </li>
              <li className="hover:text-orange-500">
                <a href="#projects" className="hover:border-b-2 border-orange-500 pb-1">Projects</a>
              </li>
              <li className="hover:text-orange-500">
                <a href="#experience" className="hover:border-b-2 border-orange-500 pb-1">Experience</a>
              </li>
              <li className="hover:text-orange-500">
                <a href="#contact" className="hover:border-b-2 border-orange-500 pb-1">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Theme Toggle Switch */}
          <div
            className={`flex items-center cursor-pointer justify-between w-16 h-9 rounded-full p-1 transition-all duration-300 bg-gray-200 relative ml-auto md:ml-2 ${
              isScrolled && theme === 'dark' ? 'border border-white' : ''
            }`}
            onClick={toggleTheme}
            style={{ backgroundColor: theme === 'light' ? '#2f2f2f' : '#2f2f2f' }}
          >
            <div
              className={`w-8 h-8 rounded-full transform transition-transform duration-300 ${
                theme === 'light' ? 'translate-x-0' : 'translate-x-6'
              }`}
              style={{
                backgroundColor: theme === 'light' ? 'white' : 'white',
              }}
            ></div>
            <FaSun
              className={`absolute left-3 text-sm transition-opacity duration-300 ${
                theme === 'dark' ? 'text-yellow-400 opacity-0' : 'text-yellow-400 opacity-100'
              }`}
            />
            <FaMoon
              className={`absolute right-3 text-sm transition-opacity duration-300 ${
                theme === 'light' ? 'text-gray-800 opacity-0' : 'text-yellow-300 opacity-100'
              }`}
            />
          </div>

          {/* Hamburger Icon for Mobile */}
          <FaBars
            className="md:hidden text-black dark:text-white text-2xl cursor-pointer absolute left-5"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50"
            onClick={closeMenu}
          >
            <div className="fixed top-0 left-0 w-2/3 max-w-sm h-full bg-[#2f2f2f] py-8 px-6 z-60 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <FaTimes
                  className="text-white text-2xl cursor-pointer"
                  onClick={closeMenu}
                />
              </div>
              <ul className="text-white text-lg font-medium space-y-6">
                <li>
                  <a href="#home" onClick={closeMenu}>Home</a>
                </li>
                <li>
                  <a href="#projects" onClick={closeMenu}>Projects</a>
                </li>
                <li>
                  <a href="#experience" onClick={closeMenu}>Experience</a>
                </li>
                <li>
                  <a href="#contact" onClick={closeMenu}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
