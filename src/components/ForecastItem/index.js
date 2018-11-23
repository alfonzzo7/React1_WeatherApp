import React from 'react';
import PropTypes from 'prop-types';

import WeatherData from '../WeatherLocation/WeatherData';

const ForecastItem = ({weeDay, hour, data}) => (
    <div>
        <h3>{weeDay} {hour} hs</h3>
        <WeatherData data={data}></WeatherData>
    </div>
)

ForecastItem.propTypes = {
    weeDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temp: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    })
}

export default ForecastItem;