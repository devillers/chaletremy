'use client';

import { comforta, Cabine } from '../font';
import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';
import PhotoGallery from '../components/PhotoGallery';
import { TbMeterSquare } from 'react-icons/tb';
import { IoPeople } from 'react-icons/io5';
import { IoBedOutline } from 'react-icons/io5';
import { GiBunkBeds } from 'react-icons/gi';
import { TbBath } from 'react-icons/tb';
import Accordion from '../components/Accordion'; // Importer le composant Accordion
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import imagesData from '../json/flat.json';

// Dynamically import the MapComponent for client-side rendering
const DynamicMap = dynamic(() => import('../components/MapComponent'), {
  ssr: false, // This ensures Leaflet is only rendered on the client side
});

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
    text: 'salle Jeux videos',
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
    text: 'salle de cinema',
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
    text: 'cheminée',
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
    text: 'jacuzzi',
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
    text: 'sauna',
  },
];

export default function Home() {
  return (
    <>
      <section className="relative rounded-sm h-screen md:h-[400px] bg-chalet-pmr bg-cover bg-center flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black bg-opacity-40 "></div>

        <div className="relative flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2
              className={`${Cabine.className} text-[40px] mb-4 text-white select-none`}
            >
              L'appartement
            </h2>
            <p
              className={`${comforta.className} text-[15px] mb-8 font-poppin text-white select-none `}
            >
              6 + 2 personnes
            </p>
            <ArrowDown />
          </div>
        </div>
        <h3 className="uppercase absolute -bottom-[5px] -left-[2px] text-5xl text-white text-opacity-40">
          {' '}
          L'appartement
        </h3>
        <div
          className={`${Cabine.className} uppercase absolute bottom-16 left-6 border-pink-600 border-[1px] bg-pink-900 bg-opacity-20 rounded-md shadow-sm tracking-wide text-white text-[14px] p-4`}
          href="#about"
        >
          voir les photos
        </div>
      </section>

      <section
        className={`${Cabine.className} bg-[#fefdfd] text-slate-600 p-2 flex-col justify-center items-center leading-6 text-justify `}
      >
        <div className="mt-10 mb-10 max-w-[800px] mx-auto ">
          <h3 className="text-[25px] ml-4 mb-2">L'appartement</h3>
          <h4 className="uppercase mt-1 ml-4 tracking-wide text-[12px]">
            Saint Gervais les bains - Le bettex
          </h4>
          <div className="flex flex-col md:flex-row justify-items-start mt-4">
            <a
              className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
            >
              <IoPeople className="h-[16px] w-[16px] mr-2 text-pink-600 " />6
              personnes + 2
            </a>
            <a
              className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
            >
              <TbMeterSquare className="h-[20px] w-[20px] mr-2 text-pink-600 " />
              70 m2
            </a>
            <a
              className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
            >
              <IoBedOutline className="h-[16px] w-[16px] mr-2 text-pink-600 " />
              1 chambre + 1 canapé convertible
            </a>
            <a
              className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
            >
              <GiBunkBeds className="h-[16px] w-[16px] mr-2 text-pink-600 " />1
              dortoir
            </a>
            <a
              className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
            >
              <TbBath className="h-[16px] w-[16px] mr-2 text-pink-600 " />1 sdb
            </a>
          </div>
          <div className="text-[12px] md:text-[13px] mt-4">
            <p
              className={`${Cabine.className}  mt-7 tracking-wide p-4 leading-8 text-justify`}
            >
              Bienvenue dans cet appartement au sein d'un chalet historique de
              Saint-Gervais. Idéalement situé entre Chamonix et Megève, au pied
              des pistes et des chemins de randonnées, vous voici en pleine
              nature, subjugués par la vue imprenable sur le Mont Blanc depuis
              l' immense terrasse. A l'intérieur, la décoration soignée et la
              rénovation intégrale offrent désormais tout le confort moderne
              pour un repos bien mérité après une longue journée au grand air.
              Un cadre parfait pour des vacances inoubliables !
            </p>
            <Accordion title="infos supplémentaires">
              <p
                className={`${Cabine.className} tracking-wide p-2 leading-8 text-justify`}
              >
                L'appartement se compose de 2 chambres équipées d'une literie
                neuve et confortable : La chambre principale offre intimité et
                confort pour les couples ou les personnes en quête de
                tranquillité. Le couchage peut s'organiser soit en un grand lit
                de 180 ou en 2 lits de 90. Un charmant dortoir peut accueillir
                jusqu'à 4 personnes, dans des lits superposés. Pour répondre à
                tous les besoins, un canapé-lit de qualité est également
                disponible, permettant d'accueillir 2 personnes supplémentaires
                avec tout le confort nécessaire. La salle de bains est équipée
                de toutes les commodités modernes pour votre plus grand confort.
                La rénovation de qualité et la décoration soignée créent une
                atmosphère accueillante et reposante après une journée au grand
                air. De retour de vos aventures, vous apprécierez le cadre
                paisible et confortable de l'appartement. L'espace de vie
                spacieux et lumineux vous invite à vous détendre et à vous
                ressourcer. Vous pourrez préparer de délicieux repas dans la
                cuisine entièrement équipée et les savourer autour de la table à
                manger conviviale. A l'extérieur, la terrasse privative vous
                attend pour un déjeuner face au Mont Blanc ou encore pour un
                moment de détente allongé/e sur une chaise-longue. L'emplacement
                de cet appartement est véritablement privilégié. Situé au départ
                des pistes et des chemins de randonnée du Bettex, vous aurez un
                accès direct aux plaisirs des sports de montagne dès que vous
                franchirez la porte. L'hiver, le retour se fait ski aux pieds ou
                par la navette en quelques minutes et grâce aux
                sèche-chaussures/gants, vous débutez votre journée de ski
                suivante pieds et mains au chaud ! L'ancien hôtel Chalet Rémy
                offre également un parking privé ainsi qu'une borne de recharge
                pour véhicules électriques pour rendre votre expérience encore
                plus agréable. Réservez dès maintenant cet appartement
                exceptionnel au départ des pistes du Bettex, dans l'ancien hôtel
                Chalet Rémy. Que vous soyez passionné de ski, à la recherche
                d'une escapade en montagne ou simplement en quête de
                tranquillité, cet appartement est l'endroit parfait pour vous
                détendre, vous amuser et profiter de vacances inoubliables dans
                les Alpes.
              </p>
            </Accordion>
            <Accordion title="1 etage">
              <p> test </p>

              <PhotoGallery images={imagesData} />
            </Accordion>
          </div>
        </div>
        <div id="about"></div>
      </section>
      {/* Content */}
      <section
        id="about"
        className={`${Cabine.className}  flex justify-center items-center`}
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {items.map((item, index) => (
            <div key={index} className="p-4 shadow-md rounded-md">
              <div className="flex items-center justify-center">
                {item.svg}
                <p className="m-3">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        id="about"
        className=" h-[600px] px-2 flex flex-col md:flex-row justify-center leading-6 text-justify overflow-hidden md:p-0 max-w-[900px] mx-auto"
      >
        <div className="w-full md:w-1/2 h-1/2 md:max-h-[300px] flex">
          <div className="w-full ">
            <DynamicMap address="520 route des communailles, 74170, Saint Gervais les bains " />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:max-h-[300px] bg-slate-100 "></div>
      </section>

      <Arrow />
    </>
  );
}
