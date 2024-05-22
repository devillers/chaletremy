'use client';

import { useEffect, useRef, useState } from 'react';
import { comforta, lobster } from '../font';
import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = src;
      videoRef.current.play().catch((error) => {
        console.error('Error attempting to play the video:', error);
      });
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      muted
      loop
      playsInline
      preload="auto"
    />
  );
};

const Background = ({ videoSrc, imgSrc }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.onloadeddata = () => {
      setIsVideoLoaded(true);
    };
    video.load();
  }, [videoSrc]);

  return (
    <div className="relative rounded-sm h-screen bg-cover bg-center flex flex-col justify-center items-center">
      {isVideoLoaded ? (
        <VideoPlayer src={videoSrc} />
      ) : (
        <img
          src={imgSrc}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black opacity-20 bg-blend-difference"></div>
      <div className="relative flex flex-col items-center justify-center h-full w-full mx-auto">
        <div className="text-center mt-20">
          <h2 className={`${lobster.className} text-[40px] mb-4 text-white`}>
            séminaires
          </h2>
          <p
            className={`${comforta.className} text-[15px] mb-8 font-poppin text-white`}
          ></p>
          <ArrowDown />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Background
        videoSrc="/videos/9575733-hd_1080_1920_30fps.mp4"
        imgSrc="/images/background.jpg"
      />
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
