import { useEffect, useState } from 'react';

export default function ArrowDown() {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
      setIsVisible(false); // Hide the button after it is pressed
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(false); // Hide the button if the user scrolls down
    } else {
      setIsVisible(true); // Show the button if the user scrolls back to the top
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible && (
      <button
        type="button"
        onClick={scrollToAbout}
        className="block fixed left-1/2 md:hidden transform -translate-x-1/2 translate-y-1/2 p-3 rounded-full bg-white text-black shadow-lg hover:bg-gray-700 hover:text-white transition-opacity duration-300 opacity-100 blink"
        aria-label="Scroll to About section"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    )
  );
}
