'use client';

import { comforta, lobster, Cabine } from '../font';
import VideoPlayer from '../components/VideoBackground';
import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';

export default function Home() {
  return (
    <>
      <section className="relative rounded-sm h-screen bg-cover bg-center flex flex-col justify-center items-center md:bg-chalet-seminaire">
        {/* Video only visible on mobile */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <VideoPlayer src="/videos/seminaire-video.mp4" />
        </div>

        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 bg-black opacity-40 bg-blend-difference"></div>
        <div className="relative flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2 className={`${Cabine.className} text-[40px] mb-4 text-white`}>
              séminaires
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
        className="h-screen p-6 flex-col justify-center items-center leading-6 text-justify"
      >
        content
      </section>

      <Arrow />
    </>
  );
}
