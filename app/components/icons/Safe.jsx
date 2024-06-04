import React from 'react';
import { BsSafe } from 'react-icons/bs';
export const Safe = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <BsSafe className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Coffres Forts </p>
      </div>
    </div>
  );
};
