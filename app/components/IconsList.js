// IconsList.js
import React from 'react';
import {
  GiBunkBeds,
  GiFilmProjector,
  GiFireplace,
  GiHotSurface,
  GiVideoConference,
} from 'react-icons/gi';
import {
  MdHotTub,
  MdOutlineWifi,
  TfiLayoutSidebarNone,
  MdElectricBolt,
} from 'react-icons/md';
import { IoResizeSharp } from 'react-icons/io5';
import {
  PiMountainsThin,
  PiOfficeChairLight,
  PiWheelchairFill,
} from 'react-icons/pi';
import { BsProjector } from 'react-icons/bs';
import { TfiBlackboard, TfiLayoutSidebarNone } from 'react-icons/tfi';

const items = [
  {
    icon: <GiBunkBeds size={30} color="#be185d" />,
    text: 'lits superposés',
  },
  {
    icon: <GiFilmProjector size={30} color="#be185d" />,
    text: 'salle de cinema',
  },
  {
    icon: <GiFireplace size={30} color="#be185d" />,
    text: 'cheminée',
  },
  {
    icon: <MdHotTub size={30} color="#be185d" />,
    text: 'jacuzzi',
  },
  {
    icon: <GiHotSurface size={30} color="#be185d" />,
    text: 'sauna',
  },
  {
    icon: <IoResizeSharp size={30} color="#be185d" />,
    text: '630 m2',
  },
  {
    icon: <TfiLayoutSidebarNone size={30} color="#be185d" />,
    text: '630 m2',
  },
  {
    icon: <GiSkiBoot size={30} color="#be185d" />,
    text: 'chauffe chaussure',
  },
  {
    icon: <GiSkier size={30} color="#be185d" />,
    text: '400 km de pistes',
  },
  {
    icon: <PiMountainsThin size={30} color="#be185d" />,
    text: '850 m - 2800 m',
  },
  {
    icon: <BsProjector size={30} color="#be185d" />,
    text: 'projecteur',
  },
  {
    icon: <GiVideoConference size={30} color="#be185d" />,
    text: 'visio conférence ',
  },
  {
    icon: <TfiBlackboard size={30} color="#be185d" />,
    text: 'paperboard ',
  },
  {
    icon: <PiOfficeChairLight size={30} color="#be185d" />,
    text: 'bureau 8 P ',
  },
  {
    icon: <PiWheelchairFill size={30} color="#be185d" />,
    text: 'acccès PMR',
  },
  {
    icon: <MdOutlineWifi size={30} color="#be185d" />,
    text: 'wifi',
  },
  {
    icon: <PiWheelchairFill size={30} color="#be185d" />,
    text: 'acccès PMR',
  },
  {
    icon: <MdElectricBolt size={30} color="#be185d" />,
    text: 'chargeur voiture',
  },
];

const IconsList = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-2">'>
      {items.map((item, index) => (
        <div key={index} className="icon-item">
          {item.icon}
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default IconsList;
