import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function DragCalculator() {
  const [velocity, setVelocity] = useState(0); 
  const [frontalArea, setFrontalArea] = useState(0); 
  const [dragCoefficient, setDragCoefficient] = useState(0);
  const [airDensity, setAirDensity] = useState(1.225); 
  const [dragForce, setDragForce] = useState(0);

  const calculateDrag = () => {
    const dragForceNewtons = 0.5 * airDensity * velocity * velocity * dragCoefficient * frontalArea;
    setDragForce(dragForceNewtons);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 4 }}>
      <Typography variant="h4" gutterBottom>
        F1 Aerodynamic Drag Calculator
      </Typography>
      <TextField 
        label="Velocity (km/h)" 
        type="number"
        variant="standard" 
        margin="normal"
        value={velocity}
        onChange={(e) => setVelocity(e.target.value)}
      />
      {/* Other TextFields for frontal area, drag coefficient, air density */}
      <Button variant="contained" onClick={calculateDrag}>Calculate</Button> 
      <Typography variant="h5" gutterBottom component="div" sx={{marginTop: 2}}>
        Drag Force: {dragForce} N
      </Typography>
    </Box>
  );
}

export default DragCalculator;
