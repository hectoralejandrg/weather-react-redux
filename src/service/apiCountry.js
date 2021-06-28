import axios from "axios";

const baseUrl = `https://restcountries.eu/rest/v2/alpha/`;

export const getCountry = (country)=> axios.get(`${baseUrl}${country}`)