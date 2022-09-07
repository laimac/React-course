import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import WeatherData from "./WeatherData";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <WeatherData
      city="Jokkmokk"
      temperature={19}
      wind={8}
      humidity={50}
      date="Wednesday 12:04"
    />
  </StrictMode>
);
