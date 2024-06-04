import React from 'react';
import { GiLift } from 'react-icons/gi';

export const Lift = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <GiLift className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Ascenseur</p>
      </div>
    </div>
  );
};
