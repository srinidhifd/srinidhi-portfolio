interface ProjectProps {
  name: string;
  description: string;
  techStack: string[];
  github: string;
  live: string;
}

const Project = ({ name, description, techStack, github, live }: ProjectProps) => (
  <div className="p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full md:w-[30%] flex flex-col justify-between dark:bg-gray-800 bg-white dark:text-gray-100 text-black border border-gray-300 dark:border-gray-700">
    <h3 className="text-2xl font-semibold mb-1">{name}</h3>
    <p className="mb-2">{description}</p>
    <div className="mb-1">
      <h4 className="font-semibold mb-1">Tech Stack:</h4>
      <ul className="flex flex-wrap gap-2 mt-2">
        {techStack.map((tech, index) => (
          <li key={index} className="inline-block bg-gray-200 dark:bg-[#334155] px-2 py-1 rounded-md text-sm">
            {tech}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex justify-between mt-4">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-orange-400 transition-colors"
      >
        GitHub
      </a>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-orange-400 transition-colors"
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
    <h2 className="text-4xl font-bold mb-10">Projects</h2>
    <div className="flex flex-wrap justify-around gap-8">
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
