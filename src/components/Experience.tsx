const Experience = ({ theme }: { theme: string }) => (
  <div id="experience" className={`py-20 px-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
    <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
    <div className="mt-8 space-y-6 max-w-4xl mx-auto">
      {/* Freelance Full Stack Developer Experience */}
      <div className="p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h3 className="text-2xl font-semibold mb-1">Lumin AI Systems</h3>
            <h4 className="text-lg italic font-medium mb-2 md:mb-0">Freelance Full Stack Developer</h4>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-right mt-2 md:mt-0">
            <p>Sep 2024 - Present</p>
            <p>Remote</p>
          </div>
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
      <div className="p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h3 className="text-2xl font-semibold mb-1">Lumin AI Systems</h3>
            <h4 className="text-lg italic font-medium mb-2 md:mb-0">Full Stack Developer Intern</h4>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-right mt-2 md:mt-0">
            <p>Oct 2023 - Nov 2023</p>
            <p>Bengaluru</p>
          </div>
        </div>
        <p className="text-justify">
          Developed a predictive analytics system to assess heart attack risk using machine learning algorithms, enhancing the accuracy of predictions.
        </p>
      </div>

      {/* Open Source Contributions */}
      <div className="p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white">
        <h3 className="text-2xl font-semibold mb-4">Open Source Contribution</h3>

        {/* Hacktoberfest Contribution */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h4 className="text-lg font-medium">Hacktoberfest 2024</h4>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-right mt-2 md:mt-0">
            <p>Oct 2024</p>
            <p>Contributor · Remote</p>
          </div>
        </div>
        <p className="mt-2">
          Contributed to the WildGuard repository with 5+ successfully merged PRs, refining features and fixing bugs.
        </p>

        {/* GSSOC Contribution */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 mt-6">
          <div>
            <h4 className="text-lg font-medium">Girl Script Summer of Code (GSSOC’24)</h4>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-right mt-2 md:mt-0">
            <p>May 2024 - Aug 2024</p>
            <p>Contributor · Remote</p>
          </div>
        </div>
        <p className="mt-2">
          Ranked 253 among 27k+ participants, contributed to the DotBox repository by creating 12+ issues and merging 7 PRs.
          Secured 655 points on the leaderboard and received 6 badges, including Explorer Badge and Champion Badge for outstanding contributions.
        </p>
      </div>
    </div>
  </div>
);

export default Experience;
