'use client';
import { comforta, lobster, Cabine } from '../font';
import Accordion from '../components/Accordion';
import Arrow from '../components/ArrowUp';
import ArrowDown from '../components/ArrowDown';

const items = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#be185d"
      >
        <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
      </svg>
    ),
    text: 'salle Jeux videos',
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#be185d"
      >
        <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
      </svg>
    ),
    text: 'salle de cinema',
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#be185d"
      >
        <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
      </svg>
    ),
    text: 'cheminée',
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#be185d"
      >
        <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
      </svg>
    ),
    text: 'jacuzzi',
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#be185d"
      >
        <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
      </svg>
    ),
    text: 'sauna',
  },
];

export default function Home() {
  return (
    <>
      <section className="relative rounded-sm h-screen bg-chalet-pmr bg-cover bg-center flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-40 "></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2 className={`${Cabine.className} text-[40px] mb-4 text-white`}>
              Le Chalet Remy
            </h2>
            <p
              className={`${comforta.className} text-[15px] mb-8 font-poppin text-white `}
            >
              525 M2 DE HAUT STANDING
            </p>
            <ArrowDown />
          </div>
        </div>
        <h3 className="uppercase absolute -bottom-[5px] -left-[2px] text-5xl text-white text-opacity-40">
          {' '}
          Le Chalet
        </h3>
        <div
          className={`${Cabine.className} absolute bottom-16 left-6 border-pink-600 border-2 rounded-md shadow-sm  text-white text-[16px] p-4`}
          href="#about"
        >
          voir les photos
        </div>
      </section>

      {/* Content */}
      <section
        className={`${Cabine.className} text-[14px] text-justify max-w-[700px] mx-auto text-slate-800`}
      >
        <p className="p-4 leading-8 tracking-wide">
          LE CHALET propose une multitude de commodités pour ses hôtes : un spa
          extérieur avec vue imprenable sur le Mont-Blanc, un sauna, une salle
          de cinéma, une salle de jeux vidéo, une bibliothèque ouverte sur une
          terrasse abritée, refuge paisible pour se détendre au son mélodieux du
          chant des oiseaux et des animaux des bois environnants.
        </p>

        <Accordion title="voir">
          <p
            className={`${Cabine.className} tracking-wide p-2 text-[13px] leading-8 text-justify`}
          >
            Pour les plus connectés, un grand bureau vitré permet de travailler
            dans le calme et la sérénité. Le chalet a été conçu pour accueillir
            les personnes à mobilité réduite, offrant une suite dédiée ainsi
            qu’un ascenseur pour profiter des équipements des niveaux inférieur
            et supérieur.
          </p>
          <p className="p-4 leading-8 tracking-wide">
            Accessibilité, authenticité, confort, tranquillité, détente, nature…
            sont les maîtres-mots de votre séjour au CHALET RÉMY.
          </p>
          <p className="p-4 leading-8 tracking-wide">
            LE CHALET et L’APPARTEMENT sont loués indépendamment.
          </p>
          <p className="p-4 leading-8 tracking-wide">
            Vous pouvez également louer les deux simultanément. Une porte
            communicante permet d’accéder facilement aux deux espaces.
          </p>
        </Accordion>
      </section>
      <section
        id="about"
        className={`${Cabine.className}  flex justify-center items-center`}
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {items.map((item, index) => (
            <div key={index} className="p-4 shadow-md rounded-md">
              <div className="flex items-center justify-center">
                {item.svg}
                <p className="m-3">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Arrow />
    </>
  );
}
