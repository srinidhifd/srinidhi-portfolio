import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2f2f2f] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Brand/Tagline */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold">Srinidhi Kulkarni</h4>
          <p className="text-sm mt-2">Building modern, interactive web experiences</p>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="mt-6 md:mt-0 flex space-x-6">
          <a href="mailto:srinidhikulkarni25@gmail.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-orange-500 transition-colors duration-300">
            <FaEnvelope />
          </a>
          <a href="https://github.com/srinidhifd" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-orange-500 transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/srinidhikulkarni/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-orange-500 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-orange-500 transition-colors duration-300">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="max-w-6xl mx-auto mt-8 text-center text-sm border-t border-gray-600 pt-4">
        <p>&copy; {new Date().getFullYear()} Srinidhi Kulkarni. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
