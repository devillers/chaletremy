import React from 'react';
import { GrWheelchairActive } from 'react-icons/gr';
export const WheelChair = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <GrWheelchairActive className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">PMR </p>
      </div>
    </div>
  );
};
