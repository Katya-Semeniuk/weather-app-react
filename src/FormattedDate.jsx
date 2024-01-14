import "./FormattedDate.css";

export default function FormattedDate({ date }) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

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

  return (
    <div className="details">
      <div>
        {formattedDay},{" "}
        <span>
          {hours}:{minutes}
        </span>
      </div>
    </div>
  );
}
