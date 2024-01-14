import React from "react";
import "./CityWeather.css";
import FormattedDate from "./FormattedDate";

export default function CityWeather(props) {
  if (props.data === null) {
    return "Data is null";
  } else {
    const { city, country, condition, temperature, wind, time } = props.data;
    let temp = Math.round(temperature.current);

    return (
      <div className="CityWeather">
        <p className="city">
          {city}, <span className="country">{country}</span>
        </p>
        <FormattedDate date={new Date(time * 1000)} />

        <p className="text-capitalize">{condition.description}</p>

        <div className="row">
          <div className="col-6 d-flex align-items-center">
            <img src={condition.icon_url} alt="Icon weather" />
            <div className="current-temperature">{temp}°</div>
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
}
