'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Cabine } from './font';

export default function Home() {
  return (
    <section className="h-screen w-full flex justify-center items-center bg-[#d1d1d11c]">
      <div className="flex flex-col justify-center items-center">
        {/* <div>
          <p className={`${Cabine} text-justify text-[12px] max-w-[500px]`}>
            Il était une fois, dans le pittoresque village de Saint-Gervais,
            niché au coeur des montagnes entre Chamonix et Megève, le CHALET
            RÉMY. Ferme d’alpage de 1760, puis hôtel-restaurant emblématique du
            Bettex, au pied des pistes, face au majestueux Mont-Blanc, désormais
            lieu enchanteur pour un rassemblement entre amis, en famille, entre
            collègues. Le CHALET RÉMY est l’endroit idéal pour trouver la
            sérénité, se ressourcer, se connecter à la nature environnante,
            admirer les sommets majestueux, contempler les couchers de soleil
            flamboyants, se laisser envoûter par les levers de lune à couper le
            souffle. Intégralement rénovés avec des matériaux haut de gamme, le
            CHALET et son APPARTEMENT indépendant vous offrent un moment de vie
            unique et inoubliable. Le CHALET RÉMY est également mis à la
            disposition de groupes et d’entreprises pour leurs réunions et
            séminaires.
          </p>
        </div> */}
        <Link href="/chalet">
          <Image
            src="/chalet-remy-logo-removebg-preview.png"
            alt="Luxury Chalet"
            quality={100}
            height={200}
            width={200}
            className="object-cover shadow-md bg-white rounded-lg border-b-[1px]"
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </div>
    </section>
  );
}
