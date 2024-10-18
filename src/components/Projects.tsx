interface ProjectProps {
  name: string;
  description: string;
  techStack: string[];
  github: string;
  live: string;
}

const Project = ({ name, description, techStack, github, live }: ProjectProps) => (
  <div className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full md:w-[30%] flex flex-col justify-between dark:bg-gray-800 bg-white dark:text-gray-100 text-black border border-gray-300 dark:border-gray-700 hover:transform hover:scale-105 duration-300">
    <h3 className="text-2xl font-semibold mb-3">{name}</h3>
    <p className="mb-2 text-sm text-justify leading-relaxed">{description}</p>
    <div className="mb-2">
      <h4 className="font-semibold mb-2 text-sm">Tech Stack:</h4>
      <ul className="flex flex-wrap gap-2 justify-center">
        {techStack.map((tech, index) => (
          <li key={index} className="inline-block bg-gray-200 dark:bg-[#334155] px-2 py-1 rounded-md text-xs font-medium">
            {tech}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex justify-between mt-6 gap-3">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center px-2 py-2 rounded dark:bg-[#475569] bg-gray-200 text-black dark:text-white text-sm font-semibold hover:bg-gray-300 dark:hover:bg-[#3b4758] transition-all duration-300"
      >
        GitHub
      </a>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center px-2 py-2 rounded dark:bg-[#475569] bg-gray-200 text-black dark:text-white text-sm font-semibold hover:bg-gray-300 dark:hover:bg-[#3b4758] transition-all duration-300"
      >
        Live Preview
      </a>
    </div>
  </div>
);

const Projects = ({ theme }: { theme: string }) => (
  <div
    id="projects"
    className={`py-16 px-6 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}
  >
    <h2 className="text-4xl font-bold mb-12">Projects</h2>
    <div className="flex flex-wrap justify-around gap-10">
      <Project
        name="Movie App"
        description="Web app to search and manage movie collections with an intuitive user interface."
        techStack={['Angular', 'Bootstrap', 'OMDb API']}
        github="https://github.com/srinidhifd/AngularMovieWebsite"
        live="https://movie-hub-omdbi.netlify.app/signin"
      />
      <Project
        name="Password Generator"
        description="A password generator with customization options including length and character types."
        techStack={['Angular', 'Bootstrap']}
        github="https://github.com/srinidhifd/password-generator"
        live="https://password-generators-sk.netlify.app/"
      />
      <Project
        name="Portfolio Website"
        description="Personal portfolio website featuring dark mode support."
        techStack={['React', 'TailwindCSS']}
        github="https://github.com/srinidhifd/srinidhi-portfolio"
        live="https://srinidhi-kulkarni.vercel.app/"
      />
    </div>
  </div>
);

export default Projects;
