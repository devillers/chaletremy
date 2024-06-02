// components/Gallery.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Popup from './Popup';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    fetch('/api/images')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching images:', error)); // Log fetch errors
  }, []);

  const openPopup = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-64 cursor-pointer overflow-hidden rounded-lg shadow-md"
            onClick={() => openPopup(src)}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {isOpen && <Popup imageSrc={selectedImage} onClose={closePopup} />}
    </div>
  );
};

export default Gallery;
