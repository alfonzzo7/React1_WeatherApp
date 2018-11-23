import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Paper, AppBar, Typography, Toolbar} from '@material-ui/core';

import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import './App.css';

const cities = ['Madrid', 'Caracas', 'Washington', 'Ciudad de México', 'Lima'];

class App extends Component {
    
    constructor() {
        super();
        this.state = {
            city: null
        };
    }

    handleSelectedLocation = city => {
        this.setState({
            city
        });
    }

    render() {
        return ( 
            <Grid>
                 <Row>
                     <AppBar position='sticky'>
                         <Toolbar>
                             <Typography variant="title" color="inherit">Weather App</Typography>
                         </Toolbar>
                     </AppBar>
                 </Row>
                 <Row>
                     <Col xs={12} md={6}>
                        <LocationList 
                            cities={cities}
                            onSelectedLocation={this.handleSelectedLocation}>
                        </LocationList>
                     </Col>
                     <Col xs={12} md={6}>
                        <Paper elevation={4}>
                            <div className="details">
                            {this.state.city ? <ForecastExtended city={this.state.city}></ForecastExtended> : <h2 className="forecastTitle">Seleccione una ciudad</h2>}
                            </div>
                        </Paper>
                     </Col>
                 </Row>
            
            
            </Grid>
        );
    }
}

export default App;