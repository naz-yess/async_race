

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box, Container, Typography} from "@mui/material"

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24,),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Winner() {
  return (
   <Container>
     <Box sx={{paddingLeft: "75px", py: "35px"}}> 
          <Typography variant='h3'>
          Winner&nbsp;()
        </Typography>
        <Typography>
            Page&nbsp;#
        </Typography>
    </Box>
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <TableContainer component={Paper} sx={{ maxWidth: '90%'}} >
      <Table sx={{ minWidth: 650,  tableLayout: 'fixed'}} aria-label="customized table">
        <TableHead sx={{backgroundColor: "#1a0f3b"}}>
          <TableRow >
            <TableCell sx={{color: "white", width: "25%"}}>Number</TableCell>
            <TableCell sx={{color: "white", width: "25%"}} align="center">Car</TableCell>
            <TableCell  sx={{color: "white", width: "25%"}} align="center">Wins</TableCell>
            <TableCell  sx={{color: "white", width: "25%"}} align="center">Best time&nbsp;(seconds)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
   </Container>
  );
}
