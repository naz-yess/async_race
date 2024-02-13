import { Box, ButtonGroup, Button, IconButton, Stack } from "@mui/material";
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';

export default function Car() {
  return (
    <Box sx={{ borderBottom: "1px dashed black",  display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "10%" }}> 
      <Box >
        <ButtonGroup variant="contained" aria-label="Basic button group" >
          <Button>Select</Button>
          <Button>Remove</Button>
        </ButtonGroup>
        <Stack width={"100%"} height={"50%"} spacing={1} direction="row" marginTop={8} > 
     <Box>
     <IconButton >
        <HdrAutoIcon />
      </IconButton>
      <IconButton >
        <BubbleChartIcon />
      </IconButton>
     </Box>
     <Box  sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end', 
    }} >
     <AirportShuttleIcon   sx={{ fontSize: 70 }}  />
     </Box>
      
    </Stack>
    </Box>
      <Box sx={{
     
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }}>,
        <OutlinedFlagRoundedIcon  sx={{ fontSize: 50 }}/>
      </Box>
   
      </Box>
     
  );
}
