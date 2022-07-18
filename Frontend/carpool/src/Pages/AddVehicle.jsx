import React, { useContext, useState } from 'react'
import { Container } from "@mui/system";
import Navbar from '../Components/Navbar';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from '../api/axios';
import { AuthContext } from '../context/UserContext';
import { useEffect } from 'react';


function AddVehicle() {
  const [vehicle, setVehicle] = useState([])
  const {authTokens} = useContext(AuthContext)
  const {decoded} = useContext(AuthContext)

  const user_id = decoded.user_id
  const handleChange = (event) =>{
    setVehicle({
      ...vehicle,
      [event.target.name] : [event.target.value]
    });
  }

const _formData = null
const formSubmit =  ()=>{
   
   const _formData = new FormData();
  _formData.append('user',user_id);
  _formData.append('manufacture', vehicle.manufacture);
  _formData.append('model', vehicle.model);
  _formData.append('vehicle_number', vehicle.vehicle_number);
  _formData.append('colour', vehicle.colour);
  
   console.log(_formData,"this is form data")
  console.log('vehicle details',formSubmit)

  try{
    axios.post('http://127.0.0.1:8000/ride/list_all_vehicles',_formData,{
      headers: { Authorization: `Bearer ${authTokens.access}` }
    }).then((res)=>{
      console.log(res.data)
    });
  } catch (error){
    console.log(error)
  }



}

useEffect (()=>{
  document.title = "vehicle details"
  
})

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
      <TextField name="manufacture" className='about-form-field' onChange={handleChange} id="filled-basic" label="Manufacture" variant="filled" />
      <TextField name="model" onChange={handleChange} id="standard-basic" label="Model" variant="filled" />
      
    </Box>
    <Box style={{display:"flex",justifyContent:"center"}}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField name="vehicle_number" onChange={handleChange} className='about-form-field' id="filled-basic" label="Vehicle number" variant="filled" />
      <TextField name="colour" onChange={handleChange} id="standard-basic" label="Colour" variant="filled" />
    </Box>
  </Grid>
  <Grid item xs={2}></Grid>
  </Grid>
  <Button onClick={formSubmit} style={{backgroundColor: "#28135D", borderRadius:"45px",color:"#fff",padding:"7px 25px",marginLeft:"525px",marginTop:"50px"}} >Save</Button>

        </Container>
    </div>
  )
}

export default AddVehicle