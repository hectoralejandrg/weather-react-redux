import { ACTIONS_TYPES } from "../actions/weatherActions";

const INITIAL_STATE = {
  data: null,
  location: { lat: 0, lon: 0 },
  country: null,
  forecast: null,
  isLoading: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.fetchWeather:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.fetchWeatherSuccess:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ACTIONS_TYPES.fetchWeatherFail:
      return {
        ...state,
        isLoading: false,
      };
    case ACTIONS_TYPES.fetchLocation:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.fetchLocationSuccess:
      return {
        ...state,
        isLoading: false,
        location: action.payload,
      };
    case ACTIONS_TYPES.fetchLocationFail:
      return {
        ...state,
        isLoading: false,
      };
    case ACTIONS_TYPES.fetchCountry:
      return {
        ...state,
        isLoading: false,
      };
    case ACTIONS_TYPES.fetchCountrySuccess:
      return {
        ...state,
        isLoading: true,
        country: action.payload,
      };
    case ACTIONS_TYPES.fetchCountryFail:
      return {
        ...state,
        isLoading: false,
      };
    case ACTIONS_TYPES.fetchForecast:
      return {
        ...state,
      };
    case ACTIONS_TYPES.fetchForecastSuccess:
      return {
        ...state,
        forecast: action.payload,
      };
    case ACTIONS_TYPES.fetchForecastFail:
      return {
        ...state,
      };
    default:
      return state;
  }
};
