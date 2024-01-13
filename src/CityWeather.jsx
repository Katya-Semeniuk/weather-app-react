import React from "react";

export default function CityWeather(props) {
  if (props.data === null) {
    return "Find city temperature";
  } else {
    const { city, country, condition, temperature, wind } = props.data;
    let temp = Math.round(temperature.current);
    return (
      <div>
        <p>City: {city}</p>
        <p>Country: {country}</p>
        <p>Condition: {condition.description}</p>
        <p>Temperature: {temp}°</p>
        <p>Humidity: {temperature.humidity} %</p>
        <p>Wind: {wind.speed}km/h</p>
        <img src={condition.icon_url} alt="Icon weather" />
      </div>
    );
  }
}
