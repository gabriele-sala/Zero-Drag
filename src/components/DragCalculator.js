import * as React from 'react';
import { TextField, Button } from '@mui/material";

function DragCalculator() {
   const [velocity, setVelocity] = useState(0);
   const [frontalArea, setFrontalArea] = useState(1.5); 
   const [dragCoefficient, setDragCoefficient] = useState(0.8); 
   const [airDensity, setAirDensity] = useState(1.225);
   const [dragForce, setDragForce] = useState(0);  

   const calculateDrag = () => {
     // Placeholder for now - to be filled with the correct Formula 1 specific aerodynamic calculations in the following steps
     setDragForce(0); 
   };

   return (
    <div>
      <TextField label="Velocity (km/h)" value={velocity} onChange={(e) => setVelocity(e.target.value)} sx={{ margin: '8px 0' }} />
      <TextField label="Frontal Area (m^2)" value={frontalArea} onChange={(e) => setFrontalArea(e.target.value)} sx={{ margin: '8px 0' }} />
      <TextField label="Drag Coefficient" value={dragCoefficient} onChange={(e) => setDragCoefficient(e.target.value)} sx={{ margin: '8px 0' }} />
      <Button variant="contained" onClick={calculateDrag}>Calculate</Button>
      <Typography variant="h6" > Drag Force: {dragForce} N </Typography> 
    </div>
   );
}

export default DragCalculator; 
