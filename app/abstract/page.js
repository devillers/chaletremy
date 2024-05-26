'use client';

import { useState } from 'react';
import Image from 'next/image';
import { comforta, Cabine } from '../font';
import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import photos from '../json/chalet-1.json';

// Importation des styles supplémentaires pour le Lightbox
import '../../public/style/lightbox-custom.css';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  return (
    <>
      <section className="relative rounded-sm h-screen bg-chalet-abstract-0 bg-cover bg-center flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2
              className={`${Cabine.className} uppercase text-[40px] mb-4 text-white`}
            >
              abstract
            </h2>
            <p
              className={`${comforta.className} text-[15px] mb-8 font-poppin text-white`}
            ></p>
            <ArrowDown />
          </div>
        </div>
        <h3 className="uppercase absolute -bottom-[5px] -left-[2px] text-5xl text-white text-opacity-40">
          abstract
        </h3>
      </section>

      {/* Content */}
      <section
        id="about"
        className={`${Cabine.className} flex flex-col justify-center items-center max-w-[900px] mx-auto`}
      >
        <div className="grid grid-cols-3 gap-1 w-full">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative w-full"
              style={{ paddingBottom: '100%' }} // Maintain aspect ratio
              onClick={() => openLightbox(index)}
            >
              <Image
                src={photo.src}
                alt={`Photo ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
          ))}
        </div>
        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={photos.map((photo) => ({ src: photo.src }))}
            index={currentImage}
            onIndexChange={setCurrentImage}
            className="lightbox-modal"
            render={{
              slide: ({ slide }) => (
                <div className="lightbox-border">
                  <img
                    src={slide.src}
                    alt=""
                    style={{ width: '20%', height: '40%', margin: '0 auto' }}
                  />
                </div>
              ),
            }}
          />
        )}
      </section>

      <Arrow />
    </>
  );
}
