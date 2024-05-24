import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { getCoordinates } from '../utils/getCoordinates';

const MapComponent = ({ address }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [zoom] = useState(18); // Set the initial zoom level to the maximum value

  useEffect(() => {
    const fetchCoordinates = async () => {
      const coords = await getCoordinates(address);
      if (coords) {
        setCoordinates(coords);
      }
    };

    fetchCoordinates();
  }, [address]);

  useEffect(() => {
    if (typeof window !== 'undefined' && coordinates) {
      if (!document.getElementById('map')._leaflet_id) {
        const map = L.map('map', {
          center: [coordinates.lat, coordinates.lon],
          zoom: zoom,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([coordinates.lat, coordinates.lon]).addTo(map);

        // Cleanup function to remove map on unmount
        return () => {
          map.remove();
        };
      }
    }
  }, [coordinates, zoom]);

  return (
    <div
      id="map"
      className="z-10"
      style={{ height: '100%', width: '100%' }}
    ></div>
  );
};

export default MapComponent;
