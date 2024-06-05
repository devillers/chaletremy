import React from 'react';

import { GiSkier } from 'react-icons/gi';

export const Ski = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <GiSkier className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Ski aux pieds</p>
      </div>
    </div>
  );
};
