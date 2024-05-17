import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className="absolute top-8 left-8">
        <Image
          src="/logo.png" // replace with your image path
          alt="Luxury Chalet"
          objectFit="cover"
          quality={100}
          height={100}
          width={100}
          priority
          className="object-cover"
        />
      </div>
      <div className="fixed top-8 right-10 space-x-4">
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none relative"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <svg
                className={`absolute w-6 h-6 transition-transform duration-300 transform text-black ${
                  isOpen ? 'rotate-45 translate-x-[100px]' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  }
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              href="#home"
              className="text-sm block mt-4 lg:inline-block lg:mt-0 uppercase text-black hover:text-gray-900 mr-4"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block mt-4 lg:inline-block lg:mt-0 uppercase text-black hover:text-gray-900 mr-4"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block mt-4 lg:inline-block lg:mt-0 uppercase text-black hover:text-gray-900 mr-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
