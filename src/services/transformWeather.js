import * as weather from '../constants/weather';

const getWeatherState = weatherState => {
    const {id} = weatherState;

    if (id < 300) {
        return weather.THUNDER
    } else if (id < 400) {
        return weather.DRIZZLE;
    } else if (id < 600) {
        return weather.RAIN;
    } else if (id < 700) {
        return weather.SNOW;
    } else if (id === 800) {
        return weather.SUN;
    } else {
        return weather.CLOUD;
    }
};

const transformWeather = weatherData => {
    const {name} = weatherData;
    const {temp, humidity} = weatherData.main;
    const {speed} = weatherData.wind;
    const weatherState = getWeatherState(weatherData.weather[0]);

    return {
        city: name,
        temp,
        weatherState,
        humidity,
        wind: speed
    }
};

export default transformWeather;

