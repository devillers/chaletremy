import React from 'react';
import { MdOutlineHotTub } from 'react-icons/md';
export const Jacuzzi = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <MdOutlineHotTub className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Jacuzzi</p>
      </div>
    </div>
  );
};
