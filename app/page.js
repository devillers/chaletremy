'use client';
import { comforta, lobster } from './font';
import Navbar from './components/Navbar';
import Arrow from './components/ArrowUp';
import ArrowDown from './components/ArrowDown';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative rounded-sm h-screen bg-chalet-pmr bg-cover bg-center flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-20 bg-blend-difference"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2 className={`${lobster.className} text-[40px] mb-4 text-white`}>
              Bienvenue au Chalet Remy
            </h2>
            <p
              className={`${comforta.className} text-[15px] mb-8 font-poppin text-white`}
            >
              Saint Gervais les Bains - 26 personnes
            </p>
            <ArrowDown />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 flex flex-col items-center justify-center h-full w-full mx-auto">
        <Navbar />
      </section>

      <section
        id="about"
        className={`${comforta.className} text-[12px]  leading-6 tracking-wide p-6`}
      >
        <h2 className={`${lobster.className} text-[24px]`}>prestige & cosy</h2>
        <p className="mt-6 mb-4">
          Alliant tradition et modernité, LE CHALET a une vue imprenable sur le
          Mont-Blanc et le Mont Joly, avec un ensoleillement exceptionnel. Situé
          sur un terrain plat, il est très facile d’accès, à proximité du centre
          bourg , au pied des pistes et des navettes. Surface de 525 m2 sur 4
          niveaux
        </p>
        <h3 className={`${lobster.className} text-[24px]`}>
          9 chambres/suites
        </h3>
        <ul className="mt-6 mb-4">
          <li className="flex items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#be185d"
            >
              <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
            </svg>
            <p className="m-3">
              1 Suite avec accès PMR, double salle de bain privative, .
            </p>
          </li>
          <li className="flex items-center justify-center ">
            <p className="m-3">
              {' '}
              4 chambres double ou twin – salle de douche avec wc – vue
              Mont-Blanc
            </p>
          </li>
          <li className="flex items-center justify-center ">
            <p className="m-3">
              2 junior suites avec espace salon et espace nuit, terrasse
              privative.
            </p>
          </li>

          <li className="flex items-center justify-center ">coffre-fort</li>
          <li className="flex-col items-center justify-center ">
            
            <h3 className={`${lobster.className} text-[24px] text-center`}>
              espace enfants
            </h3>
            
            <p className="m-3">
              1 dortoir de 4 couchages & 1 dortoir de 6 couchages couchages +
              SDB & WC
            </p>
          </li>
        </ul>
        <h4 className={`${lobster.className} text-[24px]`}>espaces de vie</h4>
        <ul className="mt-6 mb-4">
          <li className="flex items-center justify-center ">
            {' '}
            <p className="m-3">Salle cinéma</p>
          </li>
          <li className="flex items-center justify-center ">
            <p className="m-3">salle Jeux videos</p>
          </li>
          <li className="flex items-center justify-center ">
            {' '}
            <p className="m-3">un sauna</p>
          </li>
        </ul>
        <h4 className={`${lobster.className} text-[24px]`}>exterieur</h4>
        <ul className="mt-6 mb-4">
          <li className="flex items-center justify-center ">
            {' '}
            <p className="m-3">un jacuzzi </p>
          </li>
        </ul>

        <ul className="mt-6">
          <li className="flex items-center justify-center ">
            {' '}
            <p className="m-3">sauna</p>
          </li>
          <li className="flex items-center justify-center ">
            {' '}
            <p className="m-3">cheminée</p>
          </li>
          <li className="flex items-center justify-center ">
            {' '}
            <p className="m-3">ski room</p>
          </li>
          <li className="flex items-center justify-center ">
            {' '}
            <p className="m-3">chauffe chaussures</p>
          </li>
          <li className="flex items-center justify-center ">
            {' '}
            <p className="m-3">salle de cinéma</p>
          </li>
          <li className="flex items-center justify-center ">
            {' '}
            <p className="m-3">accés pmr</p>
          </li>
          <li className="flex items-center justify-center ">
            {' '}
            <p className="m-3">ascenceur</p>
          </li>
          <li className="flex items-center justify-center ">
            {' '}
            <p className="m-3">terrasse</p>
          </li>
          <li className="flex items-center justify-center ">
            {' '}
            <p className="m-3">jacuzzi</p>
          </li>
          <li className="flex items-center justify-center ">
            {' '}
            <p className="m-3">wifi</p>
          </li>
          <li className="flex items-center justify-center ">
            {' '}
            <p className="m-3">2 bornes de chargement</p>
          </li>
        </ul>
      </section>

      <Arrow />
    </>
  );
}
