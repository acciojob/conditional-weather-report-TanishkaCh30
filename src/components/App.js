
import React,{useState}from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {

  let [weatherData,setweatherData] = useState({ temperature: 25, conditions: "Sunny" })
  return (
    <div>
        <WeatherDisplay
         temperature={weatherData.temperature}
         conditions={weatherData.conditions}
        />
    </div>
  )
}

export default App
