'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import PhotoGallery from '../components/PhotoGallery';

const page = () => {
  return (
    <>
      <Navbar />
      <div>
        <PhotoGallery />
      </div>
    </>
  );
};

export default page;
