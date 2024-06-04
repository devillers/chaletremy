import React from 'react';
import { MdElectricCar } from 'react-icons/md';
export const ElecCar = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <MdElectricCar className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Chargeur </p>
      </div>
    </div>
  );
};
