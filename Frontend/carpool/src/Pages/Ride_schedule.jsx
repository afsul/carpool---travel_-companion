import React from 'react'
import Navbar from "../Components/Navbar";
import { Container, Row, Col } from "react-grid-system";
import Schedule_form from "../Components/Schedule_form";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";


function Ride_schedule() {
  return (
    <div>
        <Navbar/>
        <Container fluid className="img-wrapper container-fluid">
      <Container>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
   <Box className="form_bg">
   <Schedule_form/>
   </Box>
  </Grid>
  <Grid item xs={6}>
    
  </Grid>
  </Grid>
  </Container>
    </Container>
    </div>
  )
}

export default Ride_schedule