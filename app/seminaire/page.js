'use client';

import { comforta, lobster, Cabine } from '../font';
import VideoPlayer from '../components/VideoBackground';
import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';

export default function Home() {
  return (
    <>
      <section className="relative rounded-sm h-screen md:h-[400px]  bg-cover bg-center flex flex-col justify-center items-center md:bg-chalet-seminaire">
        {/* Video only visible on mobile */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <VideoPlayer src="/videos/seminaire-video.mp4" />
        </div>

        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 bg-black bg-opacity-40 "></div>
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
        <h3 className="uppercase absolute -bottom-[5px] -left-[2px] text-5xl text-white text-opacity-40">
          {' '}
          séminaires
        </h3>
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
