'use client';

import { comforta, lobster } from '../font';
import VideoPlayer from '../components/VideoInsta';
import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';

export default function Home() {
  return (
    <>
      <section className="relative rounded-sm h-screen bg-cover bg-center flex flex-col justify-center items-center">
        <VideoPlayer src="/videos/8716790-hd_1280_720_25fps.mp4" />
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
      </section>

      {/* Content */}

      <section
        id="about"
        className=" p-6 flex-col justify-center items-center leading-6 text-justify"
      >
        <div>
          <p className={`${comforta.className} text-[12px] mb-4 `}>
            Le CHALET REMY peut également accueillir vos réunions
            professionnelles et vos séminaires d’entreprise. Quoi de mieux que
            de réunir son équipe en pleine nature dans un écrin élégant ? Le
            calme ambiant et le panorama époustouflant sur le Massif du
            Mont-Blanc sont parfaits pour apporter de la sérénité à vos
            collaborateurs. L’atmosphère des lieux est idéale pour rendre vos
            moments de team building efficaces et inoubliables. Le CHALET REMY
            offre également toutes les conditions favorables aux membres de vos
            COMEX, CODIR, pour se retirer du tumulte et prendre le recul
            nécessaire pour acter des décisions stratégiques et pérennes. Notre
            conciergerie se charge des services annexes à l’hébergement, tels
            que collation, repas, transports, excursions, animations…
          </p>
          <p className={`${comforta.className} text-[12px] mb-4 `}>
            {' '}
            N’hésitez-pas à nous interroger pour un devis sur-mesure !
          </p>

          <h4 className={`${lobster.className} text-[16px] mb-4 `}>
            capacité des lieux
          </h4>
          <ul className={`${comforta.className} text-[12px] mb-4 `}>
            <li>Bureau : 8 personnes</li>
            <li>Salles de projection : 8/10 personnes + 14/16 personnes</li>
            <li>Salle de réunion au rez-de-chaussée : 20 personnes</li>
            <li>Réunion en terrasse : 30 personnes</li>
          </ul>
          <h4 className={`${lobster.className} text-[16px] mb-4 `}>
            équipements
          </h4>
          <ul className={`${comforta.className} text-[12px] mb-4 `}>
            <li>video projecteur</li>
            <li>Equipement mobile pour visio conférence</li>
            <li>paperboard</li>
          </ul>
        </div>
      </section>

      <Arrow />
    </>
  );
}
