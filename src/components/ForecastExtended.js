import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import ForecastItem from './ForecastItem';

import {getUrlForecast} from '../services/getUrlWeather';
import transformForecast from '../services/transformForecast';

import './styles.css';

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = {
            forecastData: null
        };
    }

    componentDidMount() {
        this.getForecast(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            forecastData: null
        });
        this.getForecast(nextProps.city);
    }

    getForecast(city) {
        fetch(getUrlForecast(city))
        .then((resp) => {
            return resp.json();
        })
        .then((forecastData) => {
            this.setState({
                forecastData: transformForecast(forecastData)
            });
        })
        .catch((err) => {
            // console.error(err);
            alert(err);
        });
    }

    renderDays(forecastData) {
        return forecastData.map((forecast, index) => (
            <ForecastItem 
                weeDay={forecast.weeDay} 
                hour={forecast.hour} 
                data={forecast.data} 
                key={index}>
            </ForecastItem>
            )
        )
    }

    renderLoading() {
        return (
            <Grid>
                 <Row center="xs">
                     <Col>
                        <CircularProgress size={100}/>
                     </Col>
                 </Row>
            </Grid>
        )
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h2 className="forecastTitle">Pronóstico Extendido de {city}</h2>
                {forecastData ?
                    this.renderDays(forecastData)
                    :
                    this.renderLoading()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;