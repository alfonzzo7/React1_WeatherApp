import { url_base_weather, url_base_forecast, api_key } from '../constants/api_url';

export const getUrlWeather = location => {
    return `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;
};

export const getUrlForecast = location => {
    return `${url_base_forecast}?q=${location}&appid=${api_key}&units=metric`;
};