'use client';

import { comforta, lobster } from '../font';

import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';
import Plane from '../components/Plane';
import Train from '../components/Train';
import Voiture from '../components/Voiture';
import Helico from '../components/Helico';

export default function Home() {
  return (
    <>
      <section className="relative rounded-sm h-screen bg-chalet-booking bg-cover bg-center flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-20 bg-blend-difference"></div>
        <div className="relative flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2 className={`${lobster.className} text-[40px] mb-4 text-white`}>
              Accès
            </h2>
            <p
              className={`${comforta.className} text-[15px] mb-8 font-poppin text-white`}
            ></p>
            <ArrowDown />
          </div>
        </div>
      </section>

      {/* Content */}

      <section
        id="about"
        className=" p-6 flex-col justify-center items-center leading-6 text-justify"
      >
        <div className="mt-5 ml-5 text-slate-600">
          <h1 className={`${lobster.className} text-3xl mb-1 `}>Chalet Remy</h1>
          <hr />
          <p className={`${comforta.className} text-[10px] mt-3`}>
            520 route des communailles
          </p>
          <p className={`${comforta.className} text-[10px] mt-1`}>
            74170 Saint Gervais les Bains
          </p>
        </div>
        <div className="bg-white p-4 flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <img
              src="/plan.png"
              alt="Form Image"
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>

        <div className="w-[90%] mx-auto  ">
          <Plane />
          <Train />
          <Voiture />
          <Helico />
        </div>
      </section>

      <Arrow />
    </>
  );
}
