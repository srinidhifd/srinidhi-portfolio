import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import srinidhiSmall from '../assets/srinidhi-small.webp';
import srinidhiMedium from '../assets/srinidhi-medium.webp';
import srinidhiLarge from '../assets/srinidhi-large.webp';
import srinidhiDefault from '../assets/srinidhi.webp';

import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Intro = ({ theme }: { theme: string }) => {
  return (
    <div className="w-4/5 container mx-auto pt-24 pb-10 px-6">
      {/* Top Section */}
      <div
        id="home"
        className={`flex flex-col md:flex-row items-center gap-12 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}
      >
        {/* Left section: Text content */}
        <div className="md:flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 leading-tight">Hi, I'm Srinidhi Kulkarni</h1>
          <p className="text-xl font-medium mb-4">
            Frontend Developer | Open Source Contributor | MCA Graduate
          </p>
          <p className="mt-4 text-md leading-relaxed">
            I specialize in building interactive, responsive web interfaces with modern technologies.
          </p>

          {/* Contact Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-8">
            <a
              href="mailto:srinidhikulkarni25@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl hover:text-orange-500 transition-colors duration-300`}
            >
              <FaEnvelope />
            </a>
            <a
              href="tel:+919731485690"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl hover:text-orange-500 transition-colors duration-300`}
            >
              <FaPhoneAlt />
            </a>
            <a
              href="https://github.com/srinidhifd"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl hover:text-orange-500 transition-colors duration-300`}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/srinidhikulkarni/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl hover:text-orange-500 transition-colors duration-300`}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://drive.google.com/file/d/1HMNzMBECXJNf6MikaopBst_1Qbzx0_NQ/view"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl hover:text-orange-500 transition-colors duration-300`}
            >
              <FaFileAlt />
            </a>
          </div>
        </div>

        {/* Right section: Image */}
        <div className="md:flex-1 flex justify-center md:justify-end">
          <LazyLoadImage
            src={srinidhiDefault}
            srcSet={`${srinidhiSmall} 480w, ${srinidhiMedium} 1024w, ${srinidhiLarge} 1600w`}
            sizes="(max-width: 600px) 480px, (max-width: 1200px) 1024px, 1600px"
            alt="Srinidhi Kulkarni"
            effect="blur"
            className="w-64 h-64 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>

      {/* About Me Section */}
      <div className={`mt-20 text-center md:text-left ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I am a passionate Frontend Developer with a strong foundation in building modern web interfaces.
          I am skilled in using React, JavaScript, and other cutting-edge technologies to create scalable,
          user-friendly web applications.
        </p>
      </div>
    </div>
  );
};

export default Intro;
