import Image from 'next/image';

const photos = [
  '/flat/flat-0.jpg',
  '/flat/flat-1.jpg',
  '/flat/flat-2.jpg',
  '/flat/flat-3.jpg',
  '/flat/flat-4.jpg',
  '/flat/flat-5.jpg',
  '/flat/flat-6.jpg',
];

const PhotoGallery = () => {
  return (
    <div className="container mx-auto px-0 max-w-[800px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`relative w-full ${
              index % 2 === 0
                ? 'h-[200px] md:h-[300px]'
                : 'h-[200px] md:h-[300px]'
            }`}
          >
            <Image
              src={photo}
              alt={`Photo ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
