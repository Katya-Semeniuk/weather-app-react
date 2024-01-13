import React, { useState } from "react";
import axios from "axios";
import CityWeather from "./CityWeather";
import Forecast from "./Forecast";

export default function WeatherSearch() {
  let [query, setQuery] = useState("");
  let [fetch, setFetch] = useState(null);
  let [city, setCity] = useState("");

  function displayWeather(res) {
    if (!res.data) {
      return;
    }
    setFetch(res.data);
    setCity(res.data.city);
  }

  function searchCity(city) {
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity(query);
  }

  function handleOnChange(event) {
    setQuery(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={handleOnChange}
          placeholder="Enter the city..."
        />
        <button type="submit">Search</button>
      </form>

      <CityWeather data={fetch} />
      <Forecast city={city} />
    </div>
  );
}
