import React from "react";
import "./Weather.css";

const Weather = ({ data }) => {
  return data ? (
    <div class="card">
      <div className="wraper-header text-center">
        <div>
          <div className="display-2">{data.main.temp}°</div>
          <h2 className="fw-lighter text-uppercase">
            {data.weather[0].description}
          </h2>
        </div>
        <div>
          <h2>
            {data.name},{data.sys.country}
          </h2>
        </div>
        <div className="description">
          <div>{data.main.humidity}% HUMEDITY</div>
          <div>{data.wind.speed}m/s SPEED</div>
        </div>
      </div>
      <div className="wraper-body">
        <div>twitter</div>
        <div>demas</div>
      </div>
    </div>
  ) : (
    "No exiten datos"
  );
};

export default Weather;
