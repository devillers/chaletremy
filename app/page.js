'use client';
import { comforta, lobster } from './font';
import Navbar from './components/Navbar';
import Arrow from './components/ArrowUp';
import ArrowDown from './components/ArrowDown';

export default function Home() {
  return (
    <>
      <section className="relative rounded-sm h-screen bg-chalet-pmr bg-cover bg-center flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-20 bg-blend-difference"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2 className={`${lobster.className} text-[40px] mb-4 text-white`}>
              Bienvenue au Chalet Remy
            </h2>
            <p
              className={`${comforta.className} text-[15px] mb-8 font-poppin text-white`}
            >
              Saint Gervais les Bains - 26 personnes
            </p>
            <ArrowDown />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 flex flex-col items-center justify-center h-full w-full mx-auto">
        <Navbar />
      </section>

      <section
        id="about"
        className={`${lobster.className} h-screen flex justify-center items-center`}
      >
        <p className="text-[80px]">about</p>
      </section>

      <Arrow />
    </>
  );
}
