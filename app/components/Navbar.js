import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { comforta, lobster } from '../font';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      if (position > 50) {
        setIsNavbarVisible(false);
      }
    };

    const handleMouseMove = () => {
      setIsNavbarVisible(true);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full transition-opacity duration-500 ${
        !isNavbarVisible && scrollPosition > 50 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className=" backdrop-blur-lg shadow-lg transition backdrop-filter duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <div className="flex items-center cursor-pointer">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    <span
                      className={`${lobster.className} ml-4 text-2xl font-bold text-slate-600 tracking-wide`}
                    >
                      Chalet Remy
                    </span>
                  </div>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <span
                      className={`${comforta.className} text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
                    >
                      Accueil
                    </span>
                  </Link>
                  <Link href="/flat">
                    <span
                      className={`${comforta.className} text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
                    >
                      L'appartement
                    </span>
                  </Link>
                  <Link href="/contact">
                    <span
                      className={`${comforta.className} text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
                    >
                      Contact
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="ml-14 px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/">
                <span
                  className={`${comforta.className} text-gray-800 hover:text-gray-600 block px-3 py-2  cursor-pointer  text-[13px]`}
                >
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span
                  className={`${comforta.className} text-gray-800 hover:text-gray-600 block px-3 py-2  cursor-pointer  text-[13px]`}
                >
                  About
                </span>
              </Link>
              <Link href="/contact">
                <span
                  className={`${comforta.className} text-gray-800 hover:text-gray-600 block px-3 py-2  cursor-pointer  text-[13px]`}
                >
                  Contact
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
