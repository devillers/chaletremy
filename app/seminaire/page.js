'use client';

import { useState, useEffect, useRef } from 'react';
import { comforta, lobster } from '../font';
import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoLoaded = () => {
      setIsVideoLoaded(true);
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error('Video playback failed:', error);
        });
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleVideoLoaded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', handleVideoLoaded);
      }
    };
  }, []);

  return (
    <>
      <section className="relative rounded-sm h-screen bg-cover bg-center flex flex-col justify-center items-center md:bg-chalet-app">
        {/* Placeholder image for mobile view */}
        {!isVideoLoaded && (
          <img
            src="/images/background-seminaire.png" // Replace with your placeholder image path
            alt="Placeholder"
            className="absolute inset-0 w-full h-full object-cover md:hidden"
          />
        )}

        {/* Video player for mobile view */}
        <div
          className={`absolute inset-0 w-full h-full ${
            isVideoLoaded ? '' : 'hidden'
          } md:hidden`}
        >
          <video
            ref={videoRef}
            src="/videos/8716790-hd_1280_720_25fps.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          ></video>
        </div>

        {/* Static image for medium and larger screens */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <img
            src="/images/background-seminaire.png" // Replace with your large image path
            alt="Chalet"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black opacity-20 bg-blend-difference"></div>
        <div className="relative flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2 className={`${lobster.className} text-[40px] mb-4 text-white`}>
              Séminaire
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
        className="p-6 flex-col justify-center items-center leading-6 text-justify"
      >
        flat
      </section>

      <Arrow />
    </>
  );
}
