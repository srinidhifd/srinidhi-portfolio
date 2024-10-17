const Footer = ({ theme }: { theme: string }) => {
  return (
    <footer
      className={`flex items-center justify-center px-6 w-full h-16 ${
        theme === 'dark'
          ? 'bg-[#1e293b] text-white shadow-lg'
          : 'bg-white text-gray-800 shadow-[0px_4px_20px_rgba(0,0,0,0.15)]'
      }`}
    >
      {/* Bottom Section: Copyright */}
      <div className="w-full max-w-6xl text-center text-sm font-semibold">
        <p className="h-full flex items-center justify-center">
          &copy; {new Date().getFullYear()} Srinidhi Kulkarni. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
