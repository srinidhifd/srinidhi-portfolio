const Footer = ({ theme }: { theme: string }) => {
  return (
    <footer className={`flex items-center justify-center px-6 w-full h-16 ${theme === 'dark' ? 'bg-[#1e293b] text-white' : 'bg-gray-100 text-black'}`}>
      {/* Bottom Section: Copyright */}
      <div className="w-full text-center text-sm">
        <p className="h-full flex items-center justify-center">&copy; {new Date().getFullYear()} Srinidhi Kulkarni. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
