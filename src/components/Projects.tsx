import React from 'react';

interface ProjectProps {
  name: string;
  description: string;
  github: string;
  live: string;
}

const Project = ({ name, description, github, live }: ProjectProps) => (
  <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="mt-2">{description}</p>
    <div className="mt-4 space-x-4">
      <a href={github} target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>
      <a href={live} target="_blank" rel="noopener noreferrer" className="underline">Live Preview</a>
    </div>
  </div>
);

const Projects = () => (
  <div id="projects" className="py-20 text-center">
    <h2 className="text-3xl font-bold">Projects</h2>
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      <Project
        name="Project 1"
        description="Details about your first project."
        github="https://github.com/yourrepo"
        live="https://livepreview.com"
      />
      <Project
        name="Project 2"
        description="Details about another project."
        github="https://github.com/yourrepo"
        live="https://livepreview.com"
      />
    </div>
  </div>
);

export default Projects;
