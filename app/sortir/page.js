'use client';

import VideoPlayer from '../components/VideoBackground';
import { comforta, Cabine } from '../font';
import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import the MapComponent for client-side rendering
const DynamicMap = dynamic(() => import('../components/MapComponent'), {
  ssr: false, // This ensures Leaflet is only rendered on the client side
});

export default function Sortir() {
  return (
    <>
      <section className="relative rounded-sm h-screen md:h-[400px] bg-cover bg-center flex flex-col justify-center items-center md:bg-chalet-seminaire">
        {/* Video only visible on mobile */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <VideoPlayer src="/videos/flat-video.mp4" />
        </div>

        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2
              className={`${Cabine.className} text-[40px] mb-4 text-white uppercase`}
            >
              sortir
            </h2>
            <p
              className={`${comforta.className} text-[15px] mb-8 font-poppin text-white`}
            ></p>
            <ArrowDown />
          </div>
        </div>
        <h3 className="uppercase absolute -bottom-[5px] -left-[2px] text-5xl text-white text-opacity-40">
          sortir
        </h3>
      </section>

      {/* Content */}
      <section
        id="about"
        className=" p-6 flex flex-col md:flex-row justify-center items-center leading-6 text-justify overflow-hidden"
      >
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex">
          <div className="w-full h-full">
            <DynamicMap address="520 route des communailles, 74170, Saint Gervais les bains " />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-red-400">empty</div>
      </section>

      <Arrow />
    </>
  );
}
