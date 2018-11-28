import React from 'react';
import WeatherLocation from './WeatherLocation';

import PropTypes from 'prop-types';

import './styles.css';

const LocationList = ({cities, onSelectedLocation}) => {
    const handleWeatherLocationClick = city => {
        onSelectedLocation(city);
    };

    const arrayToComponents = cities => (
        cities.map((city) => {
            return (
                <WeatherLocation 
                    city={city.name} 
                    key={city.key}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
                    data={city.data}>
                </WeatherLocation>
            )

        })
    );

    return (
        <div className="locationList">
            {arrayToComponents(cities)}
        </div>
    )
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;