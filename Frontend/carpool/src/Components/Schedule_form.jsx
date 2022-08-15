import * as React from "react";
import { useState,useContext } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

// import axios from "../api/axios";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";


function Schedule_form() {

  // const [authTokens, setAuthTokens] = useState(() =>
  //   localStorage.getItem("access_token")
  //     ? JSON.parse(localStorage.getItem("access_token"))
  //     : null
  // );


  const {authTokens} = useContext(AuthContext)

  
  
  
  const [details, setDetails] = useState({
    seat: "",
    date: "",
    time: "", 
    smoking: false,
    music: true,
    pets: false,
  });
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("source_city", origin.value.description);
    formData.append("destination_city", destination.value.description);
    formData.append("seat",details.seat);
    formData.append("amount",details.amount);
    formData.append("time",details.time);
    formData.append("date",details.date);
    formData.append("smoking",details.smoking);
    formData.append("pets",details.pets);
    formData.append("music",details.music);
    console.log('====================================');
    console.log(origin.value.description);
    console.log('====================================');
    console.log('====================================');
    console.log(formData);
    console.log('====================================');
    await axios.post("http://localhost:8000/ride/create_ride",{
      "source_city": origin.value.description,
      "destination_city": destination.value.description,
      'seat': details.seat, 
      'date': details.date,
       'time': details.time, 
       'smoking': details.smoking, 
       'music': details.music, 
       'pets': details.pets, 
       'amount': details.amount
    },{
      headers: { Authorization: `Bearer ${authTokens.access}` },
      // headers: { Authorization: 'Bearer authTokens.access' },
    })
    .then((res)=>{
      console.log(res.data);

      if(res.status === 'success'){

        console.log(res.data);
        navigate('/')
      }else if(res.status === 'error'){
        alert(res.data)
      }
    })


  };

  return (
    <div>
      <h1>Schedule a ride</h1>
      {/* Source destination  */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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

        {/* seat amount */}
        <Grid container spacing={3}>
          <Grid item xs>
            <TextField
              id="outlined-number"
              label="Seat"
              type="number"
              name="seat"
              onChange={(e) => setDetails({ ...details, seat: e.target.value })}
              sx={{ width: 250 }}
              style={{ marginTop: "30px", background: "white" }}
              fullWidth
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="outlined-number"
              label="Amount"
              type="number"
              name="amount"
              onChange={(e) =>
                setDetails({ ...details, amount: e.target.value })
              }
              sx={{ width: 250 }}
              style={{ marginTop: "30px", background: "white" }}
            />
          </Grid>
        </Grid>
        {/* time date */}

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="time"
              label="time"
              type="time"
              onChange={(e) => setDetails({ ...details, time: e.target.value })}
              // defaultValue="07:30"
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: 250 }}
              style={{ marginTop: "30px", background: "white" }}
              name="time"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="date"
              label="date"
              type="date"
              // defaultValue="2017-05-24"
              sx={{ width: 250 }}
              style={{ marginTop: "30px", background: "white" }}
              name="date"
              onChange={(e) => setDetails({ ...details, date: e.target.value })}
            />
          </Grid>
        </Grid>

        <h3>Allowed Preferences</h3>
        <Grid container>
          <Grid item xs={4}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Smoking"
                name="smoking"
                onClick={(e) =>
                  setDetails({ ...details, smoking: !details.smoking })
                }
              />
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Pets"
                name="pets"
                onClick={(e) => setDetails({ ...details, pets: !details.pets })}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Music"
                name="music"
                onClick={(e) =>
                  setDetails({ ...details, music: !details.music })
                }
              />
            </FormGroup>
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
              Publish a ride
            </Button>
          </Grid>
        </Grid>
      </form>
   
    </div>
  );
}

export default Schedule_form;
