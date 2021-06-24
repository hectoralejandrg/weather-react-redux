import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherThunk } from "./actions/weatherActions";

function App() {
  const [location, setLocation] = useState({lat:0, lon:0});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchWeatherThunk());
  }, [dispatch]);
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }
    navigator.geolocation.getCurrentPosition(handlePosition);
  }, []);
  const handlePosition = (pos) => {
    const { latitude, longitude } = pos.coords;
    setLocation({lat: latitude, lon: longitude});
  };
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <h2>Localizacion: {location ? `Latitud: ${location.lat} Longitud: ${location.lon}` : "No hay ubicacion"}</h2>
    </div>
  );
}

export default App;
