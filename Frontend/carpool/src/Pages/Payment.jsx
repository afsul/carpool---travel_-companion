import React from "react";
import Navbar from "../Components/Navbar";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from "../api/axios";
import "../App.css";

function Payment() {
    const price = 100;
    const navigate = useNavigate();

  const paymentHandler = (details) => {
    axios.post("payment", {
        "details":details,"price":price
    }).then((res) => {
      console.log(res.data);
      navigate("/")
    })


  };

  return (
    <div>
      <Navbar />
      <Container className="signup" style={{ marginTop: "2%" }}>
      <h3>Registration Charge</h3>
      <Grid container spacing={2}>
  <Grid item xs={4}>
  </Grid>
  <Grid  item xs={4}>
  <PayPalScriptProvider options={{ "client-id": "test" }}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: price,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                const name = details.payer.name.given_name;
                paymentHandler(details);
                alert(`Transaction completed by ${name}`);  
              });
            }}
          />
        </PayPalScriptProvider>
  <Button onClick={()=> navigate(`/`)} variant="text">skip</Button>

  </Grid>
  <Grid item xs={4}>
  </Grid>
  </Grid>
       
      </Container>
    </div>
  );
}

export default Payment;
