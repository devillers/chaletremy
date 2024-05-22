'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // Make sure you import Image from next/image
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

  useEffect(() => {
    if (isVideoLoaded && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Video playback failed:', error);
      });
    }
  }, [isVideoLoaded]);

  return (
    <>
      <section className="relative rounded-sm h-screen bg-cover bg-center flex flex-col justify-center items-center md:bg-chalet-app">
        {/* Placeholder image for mobile view */}
        {!isVideoLoaded && (
          <Image
            src="/images/background-seminaire.png" // Ensure this path is correct
            alt="Placeholder"
            fill
            sizes="(max-width: 768px) 100vw, 100vw" // Define sizes for responsive design
            style={{ objectFit: 'cover' }}
            className="absolute inset-0 w-full h-full md:hidden"
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
            src="/videos/seminaire-video.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            controls={false} // Hide video controls
          ></video>
        </div>

        {/* Static image for medium and larger screens */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <Image
            src="/images/background-seminaire.png" // Ensure this path is correct
            alt="Chalet"
            fill
            sizes="(min-width: 768px) 100vw, 100vw" // Define sizes for responsive design
            style={{ objectFit: 'cover' }}
            className="w-full h-full"
          />
        </div>

        <div className="absolute inset-0 bg-black opacity-20 bg-blend-difference"></div>
        <div className="relative flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2 className={`${lobster.className} text-[40px] mb-4 text-white`}>
              L'appartement
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
