import React from 'react';
import { CiWifiOn } from 'react-icons/ci';
export const FreeWifi = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <CiWifiOn className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Wifi</p>
      </div>
    </div>
  );
};
