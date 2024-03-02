import "./FormattedDate.css";

export default function FormattedDate({ dataTime }) {
  let date = new Date(dataTime * 1000);

  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
