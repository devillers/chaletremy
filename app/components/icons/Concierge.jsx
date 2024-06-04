import React from 'react';
import { LuConciergeBell } from 'react-icons/lu';
export const Concierge = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <LuConciergeBell className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Concierge </p>
      </div>
    </div>
  );
};
