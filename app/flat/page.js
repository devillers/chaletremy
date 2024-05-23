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

export default function Home() {
  return (
    <>
      <section className="relative rounded-sm h-screen bg-cover bg-center flex flex-col justify-center items-center bg-chalet-app">
        <div className="absolute inset-0 bg-gradient-radial from-slate-900 via-transparent to-slate-800 opacity-90 "></div>
        <div
          className={`${Cabine.className} absolute bottom-4 rounded-md shadow-sm left-4 text-white text-[16px] p-4 bg-pink-600`}
        >
          voir les photos
        </div>

        <div className="relative flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2 className={`${Cabine.className} text-[40px] mb-4 text-white`}>
              L'appartement
            </h2>
            <p
              className={`${comforta.className} text-[15px] mb-8 font-poppin text-white`}
            >
              Saint Gervais les Bains - 6 + 2 personnes
            </p>
            <ArrowDown />
          </div>
        </div>
      </section>

      <section
        className={`${Cabine.className} bg-[#fefdfd] text-slate-600 p-2 flex-col justify-center items-center leading-6 text-justify `}
      >
        <div className="mt-10 mb-10 max-w-[800px] mx-auto ">
          <h3 className="text-[25px]">L'appartement</h3>
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
          <div className="">
            <p
              className={`${Cabine.className}  mt-7 tracking-wide p-4 text-[13px] leading-8 text-justify`}
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
                className={`${Cabine.className} tracking-wide p-2 text-[13px] leading-8 text-justify`}
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
          </div>
        </div>
        <div id="about">
          <PhotoGallery />
        </div>
      </section>

      <Arrow />
    </>
  );
}
