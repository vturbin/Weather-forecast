import "./App.css";
import Header from "./Header/Header";
import WeatherCard from "./WeatherCard/WeatherCard";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [forecastDays, setForecastDays] = useState([]);

  const showForecastFromCity = (key, cityName, countryName) => {
    axios
      .get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}`,
        {
          params: {
            apikey: "O0Hlip2ayjhAOl1n5ghnNQwS2AnXJ6Um",
            metric: true,
            details: true,
            language: "en-us",
          },
        }
      )
      .then((res) => {
        const dailyForecasts = res.data.DailyForecasts;
        const transformedDailyForecasts = dailyForecasts.map((day) => {
          let weather;
          /*
        "cloudy" : faCloud,
        "cloud-sun": faCloudSun,
        "cloud-sun-rain": faCloudSunRain,
        "snow": faSnowflake,
        "sunny": faSun,
        "showers": faCloudShowersHeavy
        */
          if (
            day.Day.IconPhrase === "Rain and snow" ||
            day.Day.IconPhrase === "Showers" ||
            day.Day.IconPhrase === "Rain" ||
            day.Day.IconPhrase === "Mostly cloudy w/ showers"
          ) {
            weather = "showers";
          } else if (
            day.Day.IconPhrase === "Mostly cloudy" ||
            day.Day.IconPhrase === "Cloudy" ||
            day.Day.IconPhrase === "Dreary"
          ) {
            weather = "cloudy";
          } else if (
            day.Day.IconPhrase === "Partly sunny" ||
            day.Day.IconPhrase === "Intermittent clouds"
          ) {
            weather = "cloud-sun";
          } else if (day.Day.IconPhrase.toLowerCase().includes("snow")) {
            weather = "snow";
          } else if (day.Day.IconPhrase.toLowerCase().includes("sunny")) {
            weather = "sunny";
          }
          return {
            date: day["Date"],
            weatherType: weather,
            temperature: Math.round(day.Temperature.Maximum.Value, 0),
            description: day.Day.ShortPhrase,
          };
        });
        setForecastDays(transformedDailyForecasts);
      });
  };

  const showForecastFromCoordinates = (position) => {};

  const cityHandler = (key, cityName, countryName) => {
    showForecastFromCity(key, cityName, countryName);
  };

  const coordsHandler = (position) => {
    showForecastFromCoordinates(position);
  };

  const displayForecast = forecastDays.map((day, index) => (
    <WeatherCard
      key={index}
      date={day.date}
      weatherType={day.weatherType}
      temperature={day.temperature}
      description={day.description}
    />
  ));

  return (
    <div className="App">
      <Header city={cityHandler} coords={coordsHandler} />
      <div className="weather-cards">{displayForecast}</div>
    </div>
  );
}

export default App;
