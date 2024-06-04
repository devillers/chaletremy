import React from 'react';

import { MdOutlinePets } from 'react-icons/md';
export const Pet = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <MdOutlinePets className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Animaux</p>
      </div>
    </div>
  );
};
