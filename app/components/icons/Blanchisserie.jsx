import React from 'react';
import { MdOutlineDryCleaning } from 'react-icons/md';

export const Blanchisserie = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <MdOutlineDryCleaning className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Blanchisserie</p>
      </div>
    </div>
  );
};
