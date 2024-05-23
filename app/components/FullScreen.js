// components/FullscreenComponent.js
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FullscreenComponent = () => {
  useEffect(() => {
    const handleFullscreen = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.error(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
          );
        });
      }
    };

    handleFullscreen();

    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch((err) => {
          console.error(
            `Error attempting to exit full-screen mode: ${err.message} (${err.name})`
          );
        });
      }
    };
  }, []);

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
};

export default FullscreenComponent;
