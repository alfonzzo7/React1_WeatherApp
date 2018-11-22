import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Paper, AppBar, Typography, Toolbar} from '@material-ui/core';
import LocationList from './components/LocationList';
import './App.css';

const cities = ['Madrid', 'Caracas', 'Washington', 'Ciudad de México', 'Lima'];

class App extends Component {
    handleSelectedLocation = city => {
        console.log('handleSelectionLocation', city);
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
                            <div className="details"></div>
                        </Paper>
                     </Col>
                 </Row>
            
            
            </Grid>
        );
    }
}

export default App;