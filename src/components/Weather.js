import React from "react";
import Country from "./Country";
import "./Weather.css";

const Weather = ({ data }) => {
  return data ? (
    <div className="card">
      <div className="wraper-header text-center text-light">
        <div>
          <div className="display-1">
            {Math.round(data.main.temp)}°
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            />
          </div>
          <h2 className="fw-lighter text-uppercase">
            {data.weather[0].description}
          </h2>
        </div>
        <div className="text-light">
          <h2>
            {data.name},{data.sys.country}
          </h2>
        </div>
        <div className="description">
          <div>
            <p>HUMEDITY</p>
            <p>{data.main.humidity}%</p>
          </div>
          <div>
            <p>SPEED</p>
            <p>{data.wind.speed}m/s</p>
          </div>
        </div>
      </div>
      <div className="wraper-body">
        <div>
          <Country nameCountry={data.sys.country}/>
        </div>
        <div>demas</div>
      </div>
    </div>
  ) : (
    "No exiten datos"
  );
};

export default Weather;
