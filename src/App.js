import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Paper, AppBar, Typography, Toolbar} from '@material-ui/core';

import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

import './App.css';

const cities = ['Madrid', 'Caracas', 'Washington', 'Ciudad de México', 'Lima'];

class App extends Component {

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
                        <LocationListContainer cities={cities}></LocationListContainer>
                     </Col>
                     <Col xs={12} md={6}>
                        <Paper elevation={4}>
                            <div className="details">
                            <ForecastExtendedContainer></ForecastExtendedContainer>
                            </div>
                        </Paper>
                     </Col>
                 </Row>
            </Grid>
        );
    }
}

export default App;