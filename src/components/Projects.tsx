interface ProjectProps {
  name: string;
  description: string;
  techStack: string[];
  github: string;
  live: string;
}

const Project = ({ name, description, techStack, github, live }: ProjectProps) => (
  <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow w-full md:w-1/3 lg:w-1/4 flex flex-col justify-between dark:bg-[#1e293b] bg-white dark:text-gray-100 text-black border border-gray-300 dark:border-transparent">
    <h3 className="text-xl font-bold mb-4">{name}</h3>
    <p className="mb-4 text-justify">{description}</p>
    <div className="mb-4">
      <h4 className="font-semibold">Tech Stack:</h4>
      <ul className="flex flex-wrap gap-2 mt-2">
        {techStack.map((tech, index) => (
          <li key={index} className="inline-block bg-gray-200 dark:bg-[#334155] px-2 py-1 rounded-md text-sm">
            {tech}
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-4 space-x-4">
      <a href={github} target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-400 transition-colors">
        GitHub
      </a>
      <a href={live} target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-400 transition-colors">
        Live Preview
      </a>
    </div>
  </div>
);

const Projects = ({ theme }: { theme: string }) => (
  <div
    id="projects"
    className={`py-20 px-6 text-center ${theme === 'dark' ? 'text-white ' : 'text-black '}`}
  >
    <h2 className="text-4xl font-bold mb-10">Projects</h2>
    <div className="flex flex-wrap justify-center gap-8">
      <Project
        name="Movie App"
        description="Web app to search and manage movie collections with an intuitive user interface."
        techStack={['Angular', 'Node.js', 'Bootstrap', 'OMDb API']}
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
