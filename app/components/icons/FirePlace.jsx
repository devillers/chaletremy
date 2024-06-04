import React from 'react';

import { MdOutlineFireplace } from 'react-icons/md';
export const FirePlace = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <MdOutlineFireplace className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Cheminée</p>
      </div>
    </div>
  );
};
