import {  Container } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from '../../api/axios'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Typography from '@mui/material/Typography';
import { useNavigate, Link } from "react-router-dom";









import '/home/afsul/Documents/carpool_second_project/Frontend/carpool/src/Pages/Login/Login.css';
import { AuthContext } from '../../context/UserContext';



export  const Login = () => {


    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Enter correct email').required("email is required"),
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
       
          
       
        <Box    sx={{ flexGrow: 1 }}>
       
      <Grid container spacing={3}>
        <Grid item xs>
          
        </Grid>
        <Grid className='login-container' item xs={6}>
        <div className='login-header'> 
          <h3>Sign In</h3>
          
            <img src='/login.png'/>
          </div>
       
                                                    <Typography variant="inherit" color="textSecondary" style={{marginBottom:"5px"}}>
                                                  {errors.email?.message}
                                             </Typography>
                                                   <TextField   name="email" style={{marginBottom:"20px" }} className="login-text-field " label="email"   variant="outlined" fullWidth {...register("email")}
                                                  error={errors.username ? true : false}  />

                                                 
       
                                                  <Typography variant="inherit" color="textSecondary" style={{marginBottom:"5px"}}>
                                                  {errors.password?.message}
                                             </Typography>
                                                   <TextField name="password"  className='login-text-field' type='password'  label="password" variant="outlined" fullWidth {...register("password")}
                                                  error={errors.password ? true : false} />
          
        
        <Button onClick={handleSubmit(onSubmit)} style={{backgroundColor: "#28135D", borderRadius:"45px",color:"#fff",padding:"8px 20px",marginTop:"50px",fontSize:"16px",}} >Login</Button>
        <div className='sighn-btn'>
        <Button  style={{marginBottom:"35px"}} onClick={()=>navigate(`/user/signup`)} color="inherit" >Signup</Button>
        </div>
      

        </Grid>
        <Grid item xs>

        </Grid>
      </Grid>
    </Box>
        
        </Container>
    </div>
  )
}