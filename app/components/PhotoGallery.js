import { useState } from 'react';

const images = [
  { src: '/flat/flat-0.jpg', alt: 'Rectangle Image 1' },
  { src: '/flat/flat-1.jpg', alt: 'Rectangle Image 1' },
  { src: '/flat/flat-2.jpg', alt: 'Rectangle Image 1' },
  { src: '/flat/flat-3.jpg', alt: 'Rectangle Image 1' },
  { src: '/flat/flat-4.jpg', alt: 'Rectangle Image 1' },
  { src: '/flat/flat-5.jpg', alt: 'Rectangle Image 1' },
  { src: '/flat/flat-6.jpg', alt: 'Rectangle Image 1' },
];

const Gallery = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="max-w-4xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0
                ? 'aspect-w-3 aspect-h-2'
                : 'aspect-w-2 aspect-h-1'
            }`}
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full rounded-sm shadow-sm cursor-pointer"
            />
          </div>
        ))}
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative p-4 bg-white rounded-lg shadow-lg max-w-3xl max-h-[80vh] w-full h-auto">
            <button
              className="absolute top-2 right-2 text-black text-2xl"
              onClick={closePopup}
            >
              &times;
            </button>
            <div className="flex items-center justify-center h-full w-full">
              <img
                src={selectedImage?.src}
                alt={selectedImage?.alt}
                className="object-contain max-h-full max-w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
