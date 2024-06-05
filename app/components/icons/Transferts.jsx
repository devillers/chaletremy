import React from 'react';
import { PiAirplaneTaxiingThin } from 'react-icons/pi';

export const Transferts = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <PiAirplaneTaxiingThin className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Transferts</p>
      </div>
    </div>
  );
};
