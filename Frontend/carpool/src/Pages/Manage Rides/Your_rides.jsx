import React, { useEffect, useState } from 'react'
// import { useState, useEffect } from 'react';
import { Container } from "@mui/system";
import { Box } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Avatar from '@mui/material/Avatar';
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "../../api/axios";
// import axios from 'axios';
import { AuthContext } from "../../context/UserContext";
import { useContext } from 'react';
import Navbar from '../../Components/Navbar';

function Your_rides() {
    const [ride_data,setRidedata] = useState([])
    const {authTokens} = useContext(AuthContext)
//     useEffect(() => { 
//         const fetchData = async () => {
//           const {data : ride_data } = await axios.get(`ride/list_all_rides`)
//           .then((response)=>{
//             // setRidedata(response.data)
//             console.log('this is data',response.data)
            
//             // console.log(ride_data);
//         })
//         // console.log("this is array",ride_data)
//      }
     
//   // call the function
//   fetchData()
//   // make sure to catch any error
//   .catch(console.error);
//     },[]);

useEffect(()=>{
    document.title = 'Your rides'
    axios.get('http://localhost:8000/ride/list_all_rides',
    {
      headers: { Authorization: `Bearer ${authTokens.access}` },
    })
    .then((response)=>{
        console.log('afsyl',response.data)
        setRidedata(response.data)
    },[ride_data])
   },[])
   console.log('hai this array',ride_data)

   useEffect(()=>{
        
  })



   const acceptRequest = (id) => {                // this accept request is having some credential error so changed it into previous api/axios
   
    axios.post('http://localhost:8000/ride/accept_request/'+id,
    )
    .then((response)=>{

        alert("request accepted")
        window.location.reload();    // need to change
    })
   }

   const rejectRequest = (id) => {
    axios.post('http://localhost:8000/ride/reject_ride_request/'+id,
    )
    .then((response)=>{
        alert("request rejected")
        window.location.reload();    // need to change
    })
   }


  return (
    <div>
       <Navbar/>
        <Container className='ride-reqeust'>
        <h3 style={{textAlign:"center",marginTop:"100px"}}>Request for rides</h3>
        <Grid container className='request-ride-single' spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
             
                {ride_data.map((data, index) => (
                    <Box style={{cursor:"pointer"}}  className="ride_list_card">
                    <Grid container spacing={2}>
                    
                      <Grid item xs={4}>
                        <h3 style={{ marginLeft:"42px", fontSize:"20px" }}>  {data.ride_id.time}</h3>
                        <Timeline className='timeline' style={{ marginLeft: "0" }}>
                          <TimelineItem >
                            <TimelineSeparator>
                              <TimelineDot style={{ background: "#28135D" }} />
                              <TimelineConnector style={{ background: "#28135D" }} />
                            </TimelineSeparator>
                            <TimelineContent>{data.ride_id.source_city}</TimelineContent>
                          </TimelineItem>
                          <TimelineItem>
                            <TimelineSeparator>
                              <TimelineDot style={{ background: "#28135D" }} />
                            </TimelineSeparator>
                            <TimelineContent>{data.ride_id.destination_city}</TimelineContent>
                          </TimelineItem>
                        </Timeline>
                      </Grid>
                      <Grid item xs={4}>
                      <h3 style={{color:"#f80015" ,fontSize:"20px" }}>{data.ride_id.amount}.00</h3>
                      <h3 style={{fontSize:"14px"}}>{data.ride_id.date}</h3>
                      <Avatar style={{marginTop:"30px"}} src="/broken-image.jpg" />
                      
                      <h2 style={{fontSize:"17px"}}>{data.from_user.username}</h2>
                      
                      </Grid>
                      <Grid item xs={4}>  <Stack spacing={2} direction="row">
                      <Button onClick={(id) => acceptRequest(data.id )}  variant="contained" color="success" style={{marginTop:"100px"}}>Accept</Button>
                      <Button onClick={(id) => rejectRequest(data.id )} variant="contained" color="error" style={{marginTop:"100px"}}>Reject</Button>
                          </Stack></Grid>
                    
                    </Grid>
                    
                  </Box>
                ))}

        {/* { ride_data.map((data,index)=>{
            
        <Box style={{cursor:"pointer"}}  className="ride_list_card">
              <Grid container spacing={2}>
              
                <Grid item xs={4}>
                  <h3 style={{ marginLeft:"42px", fontSize:"20px" }}>{data.ride_id.time}</h3>
                  <Timeline className='timeline' style={{ marginLeft: "0" }}>
                    <TimelineItem >
                      <TimelineSeparator>
                        <TimelineDot style={{ background: "#28135D" }} />
                        <TimelineConnector style={{ background: "#28135D" }} />
                      </TimelineSeparator>
                      <TimelineContent>{data.ride_id.source_city}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot style={{ background: "#28135D" }} />
                      </TimelineSeparator>
                      <TimelineContent>{data.ride_id.destination_city}</TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </Grid>
                <Grid item xs={4}>
                <h3 style={{color:"#f80015" ,fontSize:"20px" }}>{data.ride_id.amount}.00</h3>
                <h3 style={{fontSize:"14px"}}>{data.ride_id.date}</h3>
                <Avatar style={{marginTop:"30px"}} src="/broken-image.jpg" />
                
                <h2 style={{fontSize:"17px"}}>{data.from_user.username}</h2>
                
                </Grid>
                <Grid item xs={4}>  <Stack spacing={2} direction="row">
                <Button variant="contained" color="success" style={{marginTop:"100px"}}>Accept</Button>
                <Button variant="contained" color="error" style={{marginTop:"100px"}}>Reject</Button>
                    </Stack></Grid>
              
              </Grid>
              
            </Box>
             })} */}
            </Grid>
            <Grid item xs={2}></Grid>
            </Grid>
        </Container>

    </div>
  )
}

export default Your_rides