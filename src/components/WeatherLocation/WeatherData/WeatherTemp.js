import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import './styles.css';

const icons = {
    cloud: 'cloud',
    cloudy: 'cloudy',
    sunny: 'day-sunny',
    rain: 'rain',
    snow: 'snow',
    windy: 'windy'
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = '4x';
    if (icon) {
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>
    } else {
        return <WeatherIcons className="wicon" name={'na'} size={sizeIcon}></WeatherIcons>
    }
};


const WeatherTemp = ({temp, weatherState}) => ( 
    <div className="weatherTempCont">
        {getWeatherIcon(weatherState)}
        <span className="temp">{`${temp}`}</span>
        <span className="temptype">{`Cº`}</span>
    </div>
);

WeatherTemp.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemp;