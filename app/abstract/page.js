'use client';
import { comforta, Cabine } from '../font';

import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';

export default function Home() {
  return (
    <>
      <section className="relative rounded-sm h-screen bg-chalet-abstract-0  bg-cover bg-center flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black bg-opacity-40 "></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2
              className={`${Cabine.className} uppercase text-[40px] mb-4 text-white`}
            >
              abstract
            </h2>
            <p
              className={`${comforta.className} text-[15px] mb-8 font-poppin text-white`}
            ></p>
            <ArrowDown />
          </div>
        </div>
        <h3 className="uppercase absolute -bottom-[5px] -left-[2px] text-5xl text-white text-opacity-40">
          {' '}
          abstract
        </h3>
      </section>

      {/* Content */}
      <section
        id="about"
        className={`${Cabine.className}  flex justify-center items-center`}
      ></section>

      <Arrow />
    </>
  );
}
