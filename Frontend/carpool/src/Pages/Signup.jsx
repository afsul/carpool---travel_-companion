import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as axios from 'axios';


const validationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  username:yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().positive().integer().required(),
  date_of_birth: yup.string().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Signup() {

  useEffect(()=>{
    document.title = 'SignUp'
    console.log('working')
    console.log('data is here')
  })
  
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = (data) => {
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
              variant="filled"
              fullWidth
              {...register("first_name")}
              error={errors.first_name ? true : false}
            />
            <TextField
              name="username"
              className="login-text-field"
              style={{ marginBottom: "20px" }}
              label="username"
              variant="filled"
              fullWidth
              {...register("username")}
              error={errors.username ? true : false}
            />
            <TextField
              name="phone"
              className="login-text-field"
              style={{ marginBottom: "20px" }}
              label="phone"
              variant="filled"
              fullWidth
              {...register("phone")}
              error={errors.phone ? true : false}
            />
            <TextField
              name="password"
              className="login-text-field"
              style={{ marginBottom: "20px" }}
              label="password"
              variant="filled"
              fullWidth
              {...register("password")}
              error={errors.password ? true : false}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="last_name"
              className="login-text-field"
              style={{ marginBottom: "20px" }}
              label="last name"
              variant="filled"
              fullWidth
              {...register("last_name")}
              error={errors.last_name ? true : false}
            />
            <TextField
              name="email"
              className="login-text-field"
              style={{ marginBottom: "20px" }}
              label="email"
              variant="filled"
              fullWidth
              {...register("email")}
              error={errors.email ? true : false}
            />
           
            <TextField name="date_of_birth" type="date"  className="login-text-field" style={{marginBottom:"20px"}} variant="filled" fullWidth {...register("date_of_birth")}  error={errors.date_of_birth ? true : false} />
           
            <TextField
              name="confirmPassword"
              className="login-text-field"
              style={{ marginBottom: "20px" }}
              label="confirm   password"
              variant="filled"
              fullWidth
              {...register("confirmPassword")}
              error={errors.confirmPassword ? true : false}
            />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}></Grid>
          <Grid item xs={2}>
            <Button
              onClick={handleSubmit(onSubmit)}
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
