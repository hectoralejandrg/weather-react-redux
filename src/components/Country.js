import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryThunk } from "../actions/weatherActions";

const Country = ({ nameCountry }) => {
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountryThunk(nameCountry));
  }, [dispatch, nameCountry]);
  return country ? (
    <div>
      <h2>{country.nativeName}</h2>
      <p>Capital: {country.capital}</p>
      <p>{country.region} {country.subregion}</p>
      <img src={country.flag} alt="flat" height="50" width="65" />
      <p>Population</p>
      <span>{country.population.toLocaleString("en-US")}</span>
      <p>Language</p>
      <span>{country.languages[0].nativeName}</span>
      <p>Currency</p>
      <span>{country.currencies[0].code} - {country.currencies[0].name}</span>
    </div>
  ) : (
    <>No existen datos</>
  );
};

export default Country;
