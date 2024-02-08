import * as React from 'react';
import { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material'; 

import AirDensityInput from './components/AirDensityInput';
import DragCalculator from './components/DragCalculator';
import DragCoefficientTable from './components/DragCoefficientTable';
import Formula1DragInfo from './components/Formula1DragInfo';
import F1Image from './components/F1Image';

function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" align="center" gutterBottom>
            F1 Aerodynamic Drag Calculator
          </Typography>
          <F1Image />
        </Grid>
        <Grid item xs={12} md={6}>
          <Formula1DragInfo />
        </Grid>

        <Grid item xs={12}>
          <AirDensityInput />
        </Grid>
        <Grid item xs={12}>
          <DragCalculator /> 
        </Grid>
        <Grid item xs={12}>
          <DragCoefficientTable />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
