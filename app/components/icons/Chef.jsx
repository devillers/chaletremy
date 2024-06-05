import React from 'react';
import { PiChefHatThin } from 'react-icons/pi';

export const Chef = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <PiChefHatThin className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Chef</p>
      </div>
    </div>
  );
};
