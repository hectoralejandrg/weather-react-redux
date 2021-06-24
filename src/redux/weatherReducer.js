import { ACTIONS_TYPES } from "../actions/weatherActions";

const INITIAL_STATE = {
  data: [],
  isLoading: false
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.fetchWeather:
      return {
        ...state,
        isLoading: true
      };
    case ACTIONS_TYPES.fetchWeatherSuccess:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case ACTIONS_TYPES.fetchWeatherFail:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};