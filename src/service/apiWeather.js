import axios from "axios";

const apiKey = "00555e605b3d247bbc5790b5f3eaf231";
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?`

export const getWeather = (location) => {
  const url = `${baseUrl}lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric`
  return axios.get(url);
};
