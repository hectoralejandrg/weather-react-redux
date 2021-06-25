import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLocationThunk,
  fetchWeatherThunk,
} from "./actions/weatherActions";
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const location = useSelector((state) => state.location);
  useEffect(() => {
    dispatch(fetchLocationThunk());
  }, [dispatch]);
  useEffect(() => {
    if (location.lat && location.lon) {
      dispatch(fetchWeatherThunk(location));
    }
  }, [dispatch, location]);
  return (
    <div className="app d-flex justify-content-center align-items-center">
      <div className="wraper">
        <Weather />
      </div>
    </div>
  );
}

export default App;
