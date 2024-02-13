import React, { useState } from "react";
import { TextField, Button, Box, Input, Typography, Container } from "@mui/material";

export default function Garage() {
  const [carName, setCarName] = useState('');
  const [carColor, setCarColor] = useState('#000000');
  const [createdCars, setCreatedCars] = useState([]);

  const handleCreateCar = () => {
    if (!carName) return; // Prevent adding empty names
    const newCar = { name: carName, color: carColor };
    setCreatedCars([...createdCars, newCar]);
    setCarName(''); // Reset input field
    setCarColor('#000000'); // Reset color picker
  };

  const handleUpdateLastCar = () => {
    if (!carName || createdCars.length === 0) return; // Prevent update if no name is given or no cars exist
    const updatedCars = [...createdCars];
    updatedCars[updatedCars.length - 1] = { ...updatedCars[updatedCars.length - 1], name: carName, color: carColor };
    setCreatedCars(updatedCars);
    setCarName(''); // Reset input field
    setCarColor('#000000'); // Reset color picker
  };

  return (
    <Box  >
      <Container sx={{  '& > :not(style)': { m: 1 }, paddingTop: "70px"}}>
      <TextField
        label="Car Name"
        variant="outlined"
        value={carName}
        onChange={(e) => setCarName(e.target.value)}
      />
      <Input
        type="color"
        value={carColor}
        onChange={(e) => setCarColor(e.target.value)}
        sx={{ width: 48, height: 56, border: '1px solid #ced4da', borderRadius: 1 }}
      />
      <Button variant="contained" color="primary" onClick={handleCreateCar}>
        Create 
      </Button>
      <Button variant="contained" color="secondary" onClick={handleUpdateLastCar} sx={{ ml: 2 }}>
        Update 
      </Button>

      <Box sx={{ mt: 2 }}>
        {createdCars.map((car, index) => (
          <Box key={index} sx={{ color: car.color, mt: 1 }}>
            {car.name}
          </Box>
        ))}
      </Box>
      </Container>
      <Box sx={{paddingLeft: "140px", py: "35px"}}> 
          <Typography variant='h3'>
          Garage&nbsp;()
        </Typography>
        <Typography>
            Page&nbsp;#
        </Typography>
    </Box>


    </Box>
  );

}
