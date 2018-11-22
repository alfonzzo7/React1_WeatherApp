import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import Location from './Location';
import WeatherData from './WeatherData';

import transformWeather from '../../services/transformWeather';
import getUrlWeather from '../../services/getUrlWeather';

import './styles.css';

class WeatherLocation extends Component {

    constructor(props) {
        const {city} = props;
        super(props);
        this.state = {
            city: city,
            data: null
        };
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillMount() {
        console.log('UNSAFE componentWillMount');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('UNSAFE componentWillUpdate');
    }

    handleUpdateClick = () => {
        fetch(getUrlWeather(this.state.city))
            .then((resp) => {
                return resp.json();
            })
            .then((dataWeather) => {
                // console.log(dataWeather);
                this.setState({
                    data: transformWeather(dataWeather)
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        console.log('render');
        return (
            <div className="weatherLocationCont"> 
                {this.state.city ? <Location city={this.state.city}></Location> : ''}
                {this.state.data ? <WeatherData data={this.state.data}></WeatherData>: <CircularProgress/>}
            </div>
        );
    }
};

export default WeatherLocation;