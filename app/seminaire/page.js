'use client';

import { comforta, lobster, Cabine } from '../font';
import VideoPlayer from '../components/VideoBackground';
import { BsProjector } from 'react-icons/bs';
import { GiVideoConference } from 'react-icons/gi';
import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';
import { IoMdPaper } from 'react-icons/io';

export default function Home() {
  return (
    <>
      <section className="relative rounded-sm h-screen md:h-[400px]  bg-cover bg-center flex flex-col justify-center items-center md:bg-chalet-seminaire ">
        {/* Video only visible on mobile */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <VideoPlayer src="/videos/seminaire-video.mp4" />
        </div>

        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 bg-black bg-opacity-40 "></div>
        <div className="relative flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2 className={`${Cabine.className} text-[40px] mb-4 text-white`}>
              séminaires
            </h2>
            <p
              className={`${comforta.className} text-[15px] mb-8 font-poppin text-white`}
            ></p>
            <ArrowDown />
          </div>
        </div>
        <h3 className="uppercase absolute -bottom-[5px] -left-[2px] text-5xl text-white text-opacity-40">
          {' '}
          séminaires
        </h3>
      </section>

      {/* Content */}

      <section
        id="about"
        className=" p-4  justify-center items-center leading-8 text-justify max-w-[900px] mx-auto tracking-wide"
      >
        <div
          className={`${Cabine.className} text-justify leading-7 text-slate-700 text-[13px]`}
        >
          <h3 className={`${Cabine.className} text-4xl mt-8 `}>
            Le Chalet Remy
          </h3>
          <p className="mt-4  ">
            peut également accueillir vos réunions professionnelles et vos
            séminaires d’entreprise.
          </p>
          <p className="mt-4">
            Quoi de mieux que de réunir son équipe en pleine nature dans un
            écrin élégant ? Le calme ambiant et le panorama époustouflant sur le
            Massif du Mont-Blanc sont parfaits pour apporter de la sérénité à
            vos collaborateurs.
          </p>{' '}
          <p className="mt-4">
            L’atmosphère des lieux est idéale pour rendre vos moments de team
            building efficaces et inoubliables. Le CHALET REMY offre également
            toutes les conditions favorables aux membres de vos COMEX, CODIR,
            pour se retirer du tumulte et prendre le recul nécessaire pour acter
            des décisions stratégiques et pérennes.
          </p>
          <p className="mt-4">
            Notre conciergerie se charge des services annexes à l’hébergement,
            tels que collation, repas, transports, excursions, animations…
            N’hésitez-pas à nous interroger pour un devis sur-mesure !
          </p>
        </div>
      </section>

      <div
        className={`${Cabine.className} flex flex-col sm:flex-row  text-[12px] leading-7 text-slate-600 p-4 max-w-[900px] mx-auto justify-between items-center `}
      >
        <div className=" bg-white rounded-md shadow-sm p-4 min-w-[380px] ">
          <ul className="uppercase  ">
            <h3 className={`${Cabine.className} text-2xl`}>capacité</h3>
            <li className="mt-4">
              <span className="text-pink-600 ml-2 ">bureau :</span> 8 personnes
            </li>
            <li>
              <span className="text-pink-600 ml-2">Salles de projection :</span>{' '}
              8/10 personnes + 14/16 personnes
            </li>
            <li>
              <span className="text-pink-600 ml-2">
                Salle de réunion au rez-de-chaussée :
              </span>{' '}
              20 personnes
            </li>
            <li>
              <span className="text-pink-600 ml-2">Réunion en terrasse : </span>
              30 personnes
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center bg-white rounded-md shadow-sm p-4 min-w-[380px] mt-4">
          <a
            className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
          >
            <BsProjector className="h-[16px] w-[16px] mr-2 text-pink-600 " />
            video projecteur
          </a>

          <a
            className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
          >
            <GiVideoConference className="h-[16px] w-[16px] mr-2 text-pink-600 " />
            équipement mobile pour visio-conférence
          </a>

          <a
            className={`${Cabine.className} mt-1 ml-4 tracking-wide uppercase text-[12px] flex items-center`}
          >
            <IoMdPaper className="h-[16px] w-[16px] mr-2 text-pink-600 " />
            paperboard
          </a>
        </div>
      </div>

      <Arrow />
    </>
  );
}
