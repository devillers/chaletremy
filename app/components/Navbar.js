// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="absolute top-8 right-10 space-x-4">
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              href="/"
              className=" text-sm block mt-4 lg:inline-block lg:mt-0 uppercase font-poppin text-white hover:text-gray-400 mr-4"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 uppercase font-poppin text-white hover:text-gray-400 mr-4"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 uppercase font-poppin text-white hover:text-gray-400 mr-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
