import React from 'react';

import { PiTelevisionSimpleLight } from 'react-icons/pi';
export const TV = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <PiTelevisionSimpleLight className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Télévision</p>
      </div>
    </div>
  );
};
