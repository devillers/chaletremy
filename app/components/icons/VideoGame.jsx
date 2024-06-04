import React from 'react';
import { MdOutlineVideogameAsset } from 'react-icons/md';
export const VideoGame = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <MdOutlineVideogameAsset className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">gaming</p>
      </div>
    </div>
  );
};
