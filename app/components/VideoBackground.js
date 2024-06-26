// components/VideoBackground.js
import { useEffect, useRef } from 'react';
import { PanoViewer } from '@egjs/view360';

const VideoBackground = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const viewer = new PanoViewer(videoRef.current, {
        projectionType: PanoViewer.PROJECTION_TYPE.EQUIRECTANGULAR,
      });

      videoRef.current.src = src;
      videoRef.current.play().catch((error) => {
        console.error('Error attempting to play the video:', error);
      });

      return () => {
        viewer.destroy();
      };
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover"
      muted
      loop
      autoPlay
      playsInline
      controls={false}
    />
  );
};

export default VideoBackground;
