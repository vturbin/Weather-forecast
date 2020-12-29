import React from "react";
import "./WeatherCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudShowersHeavy,faCloud,faCloudSun,faCloudSunRain,faSnowflake,faSun } from '@fortawesome/free-solid-svg-icons'


const WeatherCard = (props) => {

    const weatherIcons = {
        "cloudy" : faCloud,
        "cloud-sun": faCloudSun,
        "cloud-sun-rain": faCloudSunRain,
        "snow": faSnowflake,
        "sunny": faSun,
        "showers": faCloudShowersHeavy
    }
    return (
        <div className="card-wrapper">
        <h2 className="card-day">Friday</h2>
        <p className="card-date">29.12</p>
        <FontAwesomeIcon icon={weatherIcons['snow']} className="weather-icon"/>
        <h1>4°C</h1>
        <p>clear sky</p>
        </div>
    );
}

export default WeatherCard;