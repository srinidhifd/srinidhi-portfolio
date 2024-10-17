import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaAngular, FaPython, FaPhp, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMysql, SiMongodb, SiExpress } from 'react-icons/si';

const Skills = ({ theme }: { theme: string }) => (
  <div id="skills" className={`py-8 px-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
    <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
    <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
      {/* Skill Cards */}
      {[
        { Icon: FaHtml5, name: 'HTML', color: 'text-orange-600' },
        { Icon: FaCss3Alt, name: 'CSS', color: 'text-blue-600' },
        { Icon: FaBootstrap, name: 'Bootstrap', color: 'text-purple-600' },
        { Icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-blue-400' },
        { Icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500' },
        { Icon: FaReact, name: 'React.js', color: 'text-blue-500' },
        { Icon: FaAngular, name: 'Angular', color: 'text-red-600' },
        { Icon: FaPython, name: 'Python', color: 'text-blue-400' },
        { Icon: FaPhp, name: 'PHP', color: 'text-indigo-700' },
        { Icon: FaNodeJs, name: 'Node.js', color: 'text-green-600' },
        { Icon: SiExpress, name: 'Express.js', color: 'text-gray-600' },
        { Icon: SiMysql, name: 'MySQL', color: 'text-orange-500' },
        { Icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
        { Icon: FaFigma, name: 'Figma', color: 'text-pink-500' },
      ].map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-3 w-24 h-24 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white hover:shadow-lg transition-all duration-300"
        >
          <skill.Icon className={`text-3xl ${skill.color}`} />
          <p className="mt-2 font-medium text-sm">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
