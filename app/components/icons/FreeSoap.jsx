import React from 'react';
import { PiHandSoapLight } from 'react-icons/pi';
export const FreeSoap = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <PiHandSoapLight className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Savon</p>
      </div>
    </div>
  );
}
