import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

interface ScrollToTopButtonProps {
  theme: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-3 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`flex items-center justify-center p-3 rounded-full shadow-lg transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-gray-700 text-white hover:bg-gray-600'
              : 'bg-[#1e293b] text-white hover:bg-gray-600'
          }`}
          aria-label="Scroll to Top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
