import React from 'react';
import { PiThermometerHotLight } from 'react-icons/pi';
export const Sauna = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <PiThermometerHotLight className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Sauna</p>
      </div>
    </div>
  );
};
