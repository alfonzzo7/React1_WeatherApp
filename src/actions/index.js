import { getUrlForecast, getUrlWeather } from "../services/getUrlWeather";
import transformForecast from "../services/transformForecast";
import transformWeather from "../services/transformWeather";

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = (payload) => ({type: SET_CITY, payload});
const setForecastData = (payload) => ({type: SET_FORECAST_DATA, payload});

const getWeatherCity = (payload) => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = (payload) => ({type: SET_WEATHER_CITY, payload});

export const setSelectedCity = (payload) => {
    return (dispatch, getState) => {
        // Activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        const now = new Date();

        if (date && (now - date) < 30 * 60 * 1000){
            return;
        }

        return fetch(getUrlForecast(payload))
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            const forecastData = transformForecast(data);
            // Modifica el estado con el resultado de la promise (fetch)
            dispatch(setForecastData({city: payload, forecastData}));
        })
        .catch((err) => {
            // console.error(err);
            alert(err);
        });
    };
};

export const setWeather = (payload) => {
    return dispatch => {
        payload.forEach(city => {
            // Activar en el estado un indicador de busqueda de datos
            dispatch(getWeatherCity(city));

            return fetch(getUrlWeather(city))
                .then((resp) => {
                    return resp.json();
                })
                .then((weatherData) => {
                    const weather = transformWeather(weatherData);
                    // Modifica el estado con el resultado de la promise (fetch)
                    dispatch(setWeatherCity({city, weather}));
                })
                .catch((err) => {
                    // console.error(err);
                    alert(err);
                });
        });
    };
};