import { useState, useEffect } from 'react';
import axios from 'axios';

function Weather({ capital }) {
  const [weatherData, setWeatherData] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setWeatherData(res.data);
    });
  }, [capital]);


  return (
    <div>
      {weatherData && (
        <div>
          <h2>Weather In {capital}</h2>
          <p>Temperature : {weatherData.main.temp} Celcius </p>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
          <p>Wind : {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
