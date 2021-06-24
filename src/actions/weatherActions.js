import { getWeather } from "../service/apiWeather";

export const ACTIONS_TYPES = {
  fetchWeather: "fetch_weather",
  fetchWeatherSuccess: "fetch_weather_success",
  fetchWeatherFail: "fetch_weather_fail",
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
export const fetchWeatherThunk = () => {
  return (dispatch) =>
    getWeather()
      .then((res) => dispatch(fetchWeatherSuccess(res.data)))
      .catch((err) => dispatch(fetchWeatherFail(err)));
};
