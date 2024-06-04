import React from 'react';
import { GiVacuumCleaner } from 'react-icons/gi';
export const Cleaning = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <GiVacuumCleaner className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Nettoyage </p>
      </div>
    </div>
  );
};
