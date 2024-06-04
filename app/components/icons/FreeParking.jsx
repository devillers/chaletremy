import React from 'react';
import { LuParkingCircle } from 'react-icons/lu';
export const FreeParking = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <LuParkingCircle className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Parking</p>
      </div>
    </div>
  );
};
