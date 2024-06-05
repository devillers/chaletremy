import React from 'react';
import { FaBaby } from 'react-icons/fa6';

export const BabySitter = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <FaBaby className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Baby Sitter</p>
      </div>
    </div>
  );
};
