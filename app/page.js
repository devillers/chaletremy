'use client';
import { comforta, lobster } from './font';
import Image from 'next/image';
import Navbar from './components/Navbar';

// const robotoMono = Roboto_Mono({
//   subsets: ['latin'],
//   weight: '400', // You can specify weights like '400', '700', etc. if needed
// });

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/chalet-remy.jpg" // replace with your image path
          alt="Luxury Chalet"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="object-cover w-full h-full"
        />
        {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Logo */}
        <div className="absolute top-8 left-8">
          {/* <h1 className="text-2xl font-bold">Chalet Remy</h1> */}
          <Image
            src="/logo.png" // replace with your image path
            alt="Luxury Chalet"
            // layout="fill"
            objectFit="cover"
            quality={100}
            height={100}
            width={100}
            priority
            className="object-cover"
          />
        </div>

        {/* Navigation Menu */}

        <Navbar />

        {/* <nav className="absolute top-8 right-10 space-x-4">
          <a
            href="#home"
            className="text-md uppercase font-poppin tracking-wide"
          >
            Accueil
          </a>
          <a
            href="#about"
            className="text-xs uppercase font-poppin tracking-wide"
          >
            A propos
          </a>
          <a
            href="#amenities"
            className="text-xs uppercase font-poppin tracking-wide"
          >
            Equipements
          </a>
          <a
            href="#gallery"
            className="text-xs uppercase font-poppin tracking-wide"
          >
            Histoire
          </a>
          <a
            href="#contact"
            className="text-xs uppercase font-poppin tracking-wide"
          >
            Contact
          </a>
        </nav> */}

        {/* Main Text */}
        <div className="text-center">
          <h2 className={`${lobster.className} text-[40px]  mb-4 `}>
            Bienvenue au Chalet Remy
          </h2>
          <p className={`${comforta.className} text-[20px] mb-8 font-poppin`}>
            Saint Gervais les Bains - 26 personnes
          </p>
          <a
            href="#discover"
            className={` ${comforta.className} px-6 py-3 font-poppin text-white  border-white border-2  rounded hover:bg-white hover:text-black`}
          >
            découvrir
          </a>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 bg-black bg-opacity-50 text-white">
        <div>
          <p>tél: 06 89 89 89 90</p>
          <p>Email: info@chaletremy.com</p>
        </div>
        <div>
          <a href="#facebook" className="mr-4">
            Facebook
          </a>
          <a href="#instagram" className="mr-4">
            Instagram
          </a>
          <a href="#twitter">Twitter</a>
        </div>
        <div>
          <p>&copy; 2024 Chalet Remy. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}
