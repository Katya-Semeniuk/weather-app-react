import React from "react";
import "./CityWeather.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function CityWeather(props) {
  const { city, country, condition, temperature, wind, time } = props.data;

  return (
    <div className="CityWeather">
      <p className="city">
        {city}, <span className="country">{country}</span>
      </p>
      <FormattedDate dataTime={time} />

      <p className="text-capitalize">{condition.description}</p>

      <div className="row">
        <div className="col-6 d-flex align-items-center">
          <img src={condition.icon_url} alt="Icon weather" />
          <WeatherTemperature temperature={Math.round(temperature.current)} />
        </div>
        <div className="col-6">
          <ul className="description">
            <li>
              Humidity:{" "}
              <span className="highlight">{temperature.humidity}%</span>
            </li>
            <li>
              Wind: <span className="highlight">{wind.speed}km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
