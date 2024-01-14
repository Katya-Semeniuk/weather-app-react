import React from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast({ city }) {
  if (!city) {
    return;
  }
  const apiKey = "8907b2tf0b29bfcd0b41134b5b1c6ao9";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

  function displayForecast(res) {
    if (!res.data) {
      return;
    }
  }
  axios.get(apiUrl).then(displayForecast);

  return (
    <div className="footer">
      <p>
        This project was coded by
        <a
          href="https://github.com/Katya-Semeniuk"
          target="_blank"
          rel="noreferrer"
        >
          Kateryna Semeniuk
        </a>
        and is
        <a
          href="https://github.com/Katya-Semeniuk/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          on GitHub
        </a>
      </p>
    </div>
  );
}
