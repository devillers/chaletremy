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

import Accordion from '../components/Accordion';
import sousSolPic from '../json/chalet-ss.json';
import rdcPic from '../json/chalet-rdc.json';
import etPic1 from '../json/chalet-1.json';
import etPic2 from '../json/chalet-2.json';
import extPic from '../json/chalet-ext.json';
import Calendar from '../components/CalendarChalet';

import { Safe } from '../components/icons/Safe';
import { Lift } from '../components/icons/Lift';
import { Blanchisserie } from '../components/icons/Blanchisserie';
import { Cinema } from '../components/icons/Cinema';
import { Cleaning } from '../components/icons/Cleaning';
import { Concierge } from '../components/icons/Concierge';
import { ElecCar } from '../components/icons/ElecCar';
import { FirePlace } from '../components/icons/FirePlace';
import { FreeBreakfast } from '../components/icons/FreeBreakfast';
import { FreeParking } from '../components/icons/FreeParking';
import { FreeSoap } from '../components/icons/FreeSoap';
import { FreeWifi } from '../components/icons/FreeWifi';
import { Jacuzzi } from '../components/icons/Jacuzzi';
import { Sauna } from '../components/icons/Sauna';
import { Smoking } from '../components/icons/Smoking';

import { VideoGame } from '../components/icons/VideoGame';
import { WheelChair } from '../components/icons/WheelChair';

import { Ski } from '../components/icons/Ski';
import { Transferts } from '../components/icons/Transferts';
import { Yoga } from '../components/icons/Yoga';
import { Chef } from '../components/icons/Chef';
import { BabySitter } from '../components/icons/BabySitter';

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
        <h3 className="uppercase absolute -bottom-[6px] -left-[2px] text-5xl text-white text-opacity-40">
          {' '}
          Le Chalet
        </h3>
        <p
          className={`${Cabine.className} uppercase absolute bottom-16 left-6 border-pink-600 border-[1px] bg-pink-900 bg-opacity-20 rounded-md shadow-sm tracking-wide text-white text-[14px] p-4 hover:bg-pink-600 hover:bg-opacity-30`}
          href="#about"
        >
          voir les photos
        </p>
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
          <div className="text-[12px]  mt-4 grid grid-cols-1 sm:grid-cols-2">
            <p
              className={`${Cabine.className}  mt-7 tracking-wide p-4 leading-8 text-justify`}
            >
              LE CHALET propose une multitude de commodités pour ses hôtes : un
              spa extérieur avec vue imprenable sur le Mont-Blanc, un sauna, une
              salle de cinéma, une salle de jeux vidéo, une bibliothèque ouverte
              sur une terrasse abritée, refuge paisible pour se détendre au son
              mélodieux du chant des oiseaux et des animaux des bois
              environnants.
            </p>
            <div className="hidden sm:block mt-12">
              <Calendar />
            </div>
          </div>
          <div>
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
              <PhotoGallery images={sousSolPic} />
            </Accordion>
            <Accordion title="RDC" description="cuisine - salon - suite PMR">
              <PhotoGallery images={rdcPic} />
            </Accordion>
            <Accordion title="1er ETAGE" description="salon - suites">
              <PhotoGallery images={etPic1} />
            </Accordion>
            <Accordion title="2nd ETAGE" description="dortoirs">
              <PhotoGallery images={etPic2} />
            </Accordion>
            <Accordion
              title="EXTERIEUR"
              description="terrasse - jacuzzi - chargeurs "
            >
              <PhotoGallery images={extPic} />
            </Accordion>
          </div>
        </div>
      </section>
      <section
        className={`${Cabine.className}  flex justify-center items-center min-w-[350px]`}
      >
        <div>
          <h4 className="text-[20px] mb-2">Equipements inclus</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 p-2 mt-4">
            <Safe />
            <Lift />
            <Cinema />
            <ElecCar />
            <FirePlace />
            <FreeBreakfast />
            <FreeParking />
            <FreeSoap />
            <FreeWifi />
            <Jacuzzi />
            <Sauna />
            <Smoking />
            <VideoGame />
            <WheelChair />
            <Ski />
          </div>
        </div>
      </section>
      <section
        className={`${Cabine.className}  flex justify-center items-center min-w-[350px] mt-8`}
      >
        <div>
          <h4 className="text-[20px] mb-2">Supplément +</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 p-2 mt-8">
            <Blanchisserie />
            <Cleaning />
            <Concierge />

            <Transferts />
            <Yoga />
            <Chef />
            <BabySitter />
          </div>
        </div>
      </section>
      <section
        className={`${Cabine.className}  flex justify-center items-center mt-8 min-w-[355px]`}
      >
        <div className="sm:hidden text-[12px]">
          <h4 className="text-[20px] mb-2">Disponibilités</h4>
          <Calendar />
        </div>
      </section>
      <Arrow />
    </>
  );
}
