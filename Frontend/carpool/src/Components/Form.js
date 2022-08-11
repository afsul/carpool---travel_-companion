import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import Button from "@mui/material/Button";
import { useState } from "react";
// import axios from "../api/axios";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import { useContext } from 'react';




function Form() {
  const navigate = useNavigate();

  const {authTokens} = useContext(AuthContext)

  const [details, setDetails] = useState({
    seat: "",
    date: "",
  });
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState({});
  const Data = new FormData();
  
  const handleSubmit = (e) => {

    e.preventDefault();
    Data.append("source_city", origin.value.description);
    Data.append("destination_city", destination.value.description);
    Data.append("seat",details.seat);
    Data.append("date",details.date);
    console.log( origin.value.description,"===============>")
    axios.post("http://localhost:8000/ride/get_rides",Data,
    {
      headers: { Authorization: `Bearer ${authTokens.access}` }
    })
    .then((res)=>{
      console.log(res.data);
      navigate('/user/ride_list',{state:{rides:res.data}})
    })
  }
  return (
    <div>
      <h1>Your pick of rides at low prices</h1>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <GooglePlacesAutocomplete
              apiKey="AIzaSyBrjX6c8Poj3RpXhJLVR2CJ4LEB_G8Kanw"
              selectProps={{
                origin,
                onChange: setOrigin,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <GooglePlacesAutocomplete
              apiKey="AIzaSyBrjX6c8Poj3RpXhJLVR2CJ4LEB_G8Kanw"
              selectProps={{
                destination,
                onChange: setDestination,
              }}
            />
            {/* <Place/> */}
          </Grid>
        </Grid>
 {/* time date */}

 <Grid container spacing={3}>
          <Grid item xs={6}>
          <TextField
              id="outlined-number"
              label="Seat"
              type="number"
              name="seat"
              onChange={(e) => setDetails({ ...details, seat: e.target.value })}
              sx={{ width: 250 }}
              style={{ marginTop: "30px", background: "white" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="date"
              label="date"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 250 }}
              style={{ marginTop: "30px", background: "white" }}
              name="date"
              onChange={(e) => setDetails({ ...details, date: e.target.value })}
            />
          </Grid>
        </Grid>
       
       
        <Grid container style={{ margin: "auto" }}>
          <Grid item xs={12}>
            <Button
              type="submit"
              style={{
                background: "#f80015",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "30px",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Search Car
            </Button>
          </Grid>
        </Grid>
      </form>

      
    </div>
      )
}


export default Form