import { url_base_weather, api_key } from '../constants/api_url';

const getUrlWeather = location => {
    return `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;
};

export default getUrlWeather;