// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <section className="h-screen w-full flex justify-center items-center">
//       <div className="flex justify-center items-center">
//         <Link href="/chalet">
//           <Image
//             src="/chalet-remy-logo-removebg-preview.png"
//             alt="Luxury Chalet"
//             quality={100}
//             height={200}
//             width={200}
//             className="object-cover shadow-md rounded-lg border-b-[1px]"
//             style={{ objectFit: 'cover' }}
//           />
//         </Link>
//       </div>
//     </section>
//   );
// }

'use client';
import Head from 'next/head';
import FullscreenComponent from './components/FullScreen';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fullscreen Home Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <FullscreenComponent />
      <style jsx global>{`
        body,
        html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .fullscreen-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100vw;
          height: 100vh;
          background-color: black;
        }
      `}</style>
    </div>
  );
}
