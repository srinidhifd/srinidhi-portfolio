const Experience = ({ theme }: { theme: string }) => (
  <div id="experience" className={`py-20 px-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
    <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
    <div className="mt-8 space-y-6 max-w-4xl mx-auto">
      {/* Freelance Full Stack Developer Experience */}
      <div className="p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white relative">
        <h3 className="text-2xl font-semibold mb-1">Lumin AI Systems</h3>
        <h4 className="text-lg italic font-medium mb-2">Freelance Full Stack Developer</h4>
        <div className="flex flex-col text-sm text-gray-500 dark:text-gray-400 md:text-right mb-4 md:mb-0 md:absolute md:top-8 md:right-4">
          <p>Sep 2024 - Present</p>
          <p>Remote</p>
        </div>
        <div className="space-y-2 text-justify">
          <p>
            Improved user interfaces and resolved UI bugs for SST Cutting Tools using React.js, as part of a system built on FastAPI and PostgreSQL.
          </p>
          <p>
            Designed and implemented responsive dashboards for ERP systems at Yespee Engineering and Pro B Machines Pvt Ltd using React.js and Tailwind CSS, improving performance and usability.
          </p>
        </div>
      </div>
      {/* Full Stack Developer Intern Experience */}
      <div className="p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white relative">
        <h3 className="text-2xl font-semibold mb-1">Lumin AI Systems</h3>
        <h4 className="text-lg italic font-medium mb-2">Full Stack Developer Intern</h4>
        <div className="flex flex-col text-sm text-gray-500 dark:text-gray-400 md:text-right mb-4 md:mb-0 md:absolute md:top-8 md:right-4">
          <p>Oct 2023 - Nov 2023</p>
          <p>Bengaluru</p>
        </div>
        <p className="text-justify">
          Developed a predictive analytics system to assess heart attack risk using machine learning algorithms, enhancing the accuracy of predictions.
        </p>
      </div>
    </div>
  </div>
);

export default Experience;
