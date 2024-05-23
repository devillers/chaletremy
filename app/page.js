'use client';
import { comforta, Cabine } from './font';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="flex justify-center items-center">
        <Link href="/chalet">
          <Image
            src="/chalet-remy-logo-removebg-preview.png"
            alt="Luxury Chalet"
            quality={100}
            height={200}
            width={200}
            className="object-cover shadow-md rounded-lg border-b-[1px]"
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </div>
    </section>
  );
}
