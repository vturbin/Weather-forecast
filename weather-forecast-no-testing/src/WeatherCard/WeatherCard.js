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

    const getDayOfWeek = (date) => {
        const dayOfWeek = new Date(date).getDay();
        console.log(dayOfWeek)
        return isNaN(dayOfWeek) ? null : 
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
      }
    
    const weekDay = getDayOfWeek(props.date);

    return (
        <div className="card-wrapper">
        <h2 className="card-day">{weekDay}</h2>
        <p className="card-date">29.12</p>
        <FontAwesomeIcon icon={weatherIcons[props.weatherType]} className="weather-icon"/>
        <h1>{props.temperature}°C</h1>
        <p>{props.description}</p>
        </div>
    );
}

export default WeatherCard;