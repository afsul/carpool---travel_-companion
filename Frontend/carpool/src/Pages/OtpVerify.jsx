import React from 'react'
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Container } from "@mui/system";
import UserProfile from './UserProfile';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function OtpVerify() {
    const navigate = useNavigate();

  return (
    <div>
         <Container className="signup">
        <h3>Lets verify mobile number!</h3>
        
        <Grid container spacing={2}>
  <Grid item xs={4}>
  </Grid>
  <Grid  item xs={4}>
  <UserProfile className='verify_btn' /><br/>
  <Button onClick={()=> navigate(`/user/payment`)} variant="text">skip</Button>

  </Grid>
  <Grid item xs={4}>
  </Grid>
  </Grid>
        </Container>

    </div>
  )
}

export default OtpVerify