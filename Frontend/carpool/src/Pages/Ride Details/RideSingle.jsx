import { Container } from '@mui/system';
import React from 'react'
import { useLocation } from "react-router-dom";
import Navbar from '../../Components/Navbar';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import { useContext } from 'react';



function RideSingle() {
    const  rides  = useLocation().state.rides
    console.log(rides,"Hey ride details")
    const navigate = useNavigate()

    const {authTokens} = useContext(AuthContext)
    
    const onSubmit = (userID,rid) => {
      console.log(userID)
      axios.post(`http://localhost:8000/ride/send_request/${userID}`,{
        rid_id:rid
      },{
        headers: { Authorization: `Bearer ${authTokens.access}` },
      })
      .then((response)=>{
      alert("request send")
      navigate('/')
    })
    }

  return (
      
      <div>
        <Navbar/>
        <Container className="single-ride">
        <h1>{rides.date}</h1>
        <p>{rides.time}</p>
        <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector style={{ background: "#28135D" }}  />
        </TimelineSeparator>
        <TimelineContent>{rides.source_city}</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  variant="outlined" color="success"/>
        
        </TimelineSeparator>
        <TimelineContent>{rides.destination_city}</TimelineContent>
      </TimelineItem>
    
     
    </Timeline>  
<Box className='single-detail'>
    <h5>Total price for 1 passenger</h5>
    <h4 >Rs {rides.amount}.00</h4>
</Box>
<Box className='single-detail'>
    <h4 >User</h4>
    <h5>{rides.user.username}</h5>
    <p>{rides.user.id}</p>
    <Button  onClick={(id) => onSubmit(rides.user.id,rides.id )} style={{backgroundColor: "#28135D", borderRadius:"45px",color:"#fff",padding:"10px 15px"}} >Request ride</Button>
</Box>

        </Container>


    </div>
  )
}

export default RideSingle