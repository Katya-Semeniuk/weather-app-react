import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [forecastData, setForecastData] = useState(null);

  function createDay(forecastTime) {
    let currentDay = new Date(forecastTime * 1000);
    let day = currentDay.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let formattedDay = days[day];
    return formattedDay;
  }

  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;

  let apiKey = "8944afa6845bd7c413a687258d3211ef";

  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(apiURL);
        setForecastData(data);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchData();
  }, [props.data, apiURL]);

  if (forecastData === null) {
    return;
  } else {
    return (
      <div>
        <ul className="forecast-list">
          {forecastData.daily.map((tag, index) => {
            const weatherMain = tag.weather[0].main;

            if (index !== 0 && index !== 6) {
              return (
                <li key={index} className="forecast-item">
                  <div className="day-name">{createDay(tag.dt)}</div>
                  <span className="max-temperature">
                    {Math.round(tag.temp.max)}
                  </span>{" "}
                  /
                  <span className="min-temperature">
                    {" "}
                    {Math.round(tag.temp.min)}
                  </span>
                  <div className="forecast-description">{weatherMain}</div>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    );
  }
}
