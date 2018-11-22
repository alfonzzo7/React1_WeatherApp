import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city='Madrid'></WeatherLocation>
        <WeatherLocation city='Barcelona'></WeatherLocation>
        <WeatherLocation city='Valencia'></WeatherLocation>
    </div>
);

export default LocationList;