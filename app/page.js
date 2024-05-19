'use client';
import { comforta, lobster } from './font';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Arrow from './components/ArrowUp';
import Footer from './components/Footer';
import ArrowDown from './components/ArrowDown';

export default function Home() {
  return (
    <div id="home" className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/chalet-remy0.jpg"
          alt="Luxury Chalet"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
          className="object-cover w-full h-full "
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full mx-auto">
        <Navbar />
        <section className="text-center">
          <h2 className={`${lobster.className} text-[40px] mb-4 text-white`}>
            Bienvenue au Chalet Remy
          </h2>
          <p
            className={`${comforta.className} text-[15px] mb-8 font-poppin text-white`}
          >
            Saint Gervais les Bains - 26 personnes
          </p>
          <ArrowDown />
        </section>
      </div>

      <div
        id="about"
        className={`${lobster.className} h-screen flex justify-center items-center bg-slate-100`}
      >
        <p className="text-[80px]">about</p>
      </div>

      <Arrow />
      <Footer />
    </div>
  );
}
