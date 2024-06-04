import React from 'react';
import { PiCigaretteSlashLight } from 'react-icons/pi';
export const Smoking = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <PiCigaretteSlashLight className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Non Fumeur</p>
      </div>
    </div>
  );
};
