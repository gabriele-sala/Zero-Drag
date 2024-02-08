import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import DragCalculator from './components/DragCalculator'; // Assuming this is placed inside a 'components' folder in src
import AirDensityInput from './components/AirDensityInput"; 
// If other components like F1Image, Formula1DragInfo, DragCoefficientTable are created, import them here as well

 
function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} direction="column"> 
        <Grid item>
          <Typography variant="h3" align="center" gutterBottom>
            F1 Aerodynamic Drag Calculator 
          </Typography>
        </Grid>
        <Grid item>
          <AirDensityInput  /> 
        </Grid>
        <Grid item> 
          <DragCalculator />  
        </Grid> 
      </Grid>
    </Container>
  );
}


export default App;
