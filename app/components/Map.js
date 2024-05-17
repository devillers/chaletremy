// components/Map.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import getCoordinates from '../utils/getCoordinates';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const libraries = ['places'];

const Map = ({ address }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [center, setCenter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const coords = await getCoordinates(address);
        setCenter(coords);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCoordinates();
  }, [address]);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!isLoaded || !center) {
    return <div>Loading Maps...</div>;
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
