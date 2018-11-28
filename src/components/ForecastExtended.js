import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import ForecastItem from './ForecastItem';

import './styles.css';

const renderDays = (forecastData) => {
    return forecastData.map((forecast) => (
        <ForecastItem 
            weeDay={forecast.weeDay} 
            hour={forecast.hour} 
            data={forecast.data} 
            key={`${forecast.weeDay}-${forecast.hour}`}>
        </ForecastItem>
        )
    )
}

const renderLoading = () => {
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

const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className="forecastTitle">Pronóstico Extendido de {city}</h2>
        {forecastData ?
            renderDays(forecastData)
            :
            renderLoading()
        }
    </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;