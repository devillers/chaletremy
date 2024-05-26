import { useState } from 'react';

export default function PhotoGallery({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openPopup = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="container mx-auto p-0">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => openPopup(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover "
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 rounded-sm flex items-center justify-center z-50">
          <div className="relative bg-white max-w-4xl max-h-[90vh] w-auto h-auto rounded-md">
            <button
              className="absolute top-0 right-0 m-2 text-black"
              onClick={closePopup}
            >
              X
            </button>
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
