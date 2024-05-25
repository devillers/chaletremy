'use client';

import { comforta, lobster, Cabine } from '../font';
import React, { useState } from 'react';
import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';
import Plane from '../components/Plane';
import Train from '../components/Train';
import Voiture from '../components/Voiture';
import Helico from '../components/Helico';
import Popup from '../components/Popup';

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <>
      <section className="relative rounded-sm h-screen md:h-[400px] bg-chalet-pmr bg-cover bg-center flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-40 "></div>
        <div className="relative flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2 className={`${Cabine.className}  text-[40px] mb-4 text-white`}>
              Accéder
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
        <div className="mt-5 ml-5 text-slate-600">
          <h1 className={`${lobster.className} text-3xl mb-1 `}>Chalet Remy</h1>
          <hr />
          <p className={`${comforta.className} text-[10px] mt-3`}>
            520 route des communailles
          </p>
          <p className={`${comforta.className} text-[10px] mt-1`}>
            74170 Saint Gervais les Bains
          </p>
        </div>
        <div>
          <div className="p-4 flex flex-col md:flex-row">
            <div className="flex-1 ">
              <img
                src="/plan.png"
                alt="Form Image"
                className="w-full max-h-[300px] rounded-sm object-contain"
                onClick={openPopup}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="flex-1">
              <h3 className={`${comforta.className} text-[14px] mt-1`}>
                titre
              </h3>
              <p className={`${comforta.className} text-[12px] mt-1`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vel metus eget neque aliquam congue. Nam vitae pretium enim. Ut
                sed odio non tortor condimentum efficitur. Etiam dui quam,
                placerat auctor rhoncus eu, viverra quis velit. Nulla vestibulum
                ultrices lacus. Mauris id tempor metus. Proin ultrices
                pellentesque sem, pharetra tempus.
              </p>
            </div>
          </div>

          {isPopupOpen && <Popup imageSrc="/plan.png" onClose={closePopup} />}
        </div>

        <div className="w-[90%] mx-auto  ">
          <Plane />
          <Train />
          <Voiture />
          <Helico />
        </div>
      </section>

      <Arrow />
    </>
  );
}
