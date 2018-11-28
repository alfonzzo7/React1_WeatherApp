import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import PropTypes from 'prop-types';

import Location from './Location';
import WeatherData from './WeatherData';

import './styles.css';

const WeatherLocation = ({onWeatherLocationClick, city, data}) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}> 
        {city ? <Location city={city}></Location> : ''}
        {data ? <WeatherData data={data}></WeatherData>: <CircularProgress/>}
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temp: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    })
}

export default WeatherLocation;