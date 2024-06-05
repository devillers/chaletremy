import React from 'react';
import { GrYoga } from 'react-icons/gr';

export const Yoga = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <GrYoga className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">Yoga</p>
      </div>
    </div>
  );
};
