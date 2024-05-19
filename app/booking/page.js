'use client';
import { lobster } from '../font';

import React from 'react';
import Navbar from '../components/Navbar';

const page = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 container mx-auto p-5">
        <div className={`${lobster.className} text-4xl text-slate-900`}>
          reserver
        </div>
      </div>
    </>
  );
};

export default page;
