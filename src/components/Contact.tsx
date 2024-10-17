import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => (
  <div className="container mx-auto my-12 px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
    <p className="text-lg mb-8">Feel free to reach out to me through any of the following channels:</p>
    <div className="flex flex-col md:flex-row justify-center gap-8">
      <div className="flex items-center gap-4">
        <FaEnvelope className="text-2xl text-blue-400" />
        <a href="mailto:srinidhikulkarni25@gmail.com" className="text-xl hover:underline">srinidhikulkarni25@gmail.com</a>
      </div>
      <div className="flex items-center gap-4">
        <FaPhone className="text-2xl text-green-400" />
        <a href="tel:+919731485690" className="text-xl hover:underline">+91 9731485690</a>
      </div>
      <div className="flex items-center gap-4">
        <FaLinkedin className="text-2xl text-blue-600" />
        <a href="https://linkedin.com/in/srinidhikulkarni" className="text-xl hover:underline">LinkedIn Profile</a>
      </div>
      <div className="flex items-center gap-4">
        <FaGithub className="text-2xl text-gray-800" />
        <a href="https://github.com/srinidhifd" className="text-xl hover:underline">GitHub Profile</a>
      </div>
    </div>
  </div>
);

export default Contact;
