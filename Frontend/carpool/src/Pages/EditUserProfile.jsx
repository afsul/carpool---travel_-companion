import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Navbar from "../Components/Navbar";
import { Container } from "@mui/system";
import axios from "../api/axios";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AuthContext } from "../context/UserContext";
import { useState } from "react";


function EditUserProfile() {

  const {authTokens} = useContext(AuthContext)

  const {decoded} = useContext(AuthContext)

  const {user} = useContext(AuthContext)

  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");

  const [userData, setUserData] = useState([]);

  const user_id = decoded.user_id
  

  useEffect(()=>{
    document.title = 'Edit User Profile'
     console.log('this is decoded',decoded.user_id)
    axios.get('http://127.0.0.1:8000/auth/user_details/'+user_id)
    .then((response)=>{
      console.log('this is user data ',response.data)
      setUserData(response.data)
      console.log('array data of user ',userData)
    })
    console.log('array data of user',userData)
  },[])
        
  const navigate = useNavigate()
  const handleOpen = () => {
    setOpen(true);
    axios.get("auth/otp_send/"). 
    then((res)=>{
        alert("otp send")
    })
  }

  const handleChange = (event)=>{
    setUserData({
        ...userData,
        [event.target.name] : [event.target.value]
    });
   }


   const _formData = null
    const formSubmit = () => {                     //************** the key point to note here is if we don't give the name is append as exactly the same name as per seializer of backend then the response will be having a null values so be careful
      const _formData = new FormData();
        _formData.append('first_name', userData.first_name);
        _formData.append('last_name', userData.last_name);
        _formData.append('username', userData.username);
        _formData.append('email', userData.email);
        _formData.append('phone', userData.phone);
        _formData.append('date_of_birth', userData.date_of_birth);
       

        console.log('submit button on', formSubmit)

        try {
            axios.patch('http://127.0.0.1:8000/auth/user_details/'+user_id+'/', _formData, {
              headers: { Authorization: `Bearer ${authTokens.access}` }
            }).then((res) => {
                console.log(res.data)
                window.location.href = '/user/edit-profile/'
            });
        } catch (error) {
            console.log(error)
        }

    
    }




  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

const handleOtp = ()=>{
    axios.post("auth/otp_verify/",{
        "otp":input
    })
    .then((res)=>{
        alert("otp verification success")
        handleClose()
        navigate("/user/payment")
    })
}
  return (
    <div>
      <Navbar />
      <Container className='user_profile'>
        <h1>About me  </h1>
        
        <Grid container spacing={2}>
  <Grid item xs={2}>
  </Grid>
  <Grid item xs={8}>
  <Stack style={{display:"flex",justifyContent:"flex-start",marginLeft:"120px",marginBottom:"70px"}} direction="row" spacing={2}>

<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"   sx={{ width: 56, height: 56 }}  />
<h3>Afsul</h3><br/>
<p>Calicut, kerala</p>
</Stack>
<Button style = {{textDecoration:'None',color: "#28B0FC",marginLeft:"120px"}}>Add profile picture</Button>

<Stack style={{marginLeft:"120px"}} direction="row" spacing={2}>
<div >
          <Button style = {{textDecoration:'None',color: "#28B0FC"}} onClick={handleOpen}>Verify your phone number</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Enter Otp
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <input type="text" onChange={(e)=>{
                    setInput(e.target.value)
                }} />
              </Typography>
              <Button onClick={handleOtp}>verify</Button>
            </Box>
          </Modal>
        </div>
</Stack>
    </Grid>
    <Grid item xs={2}>
  </Grid> 

  </Grid>
       
        <Grid container spacing={2}>
  {/* <Grid item xs={2}>
  </Grid> */}
  <Grid item xs={12}>
  <Box style={{display:"flex",justifyContent:"center"}}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <TextField  name="first_name" onChange={handleChange}  className='about-form-field' id="filled-basic" value={userData.first_name} placeholder="first name" variant="filled"  /> 
      <TextField  name="last_name" onChange={handleChange}  id="standard-basic" placeholder="last name" variant="filled" value={userData.last_name} />
      
    </Box>
    <Box style={{display:"flex",justifyContent:"center"}}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <TextField name="username" onChange={handleChange} className='about-form-field' id="filled-basic" value={userData.username} placeholder="username" variant="filled" />
      <TextField name="email" onChange={handleChange} id="standard-basic" placeholder="email" value={userData.email} variant="filled" />
      
    </Box>
    <Box style={{display:"flex",justifyContent:"center"}}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <TextField name="phone" onChange={handleChange} className='about-form-field' id="filled-basic" value={userData.phone} placeholder="phone" variant="filled" />
      <TextField name="date_of_birth" onChange={handleChange} type="date" className="login-text-field" style={{marginBottom:"20px"}} variant="filled" fullWidth value={userData.date_of_birth} />
      
    </Box>
  </Grid>
  <Grid item xs={2}>
  </Grid>
</Grid>



<Grid container  spacing={2}>
<Grid item xs={2}></Grid>
  <Grid item xs={8}>
           <Button
              onClick={formSubmit}
              className="signup-btn"
              style={{
                color: "#fff",
                backgroundColor: "#28135D",
                borderRadius: "45px",
                padding: "8px 20px",
                justifyContent: "center",
                

              }}
              variant="contained"
             
            >
              <span> Update </span>
            </Button>

    

    </Grid>
<Grid item xs={2}></Grid>
      

    </Grid>
    
      </Container>
    </div>
  );
}

export default EditUserProfile;
