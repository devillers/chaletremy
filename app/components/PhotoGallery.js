import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

export default function PhotoGallery({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openPopup = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setCurrentImageIndex(null);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closePopup();
    }
  };

  return (
    <div className="container mx-auto p-0">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => openPopup(index)}
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
        <div
          className="fixed inset-0 bg-black bg-opacity-60 rounded-sm flex items-center justify-center z-50 modal-overlay "
          onClick={handleOutsideClick}
        >
          <div className="relative bg-white max-w-4xl max-h-[90vh] w-auto h-auto rounded-md p-2">
            <button
              className="absolute top-0 right-0 m-2 text-white text-[30px] opacity-50 hover:transition-opacity duration-700 hover:opacity-100"
              onClick={closePopup}
            >
              <IoMdClose />
            </button>
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-full h-full object-contain rounded-sm "
            />
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 m-2 text-white text-[30px] opacity-50 hover:transition-opacity duration-700 hover:opacity-90"
              onClick={showPreviousImage}
            >
              <FaArrowAltCircleLeft />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 m-2 text-white text-[30px] opacity-50 hover:transition-opacity duration-700 hover:opacity-90"
              onClick={showNextImage}
            >
              <FaArrowAltCircleRight />
            </button>
            <h3 className="uppercase absolute bottom-[21px] -left-[3px] text-[90px] text-white text-opacity-20">
              {images[currentImageIndex].titre}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}


const Gallery = () => {
  return (
    <div className="gallery flex flex-wrap gap-4">
      {images.map((src, index) => (
        <div key={index} className="relative w-1/3 aspect-w-1 aspect-h-1">
          <Image src={src} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
        </div>
      ))}
    </div>
  );
};