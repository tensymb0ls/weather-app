import React from 'react';

const Weather = ({ weather, message }) => {
    if (message) {
        return <p className='infoWeath'>{message}</p>
    } else {
        return (
            <div className='infoWeath'>
                <p>Location: {weather.city}</p>
                <p>Temp: {weather.temp} °C</p>
                <p>Pressure: {weather.pressure} mmHg</p>
                <p>Sky: {weather.sky}</p>
                <div className="weather-icon" style={{ backgroundImage: `url(https://openweathermap.org/img/wn/${weather.icon}@2x.png)` }} />
            </div>
        );
    }
};

export default Weather;