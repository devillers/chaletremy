import React from 'react';
import { MdOutlineFreeBreakfast } from 'react-icons/md';
export const FreeBreakfast = () => {
  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <MdOutlineFreeBreakfast className="text-pink-600 text-2xl" />
        <p className="m-3 text-[12px] uppercase">PDJ </p>
      </div>
    </div>
  );
};
