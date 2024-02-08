import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

function DragCalculator() {
  const [velocity, setVelocity] = useState(0);
  const [frontalArea, setFrontalArea] = useState(1.5); // Default (m^2)
  const [dragCoefficient, setDragCoefficient] = useState(0.8); // Default 
  const [airDensity, setAirDensity] = useState(1.225); // Default (kg/m^3)
  const [dragForce, setDragForce] = useState(0);

  const calculateDrag = () => {
    const dragForceNewtons = 0.5 * airDensity * velocity * velocity * dragCoefficient * frontalArea;
    setDragForce(dragForceNewtons);
  };

  return (
    <div> 
      <TextField label="Velocity (km/h)" type="number" value={velocity} onChange={(e) => setVelocity(e.target.value)} />
      <TextField label="Frontal Area (m^2)" type="number" value={frontalArea} onChange={(e) => setFrontalArea(e.target.value)} />
      <TextField label="Drag Coefficient" type="number" value={dragCoefficient} onChange={(e) => setDragCoefficient(e.target.value)} />
      <Button variant="contained" onClick={calculateDrag}>Calculate</Button>
      <Typography variant="h6">Drag Force: {dragForce} N</Typography> 
    </div>
  );
}

export default DragCalculator;
