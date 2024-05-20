'use client';
import { comforta, lobster } from '../font';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Arrow from '../components/ArrowUp';
import Footer from '../components/Footer';
import ArrowDown from '../components/ArrowDown';

export default function Home() {
  return (
    <div id="home" className="relative h-screen w-full">
      <div className="absolute inset-0 z-0 bg-chalet-remy bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full mx-auto">
        <Navbar />
        <section className="text-center">
          <h2 className={`${lobster.className} text-[40px] mb-4 text-white`}>
            Séminaires
          </h2>

          <ArrowDown />
        </section>
      </div>

      <div
        id="about"
        className={`${comforta.className}h-screen flex flex-col justify-center text-justify  bg-white p-4`}
      >
        <h2 className={`${lobster.className} text-[40px] mb-4 `}>
          Sémninaires au Chalet Remy
        </h2>
        <p className="text-[15px] mb-8">
          Le CHALET REMY peut également accueillir vos réunions professionnelles
          et vos séminaires d’entreprise. Quoi de mieux que de réunir son équipe
          en pleine nature dans un écrin élégant ? Le calme ambiant et le
          panorama époustouflant sur le Massif du Mont-Blanc sont parfaits pour
          apporter de la sérénité à vos collaborateurs. L’atmosphère des lieux
          est idéale pour rendre vos moments de team building efficaces et
          inoubliables. Le CHALET REMY offre également toutes les conditions
          favorables aux membres de vos COMEX, CODIR, pour se retirer du tumulte
          et prendre le recul nécessaire pour acter des décisions stratégiques
          et pérennes. Notre conciergerie se charge des services annexes à
          l’hébergement, tels que collation, repas, transports, excursions,
          animations… N’hésitez-pas à nous interroger pour un devis sur-mesure !
        </p>
        <h4>CAPACITE DES LIEUX</h4>
        <ul>
          <li>Bureau : 8 personnes</li>
          <li>Salles de projection : 8/10 personnes + 14/16 personnes</li>
          <li>Salle de réunion au rez-de-chaussée : 20 personnes</li>
          <li>Réunion en terrasse : 30 personnes</li>
        </ul>

        <a>video projecteur</a>
        <a>Equipement mobile pour visio conférence</a>
        <a>paperboard</a>
      </div>

      <Arrow />
      <Footer />
    </div>
  );
}
