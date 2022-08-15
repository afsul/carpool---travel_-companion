import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Signup.css"
import * as axios from 'axios';
import { useForm } from "react-hook-form";




function Signup() {
 // Custom hook call
 const {handleChange, values, errors} = useForm()


 
  useEffect(()=>{
    document.title = 'SignUp'
    console.log('working')
    console.log('data is here')
  })
  
  const navigate = useNavigate();
  
  const Submit = (data) => {
    alert('request send')
    
    const formData = new FormData()
    formData.append("data",data)
    try{
      axios.post("http://localhost:8000/auth/signup/",data)
    .then((response)=>{
      console.log(response.data.token.access,'=========================d====')
      localStorage.setItem("access_token",response.data.token.access)
      localStorage.setItem("LoginStatus",true)
      navigate('/user/otp')
    })

    }catch(error){
      console.log('post method not working',error)

    }
    
   
  };   

  return (
    <div>
      <Navbar />
      <Container className="signup">
        <h3>Lets create an Account!</h3>
        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <TextField
              name="first_name"
              className="login-text-field"
              style={{ marginBottom: "20px" }}
              label="first name"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              name="username"
              className="login-text-field"
              style={{ marginBottom: "20px" }}
              label="username"
              variant="outlined"
              fullWidth
              onChange={handleChange}
             />
            <TextField
              name="phone"
              className="login-text-field"
              style={{ marginBottom: "20px" }}
              label="phone"
              variant="outlined"
              fullWidth
              onChange={handleChange}
             />
            <TextField
              name="password"
              className="login-text-field"
              style={{ marginBottom: "20px" }}
              label="password"
              variant="outlined"
              fullWidth
              onChange={handleChange}
               />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="last_name"
              className="login-text-field"
              style={{ marginBottom: "20px" }}
              label="last name"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              />
            <TextField
              name="email"
              className="login-text-field"
              style={{ marginBottom: "20px" }}
              label="email"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              />
           
            <TextField name="date_of_birth" type="date"  className="login-text-field" style={{marginBottom:"20px"}} variant="outlined" fullWidth onChange={handleChange} />
           
            <TextField
              name="confirmPassword"
              className="login-text-field"
              style={{ marginBottom: "20px" }}
              label="confirm password"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}></Grid>
          <Grid item xs={2}>
            <Button
              className="signup-btn"
              style={{
                color: "#fff",
                backgroundColor: "#28135D",
                borderRadius: "45px",
                padding: "8px 20px",
              }}
              variant="contained"
              fullWidth
            >
              <span>Signup</span>
            </Button>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Signup;