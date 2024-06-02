// components/Popup.js
import Image from 'next/image';

const Popup = ({ imageSrc, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-11/12 md:w-3/4 lg:w-1/2 bg-white p-4 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-white bg-black rounded-full p-2"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="relative w-full h-0 pb-[56.25%]">
          {' '}
          {/* Aspect ratio for the popup */}
          <Image
            src={imageSrc}
            alt="Selected"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
