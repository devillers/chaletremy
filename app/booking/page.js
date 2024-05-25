'use client';
import Image from 'next/image';
import React from 'react';
import { comforta, Cabine } from '../font';
import Link from 'next/link';
import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';

const items = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#be185d"
      >
        <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
      </svg>
    ),
    text: 'infos & réservation',
    capacite: '14/26 voyageurs',
    surface: '525 m2 sur 4 niveaux',
    href: 'https://chalet-remy.lodgify.com/fr/appartement-remy---8p---ski-in',
    image: '/chalet/chalet-remy2.jpg',
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#be185d"
      >
        <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
      </svg>
    ),
    text: 'infos & réservation',
    capacite: '6/8 voyageurs',
    surface: 'Surface de 68 m2',
    href: 'https://chalet-remy.lodgify.com/fr/chalet-remy-chalet-prestige-face-au-mont-blanc-1426-pers',
    image: '/flat/flat-0.jpg',
  },
];

export default function Booking() {
  return (
    <>
      <section className="relative rounded-sm h-screen md:h-[400px] bg-chalet-pmr bg-cover bg-center flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black bg-opacity-40 "></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2 className={`${Cabine.className} text-[40px] mb-4 text-white`}>
              Réservations
            </h2>
            <p
              className={`${comforta.className} text-[15px] mb-8 font-poppin text-white`}
            >
              Chalet & Appartement
            </p>
            <ArrowDown />
          </div>
        </div>
        <h3 className="uppercase absolute -bottom-[5px] -left-[2px] text-5xl text-white text-opacity-40">
          {' '}
          booking
        </h3>
      </section>

      {/* Content */}

      <section id="about" className={`${Cabine.className}`}>
        <div className="flex flex-col gap-4 p-4 md:flex-row max-w-[800px] mx-auto items-stretch justify-center">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              className="flex-1"
            >
              <div className="flex items-center p-4 shadow-md rounded-md border-b h-full transform transition-transform duration-300 hover:scale-105">
                <div className="w-1/2 flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
                  <Image
                    src={item.image}
                    alt={item.text}
                    width={200}
                    height={300}
                    objectFit="cover"
                  />
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center text-[13px] text-slate-800">
                  <p className={`${Cabine.className} uppercase mb-2`}>
                    {item.text}
                  </p>
                  <p className={`${Cabine.className}`}>{item.capacite}</p>
                  <p className={`${Cabine.className}`}>{item.surface}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Arrow />
    </>
  );
}
