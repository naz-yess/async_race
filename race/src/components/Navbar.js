import { Box, Button } from "@mui/material";
import React from "react";
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <Box padding={5}>
      <Button   component={NavLink} to="/Garage" variant="contained" color="success" sx={{marginRight: "5px"}} >
        To Garage
      </Button>
      <Button  component={NavLink} to="/Winner" variant="contained" color="success" o>
        To Winner
      </Button>
    </Box>
  );
}

export default Navbar;
