'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const photos = [
  { src: '/images/chalet-remy1.jpg', alt: 'Photo 1' },
  { src: '/images/chalet-remy1.jpg', alt: 'Photo 2' },
  { src: '/images/chalet-remy3.jpg', alt: 'Photo 3' },
  // Add more photos as needed
];

const PhotoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const popupRef = useRef(null);

  const openPopup = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const showNext = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const showPrev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      showNext();
    } else if (event.key === 'ArrowLeft') {
      showPrev();
    } else if (event.key === 'Escape') {
      closePopup();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openPopup(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              layout="responsive"
              width={700}
              height={475}
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div
            ref={popupRef}
            className="relative bg-white p-4 rounded-lg max-w-3xl w-full"
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-4xl"
              onClick={closePopup}
            >
              &times;
            </button>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 text-4xl"
              onClick={showPrev}
            >
              &larr;
            </button>
            <Image
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              layout="responsive"
              width={700}
              height={475}
              className="object-contain"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 text-4xl"
              onClick={showNext}
            >
              &rarr;
            </button>
            <p className="mt-2 text-center text-gray-700">
              {photos[currentIndex].alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
