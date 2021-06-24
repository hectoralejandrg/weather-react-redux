export const getLocation = () =>
  navigator.geolocation.getCurrentPosition(handlePosition);

const handlePosition = (pos) => {
  const { latitude, longitude } = pos.coords;
  //setLocation({ lat: latitude, lon: longitude });
  return latitude, longitude
};
