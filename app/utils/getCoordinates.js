// utils/getCoordinates.js
const getCoordinates = async (address) => {
  const params = {
    address,
    key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  };
  const url = `https://maps.googleapis.com/maps/api/geocode/json?${new URLSearchParams(
    params
  ).toString()}`;
  console.log('Request URL:', url);

  try {
    const response = await axios.get(url);
    const { results } = response.data;
    if (results.length > 0) {
      const { lat, lng } = results[0].geometry.location;
      return { lat, lng };
    } else {
      throw new Error('No results found for the given address');
    }
  } catch (error) {
    console.error(
      'Error fetching coordinates:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
