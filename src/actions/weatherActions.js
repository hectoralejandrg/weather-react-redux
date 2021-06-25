import { getWeather } from "../service/apiWeather";

export const ACTIONS_TYPES = {
  fetchWeather: "fetch_weather",
  fetchWeatherSuccess: "fetch_weather_success",
  fetchWeatherFail: "fetch_weather_fail",
  fetchLocation: "fetch_location",
  fetchLocationSuccess: "fetch_location_success",
  fetchLocationFail: "fetch_location_fail",
};

export const fetchWeather = () => ({
  type: ACTIONS_TYPES.fetchWeather,
});
export const fetchWeatherSuccess = (weather) => ({
  type: ACTIONS_TYPES.fetchWeatherSuccess,
  payload: weather,
});
export const fetchWeatherFail = (err) => ({
  type: ACTIONS_TYPES.fetchWeatherFail,
  payload: err,
});
export const fetchWeatherThunk = (location) => {
  return (dispatch) =>
    getWeather(location)
      .then((res) => dispatch(fetchWeatherSuccess(res.data)))
      .catch((err) => dispatch(fetchWeatherFail(err)));
};
export const fetchLocation = () => ({
  type: ACTIONS_TYPES.fetchLocation,
});
export const fetchLocationSuccess = (location) => ({
  type: ACTIONS_TYPES.fetchLocationSuccess,
  payload: location,
});
export const fetchLocationFail = (err) => ({
  type: ACTIONS_TYPES.fetchLocationFail,
  payload: err,
});
export const fetchLocationThunk = () => {
  return (dispatch) =>
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        dispatch(fetchLocationSuccess({ lat: latitude, lon: longitude }));
      },
      () => dispatch(fetchLocationFail())
    );
};
