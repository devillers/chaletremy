import { comforta } from '../font';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className="flex flex-col items-center bg-white mt-5">
      <div className="w-full  p-2 flex items-center justify-center">
        <Image
          src="/chalet-remy-logo-big.png"
          alt="Luxury Chalet"
          objectFit="cover"
          quality={100}
          height={100}
          width={100}
          className="object-cover"
        />
      </div>
      <div className="w-full p-2 text-black text-[10px] uppercase ">
        <div className="flex flex-row  justify-center">
          <Link href="/" className={`${comforta.className}cursor-pointer px-2`}>
            Mentions Légales{' '}
          </Link>
          <Link href="/" className={`${comforta.className}cursor-pointer px-2`}>
            Plan du Site{' '}
          </Link>
        </div>
      </div>
      <p className={`${comforta.className} text-[10px] uppercase my-5`}>
        copyright @ chalet remy 2023
      </p>
    </section>
  );
}
