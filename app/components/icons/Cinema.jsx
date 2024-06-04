import React from 'react';
import { LuProjector } from 'react-icons/lu';

export const Cinema = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <LuProjector className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Cinema </p>
      </div>
    </div>
  );
}
