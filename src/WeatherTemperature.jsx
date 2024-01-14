import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature({ temperature }) {
  let [unit, setUnit] = useState("celsium");
  let [fahr, setFahr] = useState(null);

  function showFahrenheit(e) {
    e.preventDefault();
    let fahrenheit = Math.round((temperature * 9) / 5 + 32);
    setUnit("fahrenheit");
    setFahr(fahrenheit);
  }

  function showCelsium(e) {
    e.preventDefault();
    setUnit("celsium");
  }
  return (
    <div className="d-flex">
      {unit === "celsium" ? (
        <div className="current-temp">{temperature}</div>
      ) : (
        <div className="current-temp">{fahr}</div>
      )}

      <div className="current-unit">
        <a href="/" onClick={showCelsium}>
          °C
        </a>
        |
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </div>
    </div>
  );
}
