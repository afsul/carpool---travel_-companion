import { Container } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from '../api/axios'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Typography from '@mui/material/Typography';
import { useNavigate, Link } from "react-router-dom";



import '../App.css';
import { AuthContext } from '../context/UserContext';

export  const Login = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().required("email is required"),
        password: Yup.string()
             .required("password is required")
             .min(4, "password must be at least 6 characters")
             .max(40, "password must not exceed 40 characters"),
   });

   const navigate = useNavigate();

   const [token, setToken] = useState([]);

   const {Login} = useContext(AuthContext)
   

    const {
        register,
        handleSubmit,
        formState: { errors },
   } = useForm({ resolver: yupResolver(validationSchema) });

   const onSubmit = (data) =>{  
    // data.preventDefault();
    // console.log(data);
    // axios.post("auth/jwt/create/",data)
    // .then((response)=>{
        
    //     console.log('====================================pp',response);
    //     console.log(response.data.access);
    //     console.log('====================================');
    //     localStorage.setItem("access_token",response.data.access)
    //     localStorage.setItem("LoginStatus",true)
    //     setToken(response.data.access)
    //     navigate('/')
    //     console.log('this is access token',localStorage.getItem('access_token'))
    //     console.log('this is login status',localStorage.getItem('LoginStatus'))
    //     console.log('this is token in login react',token)
    Login(data)
    // })

    // console.log('this is token in login react',token)
   
    }

    useEffect(()=>{
      document.title = 'Login'
      console.log('vikram',token)
      token.map( customer => {
        console.log('hti',customer.data);
        
    })

    }) 

  return (
    <div>
        <Navbar/>
        <Container className="login">
            <h3>What's your email and password?</h3>
            
       
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          
        </Grid>
        <Grid item xs={6}>
        <TextField name="email" className="login-text-field" style={{marginBottom:"20px"}} label="email" variant="filled" fullWidth {...register("email")}
                                                  error={errors.username ? true : false} />
                                                   <Typography variant="inherit" color="textSecondary">
                                                  {errors.email?.message}
                                             </Typography>
        <TextField name="password" className='login-text-field'  label="password" variant="filled" fullWidth {...register("password")}
                                                  error={errors.password ? true : false} />
          <Typography variant="inherit" color="textSecondary">
                                                  {errors.password?.message}
                                             </Typography>
        
        <Button onClick={handleSubmit(onSubmit)} style={{backgroundColor: "#28135D", borderRadius:"45px",color:"#fff",padding:"8px 20px",marginTop:"50px",fontSize:"16px"}} >Login</Button>
        <br/><Button style={{color:"#28B0FC", borderRadius:"45px",padding:"8px 20px"}} onClick={()=>navigate(`/user/signup`)} color="inherit">Signup</Button>

        </Grid>
        <Grid item xs>

        </Grid>
      </Grid>
    </Box>
        
        </Container>
    </div>
  )
}
