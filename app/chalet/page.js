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
import sousSolPic from '../json/chalet-ss.json';
import rdcPic from '../json/chalet-rdc.json';
import etPic1 from '../json/chalet-1.json';
import etPic2 from '../json/chalet-2.json';
import extPic from '../json/chalet-ext.json';

// // Dynamically import the MapComponent for client-side rendering
// const DynamicMap = dynamic(() => import('../components/MapComponent'), {
//   ssr: false, // This ensures Leaflet is only rendered on the client side
// });

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
];

export default function Home() {
  return (
    <>
      <section className="relative rounded-sm h-screen md:h-[400px] bg-chalet-pmr bg-cover bg-center flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black bg-opacity-40 "></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2 className={`${Cabine.className} text-[40px] mb-4 text-white`}>
              Le Chalet Remy
            </h2>
            <p
              className={`${comforta.className} text-[15px] mb-8 font-poppin text-white `}
            >
              525 M2 DE HAUT STANDING
            </p>
            <ArrowDown />
          </div>
        </div>
        <h3 className="uppercase absolute -bottom-[5px] -left-[2px] text-5xl text-white text-opacity-40">
          {' '}
          Le Chalet
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
          <h3 className="text-[25px] ml-4 mb-2">Le Chalet</h3>
          <h4 className="uppercase mt-1 ml-4 tracking-wide text-[12px]">
            Saint Gervais les bains - Le bettex
          </h4>
          <div className="flex flex-col md:flex-row justify-items-start mt-4">
            <a
              className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
            >
              <IoPeople className="h-[16px] w-[16px] mr-2 text-pink-600 " />
              26 personnes
            </a>
            <a
              className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
            >
              <TbMeterSquare className="h-[20px] w-[20px] mr-2 text-pink-600 " />
              525 m2
            </a>
            <a
              className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
            >
              <IoBedOutline className="h-[16px] w-[16px] mr-2 text-pink-600 " />
              8 chambres doubles
            </a>
            <a
              className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
            >
              <GiBunkBeds className="h-[16px] w-[16px] mr-2 text-pink-600 " />2
              dortoirs
            </a>
            <a
              className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
            >
              <TbBath className="h-[16px] w-[16px] mr-2 text-pink-600 " />9 sdb
            </a>
          </div>
          <div className="text-[12px] md:text-[13px] mt-4">
            <p
              className={`${Cabine.className} tracking-wide p-4 leading-8 text-justify`}
            >
              LE CHALET propose une multitude de commodités pour ses hôtes : un
              spa extérieur avec vue imprenable sur le Mont-Blanc, un sauna, une
              salle de cinéma, une salle de jeux vidéo, une bibliothèque ouverte
              sur une terrasse abritée, refuge paisible pour se détendre au son
              mélodieux du chant des oiseaux et des animaux des bois
              environnants.
            </p>
            <Accordion title="INFOS">
              <p
                className={`${Cabine.className} tracking-wide p-2 leading-8 text-justify`}
              >
                Pour les plus connectés, un grand bureau vitré permet de
                travailler dans le calme et la sérénité. Le chalet a été conçu
                pour accueillir les personnes à mobilité réduite, offrant une
                suite dédiée ainsi qu’un ascenseur pour profiter des équipements
                des niveaux inférieur et supérieur.
              </p>
              <p
                className={`${Cabine.className} tracking-wide p-2 leading-8 text-justify`}
              >
                Accessibilité, authenticité, confort, tranquillité, détente,
                nature… sont les maîtres-mots de votre séjour au CHALET RÉMY.
              </p>
              <p
                className={`${Cabine.className} tracking-wide p-2 leading-8 text-justify`}
              >
                LE CHALET et L’APPARTEMENT sont loués indépendamment.
              </p>
              <p
                className={`${Cabine.className} tracking-wide p-2 leading-8 text-justify`}
              >
                Vous pouvez également louer les deux simultanément. Une porte
                communicante permet d’accéder facilement aux deux espaces.
              </p>
            </Accordion>

            <Accordion title=" SOUS SOL" description="cinéma - sauna ">
              {/* <h3>SOUS SOL </h3> */}
              <PhotoGallery images={sousSolPic} />
            </Accordion>
            <Accordion title="RDC" description="cuisine - salon - suite PMR">
              {/* <h3>Côté aménagements handicapé </h3> */}
              <PhotoGallery images={rdcPic} />
            </Accordion>
            <Accordion title="1er ETAGE" description="salon - suites">
              {/* <h3> 1 ETAGE </h3> */}
              <PhotoGallery images={etPic1} />
            </Accordion>
            <Accordion title="2nd ETAGE" description="dortoirs">
              {/* <h3> 2 ETAGE </h3> */}
              <PhotoGallery images={etPic2} />
            </Accordion>
            <Accordion
              title="EXTERIEUR"
              description="terrasse - jacuzzi - chargeurs "
            >
              {/* <h3> EXTERIEUR </h3> */}

              <PhotoGallery images={extPic} />
            </Accordion>
          </div>
        </div>
        <div id="about">{/* a faire  */}</div>
      </section>
      <section
        id="about"
        className={`${Cabine.className}  flex justify-center items-center`}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-2">
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
      {/* Content */}
      {/* <section
        id="about"
        className=" md:mt-12 h-[300px] px-2 flex flex-col md:flex-row justify-center leading-6 text-justify overflow-hidden md:p-0 md:max-w-[800px] mx-auto"
      >
        <div className="w-full md:w-1/2 h-1/2 md:max-h-[300px] flex">
          <div className="w-full ">
            <DynamicMap address="520 route des communailles, 74170, Saint Gervais les bains " />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:max-h-[300px] bg-slate-100 "></div>
      </section> */}

      <Arrow />
    </>
  );
}
