'use client';
import { comforta, lobster } from '../font';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Plane from '../components/Plane';
import Train from '../components/Train';
import Voiture from '../components/Voiture';
import Helico from '../components/Helico';
import ArrowDown from '../components/ArrowDown';

export default function ContactPage() {
  return (
    <div id="home" className="relative h-screen w-full">
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

      <section className="relative z-10 flex flex-col items-center justify-center h-full w-full mx-auto">
        <Navbar />
        <div className="text-center">
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
      </section>

      <div className="min-h-screen flex flex-col items-center justify-center tracking-wide">
        <div className="w-full mt-[90px] lg:w-full max-w-4xl space-y-8 p-4">
          <div className="mt-5 ml-5 text-slate-600">
            <h1 className={`${lobster.className} text-3xl mb-1 `}>
              Chalet Remy
            </h1>
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
        </div>
      </div>
    </div>
  );
}
