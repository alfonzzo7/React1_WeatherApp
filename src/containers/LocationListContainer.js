import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LocationList from '../components/LocationList';
import { setCity } from '../actions';

class LocationListContainer extends Component {
    handleSelectedLocation = city => {
        this.props.dispatchSetCity(city);
    }

    render() {
        return (
            <LocationList 
                cities={this.props.cities}
                onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToPropsActions = (dispatch) => ({
    dispatchSetCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);