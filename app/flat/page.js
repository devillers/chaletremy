'use client';

import { comforta, Cabine } from '../font';
import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';
//import PhotoGallery from '../components/PhotoGallery';
import Gallery from '../components/Gallery';
import { TbMeterSquare } from 'react-icons/tb';
import { IoPeople } from 'react-icons/io5';
import { IoBedOutline } from 'react-icons/io5';
import { GiBunkBeds } from 'react-icons/gi';
import { TbBath } from 'react-icons/tb';
import { LuSofa } from 'react-icons/lu';
import Accordion from '../components/Accordion';
import Calendar from '../components/CalendarApp';
import { Blanchisserie } from '../components/icons/Blanchisserie';
import { Concierge } from '../components/icons/Concierge';
import { FreeWifi } from '../components/icons/FreeWifi';
import { FreeParking } from '../components/icons/FreeParking';
import { ElecCar } from '../components/icons/ElecCar';
import { Pet } from '../components/icons/Pet';
import { FreeSoap } from '../components/icons/FreeSoap';
import { TV } from '../components/icons/TV';
import { WheelChair } from '../components/icons/WheelChair';
import { Cleaning } from '../components/icons/Cleaning';
import { Smoking } from '../components/icons/Smoking';

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
              8 personnes
            </p>
            <ArrowDown />
          </div>
        </div>
        <h3 className="uppercase absolute -bottom-[6px] -left-[2px] text-5xl text-white text-opacity-40">
          {' '}
          L'appartement
        </h3>
        <p
          className={`${Cabine.className} uppercase absolute bottom-16 left-6 border-pink-600 border-[1px] bg-pink-900 bg-opacity-20 rounded-md shadow-sm tracking-wide text-white text-[14px] p-4 hover:bg-pink-600 hover:bg-opacity-30 select-none cursor-pointer`}
          href="#about"
        >
          voir les photos
        </p>
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
              <IoPeople className="text-lg mr-2 text-pink-600 " />8 personnes
            </a>
            <a
              className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
            >
              <TbMeterSquare className="text-lg mr-2 text-pink-600 " />
              68 m2
            </a>
            <a
              className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
            >
              <IoBedOutline className="text-lg mr-2 text-pink-600 " />1 chambre
            </a>
            <a
              className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
            >
              <LuSofa className="text-lg mr-2 text-pink-600 " />1 canapé
              convertible
            </a>
            <a
              className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
            >
              <GiBunkBeds className="text-lg mr-2 text-pink-600 " />1 dortoir
            </a>
            <a
              className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
            >
              <TbBath className="text-lg mr-2 text-pink-600 " />1 sdb
            </a>
          </div>
          <div className="text-[12px]  mt-4 grid grid-cols-1 sm:grid-cols-2">
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
            <div className="hidden sm:block mt-12">
              <Calendar />
            </div>
          </div>
          <div>
            <Accordion title="infos supplémentaires">
              <p
                className={`${Cabine.className} tracking-wide p-2 leading-8 text-justify text-[12px]`}
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
            <Accordion title="L'appartement ">
              <Gallery />
            </Accordion>
          </div>
        </div>
      </section>
      {/* Content */}
      <section
        className={`${Cabine.className}  flex justify-center items-center min-w-[350px]`}
      >
        <div>
          <h4 className="text-[25px] mb-2">Equipements</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 p-2 mt-4">
            <Blanchisserie />
            <Concierge />
            <FreeWifi />
            <FreeParking />
            <ElecCar />
            <Pet />
            <FreeSoap />
            <TV />
            <WheelChair />
            <Cleaning />
            <Smoking />
          </div>
        </div>
      </section>
      <section
        className={`${Cabine.className}  flex justify-center items-center mt-8 min-w-[350px]`}
      >
        <div className="sm:hidden text-[12px]">
          <h4 className="text-[25px] mb-2">Disponibilités</h4>
          <Calendar />
        </div>
      </section>

      <Arrow />
    </>
  );
}
