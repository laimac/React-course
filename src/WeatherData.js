
import Form from "./Form";
import Footer from "./Footer";

import "./styles.css";

export default function WeatherData(props) {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Form />
          <div className="overview">
            <h1 id="city">{props.city}</h1>
            <ul>
              <li>
                Last updated: <span id="date">{props.date}</span>
              </li>
              <li id="description"></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="Clear"
                  id="icon"
                  className="float-left"
                />
                <div className="float-left">
                  <strong id="temperature">{props.temperature}</strong>
                  <span className="units"> °C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity">{props.humidity}</span>%
                </li>
                <li>
                  Wind: <span id="wind">{props.wind}</span> m/h
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
