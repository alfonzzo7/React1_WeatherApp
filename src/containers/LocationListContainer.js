import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LocationList from '../components/LocationList';
import * as actions from '../actions';
import { getWeatherCities } from '../reducers';

class LocationListContainer extends Component {
    componentDidMount() {
        this.props.setWeather(this.props.cities);
    }

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
    }

    render() {
        return (
            <LocationList 
                cities={this.props.citiesWeather}
                onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string,
};

const mapStateToProps = (state) => ({
    citiesWeather: getWeatherCities(state)
});

// const mapDispatchToProps = (dispatch) => ({
//     setSelectedCity: value => dispatch(setSelectedCity(value)),
//     setWeather: cities => dispatch(setWeather(cities))
// });

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);