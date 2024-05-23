'use client';

import { comforta, Cabine } from '../font';
import VideoPlayer from '../components/VideoBackground';
import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';
import PhotoGallery from '../components/PhotoGallery';

export default function Home() {
  return (
    <>
      {/* <section className="relative rounded-sm h-screen bg-cover bg-center flex flex-col justify-center items-center md:bg-chalet-app"> */}
      <section className="relative rounded-sm h-screen bg-cover bg-center flex flex-col justify-center items-center bg-chalet-app">
        {/* Video only visible on mobile */}
        {/* <div className="block md:hidden absolute inset-0 w-full h-full">
          <VideoPlayer src="/videos/flat-video.mp4" />
        </div> */}

        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 bg-gradient-radial from-slate-900 via-transparent to-slate-800 opacity-90 "></div>
        <div
          className={`${Cabine.className} absolute bottom-2 rounded-sm shadow-sm left-2 text-white text-[16px] p-4 bg-slate-500`}
        >
          see photos
        </div>

        <div className="relative flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2 className={`${Cabine.className} text-[40px] mb-4 text-white`}>
              appartement
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
        className={`${Cabine.className} bg-[#fefdfd] text-slate-600 p-2 flex-col justify-center items-center leading-6 text-justify `}
      >
        <div className="  mt-10 mb-10  max-w-[800px] mx-auto ">
          <h3 className=" text-[25px] ">Appartement Remy</h3>
          <h4 className="uppercase mt-1 ml-4 tracking-wide text-[12px]">
            Saint Gervais les bains - Le bettex
          </h4>
          <div className="flex flex-col md:flex-row justify-items-start mt-4">
            <a
              className={`${Cabine.className}  mt-1 ml-4 tracking-wide uppercase text-[12px]`}
            >
              6 personnes + 2
            </a>
            <a
              className={`${Cabine.className}  mt-1 ml-4 tracking-wide uppercase text-[12px]`}
            >
              70 m2
            </a>

            <a
              className={`${Cabine.className}  mt-1 ml-4 tracking-wide uppercase text-[12px]`}
            >
              8 chambres
            </a>
            <a
              className={`${Cabine.className}  mt-1 ml-4 tracking-wide uppercase text-[12px]`}
            >
              2 dortoirs
            </a>
            <a
              className={`${Cabine.className}  mt-1 ml-4 tracking-wide uppercase text-[12px]`}
            >
              9 sdb
            </a>
          </div>
          <p
            className={`${Cabine.className}  mt-7 p-4  tracking-wide  text-[12px] text-justify`}
          >
            Bienvenue dans cet appartement au sein d'un chalet historique de
            Saint-Gervais. Idéalement situé entre Chamonix et Megève, au pied
            des pistes et des chemins de randonnées, vous voici en pleine
            nature, subjugués par la vue imprenable sur le Mont Blanc depuis l'
            immense terrasse. A l'intérieur, la décoration soignée et la
            rénovation intégrale offrent désormais tout le confort moderne pour
            un repos bien mérité après une longue journée au grand air. Un cadre
            parfait pour des vacances inoubliables !
          </p>
        </div>
        <div id="about">
          <PhotoGallery />
        </div>
      </section>

      <Arrow />
    </>
  );
}
