import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecast = forecastData => {
    return forecastData.list.filter(item => (
        moment.unix(item.dt).utc().hour() === 6 || 
        moment.unix(item.dt).utc().hour() === 12 || 
        moment.unix(item.dt).utc().hour() === 18
    )).map(item => (
        {
            weeDay: moment.unix(item.dt).format('dddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    ))
};

export default transformForecast;