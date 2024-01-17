import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(res) {
    console.log(res);
  }
  if (props.data === null) {
    return;
  } else {
    let longitude = props.data.coordinates.longitude;
    let latitute = props.data.coordinates.latitute;

    let apiKey = "8907b2tf0b29bfcd0b41134b5b1c6ao9";
    let apiURL = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitute}&key=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);
  }

  return (
    <div>
      <h1>HAllo Forecast</h1>
    </div>
  );
}
