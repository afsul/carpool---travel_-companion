import React from 'react'
import { Container } from "@mui/system";
import Navbar from '../Components/Navbar';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function AddVehicle() {
  return (
    <div>
        <Navbar/>
        <Container className='add-vehicle'>
            
            <h3 style={{marginTop:"100px"}}>Which is your vehicle ?</h3>
              
        <Grid container spacing={2}>
  <Grid item xs={2}></Grid>
  <Grid item xs={8}>

  <Box style={{display:"flex",justifyContent:"center"}}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField className='about-form-field' id="filled-basic" label="Manufacture" variant="filled" />
      <TextField id="standard-basic" label="Model" variant="filled" />
      
    </Box>
    <Box style={{display:"flex",justifyContent:"center"}}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField className='about-form-field' id="filled-basic" label="Vehicle number" variant="filled" />
      <TextField id="standard-basic" label="Colour" variant="filled" />
    </Box>
  </Grid>
  <Grid item xs={2}></Grid>
  </Grid>
  <Button style={{backgroundColor: "#28135D", borderRadius:"45px",color:"#fff",padding:"7px 25px",marginLeft:"525px",marginTop:"50px"}} >Save</Button>

        </Container>
    </div>
  )
}

export default AddVehicle