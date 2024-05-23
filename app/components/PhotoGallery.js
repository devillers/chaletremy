// import React from 'react';

const images = [
  { src: '/flat/flat-0.jpg', alt: 'Rectangle Image 1' },
  { src: '/flat/flat-1.jpg', alt: 'Rectangle Image 1' },
  { src: '/flat/flat-2.jpg', alt: 'Rectangle Image 1' },
  { src: '/flat/flat-3.jpg', alt: 'Rectangle Image 1' },
  { src: '/flat/flat-4.jpg', alt: 'Rectangle Image 1' },
];

const Gallery = () => {
  return (
    <div className="max-w-4xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mx-auto">
      {images.map((image, index) => (
        <div
          key={index}
          className={`${
            index % 2 === 0 ? 'aspect-w-3 aspect-h-2' : 'aspect-w-2 aspect-h-1'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-full rounded-sm shadow-sm"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
