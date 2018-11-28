import React, { Component } from 'react';
import { connect } from 'react-redux';

import ForecastExtended from '../components/ForecastExtended';
import { getForecastDataFromCities, getCity } from '../reducers';

class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            this.props.city ? <ForecastExtended city={city} forecastData={forecastData}></ForecastExtended> : <h2 className="forecastTitle">Seleccione una ciudad</h2>
        );
    }
}

const mapStateToProps = (state) => ({ city: getCity(state), forecastData: getForecastDataFromCities(state) });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);