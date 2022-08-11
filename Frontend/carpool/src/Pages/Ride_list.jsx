import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import { useLocation,   useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
// import axios from "../api/axios";
import axios from 'axios';
import { AuthContext } from "../context/UserContext";
import { useContext } from "react";


function Ride_list() {
  const  rides  = useLocation().state.rides
 const [loading, setloading] = useState(true)
 const navigate = useNavigate()

 const {authTokens} = useContext(AuthContext)

 const handleClick =async (id)=>{
 let{data} = await axios.get(`http://localhost:8000/ride/get_rides_object/${id}`,{
  headers: { Authorization: `Bearer ${authTokens.access}` }
})
      console.log('hai',data);
       navigate('/user/single_ride',{state:{rides:data}})
    
 }

 

 setTimeout(() => {
  setloading(false)
 }, 2000); 

  console.log(rides,";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;");
  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: "100px" }}>
        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>
          {loading && <CircularProgress color="success" />}
        { rides.map((data)=>{
          return(
            <Box style={{cursor:"pointer"}} onClick={()=> handleClick(data.id)} className="ride_list_card">
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <h3 style={{ marginLeft:"42px" }}>{data.time}</h3>
                  <Timeline className='timeline' style={{ marginLeft: "0" }}>
                    <TimelineItem >
                      <TimelineSeparator>
                        <TimelineDot style={{ background: "#28135D" }} />
                        <TimelineConnector style={{ background: "#28135D" }} />
                      </TimelineSeparator>
                      <TimelineContent>{data.source_city}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot style={{ background: "#28135D" }} />
                      </TimelineSeparator>
                      <TimelineContent>{data.destination_city}</TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </Grid>
                <Grid item xs={4}>
                <h3 style={{color:"#f80015"}}>{data.amount}.00</h3>
                <h3 style={{fontSize:"14px"}}>{data.date}</h3>
                <Avatar style={{marginTop:"30px"}} src="/broken-image.jpg" />
                
                <h2 style={{fontSize:"17px"}}>{data.user.username} scheduled user</h2>
                </Grid>
              </Grid>
            </Box>
        ) })}

          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Ride_list;
