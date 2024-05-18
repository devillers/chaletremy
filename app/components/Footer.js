import { comforta, Cave } from '../font';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className="flex flex-col md:flex-row justify-between bg-white-6">
      <div className="w-full md:w-1/3 p-2">
        <p
          className={`${Cave.className} text-justify text-[20px] text-white leading-6`}
        >
          A 1 450 m d’altitude, au pied des pistes, face au majestueux
          Mont-Blanc, le CHALET RÉMY, lieu emblématique du Bettex s’ouvre à la
          location pour vos retrouvailles familiales, vos moments entre amis ou
          encore vos séminaires professionnels.{' '}
          {/* Après une longue et méticuleuse
          réhabilitation conduite par temA architectes et by ; intérieurs
          d’architectes, le CHALET et son APPARTEMENT indépendant, intégralement
          rénovés avec des matériaux haut de gamme, vous offrent un moment de
          vie unique et inoubliable. */}
        </p>
      </div>
      <div className="w-full md:w-1/3 p-2 flex items-center justify-center">
        <Image
          src="/chalet-remy-logo-big.png" // replace with your image path
          alt="Luxury Chalet"
          objectFit="cover"
          quality={100}
          height={200}
          width={200}
          className="object-cover"
        />
      </div>
      <div className="w-full md:w-1/3 p-2 text-white text-[12px] uppercase text-center">
        <ul className="space-y-2">
          <li className="cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li>le chalet</li>
          <li>l'appartement</li>
          <li>contact</li>
          <li>mentions légales</li>
          <li>plan du site</li>
        </ul>
      </div>
    </section>
  );
}
