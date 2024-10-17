import { FaEnvelope,FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = ({ theme }: { theme: string }) => (
  <div id="contact" className={`py-20 px-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
    <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
    <p className="text-lg text-center mb-10">Feel free to reach out to me through any of the following channels:</p>
    <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
      {/* Contact Cards */}
      {[
        {
          Icon: FaEnvelope,
          value: 'srinidhikulkarni25@gmail.com',
          href: 'mailto:srinidhikulkarni25@gmail.com',
          color: theme === 'dark' ? 'text-blue-300' : 'text-blue-500',
        },
        {
          Icon: FaPhone,
          value: '+91 9731485690',
          href: 'tel:+919731485690',
          color: theme === 'dark' ? 'text-green-300' : 'text-green-500',
        },
        {
          Icon: FaLinkedin,
          value: 'LinkedIn Profile',
          href: 'https://linkedin.com/in/srinidhikulkarni',
          color: theme === 'dark' ? 'text-blue-500' : 'text-blue-600',
        },
        {
          Icon: FaGithub,
          value: 'GitHub Profile',
          href: 'https://github.com/srinidhifd',
          color: theme === 'dark' ? 'text-white' : 'text-gray-800',
        },
      ].map((contact, index) => (
        <div
          key={index}
          className="flex items-center justify-center p-6 w-72 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white hover:shadow-lg transition-all duration-300"
        >
          <contact.Icon className={`text-4xl mr-4 ${contact.color}`} />
          <a
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold hover:underline"
          >
            {contact.value}
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Contact;
