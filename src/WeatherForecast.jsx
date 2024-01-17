import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(res) {
    console.log(res.data.daily);
  }
  if (props.data === null) {
    return;
  } else {
    let longitude = props.data.coordinates.longitude;
    let latitude = props.data.coordinates.latitude;

    let apiKey = "8944afa6845bd7c413a687258d3211ef";

    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiURL).then(handleResponse);
  }

  return (
    <div>
      <h1>HAllo Forecast</h1>
    </div>
  );
}
