import * as weather from '../constants/weather';

const getWeatherState = weatherState => {
    // weatherState.weather[0].main
    return weather.CLOUDY;
};

const transformWeather = weatherData => {
    const {name} = weatherData;
    const {temp, humidity} = weatherData.main;
    const {speed} = weatherData.wind;
    const weatherState = getWeatherState(weatherData);

    return {
        city: name,
        temp,
        weatherState,
        humidity,
        wind: speed
    }
};

export default transformWeather;

