import React from 'react';

import PropTypes from 'prop-types';

import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemp from './WeatherTemp';

import './styles.css';

const WeatherData = ({data: {temp, weatherState, humidity, wind}}) => ( 
    <div className="weatherDataCont">
        <WeatherTemp temp={temp} weatherState={weatherState}></WeatherTemp>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>
);

WeatherData.propTypes = {
    data: PropTypes.shape({
        temp: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    })
}

export default WeatherData;