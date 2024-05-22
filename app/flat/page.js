'use client';

import { comforta, lobster } from '../font';
import VideoPlayer from '../components/VideoInsta';
import PhotoGallery from '../components/PhotoGallery';
import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';

export default function Home() {
  return (
    <>
      <section className="relative rounded-sm h-screen bg-chalet-remy bg-cover bg-center flex flex-col justify-center items-center">
        <div className="md:hidden">
          <VideoPlayer src="/videos/9575733-hd_1080_1920_30fps.mp4" />
        </div>

        <div className="absolute inset-0 bg-black opacity-20 bg-blend-difference"></div>
        <div className="relative flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2 className={`${lobster.className} text-[40px] mb-4 text-white`}>
              l'appartement{' '}
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
        className=" h-screen p-6 flex-col justify-center items-center leading-6 text-justify"
      >
        flat
      </section>

      <Arrow />
    </>
  );
}
