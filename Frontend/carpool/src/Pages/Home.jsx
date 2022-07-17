import React from "react";
import Navbar from "../Components/Navbar";
import { Container, Row, Col } from "react-grid-system";
import Form from "../Components/Form";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Backtotop from "../Components/Backtotop";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  var token 
  const navigate =  useNavigate()
  const loginStatus = localStorage.getItem("LoginStatus")
useEffect(() => {
if(loginStatus){
  
console.log('====================================');
}
else{
  navigate("/user/login")
}

}, [])

// useEffect(()=>{
//   document.title = 'Home'
//   console.log('vikram',token)
//   token.map( customer => {
//     console.log('hti',customer);
    
// })

// }) 


  return (
    <div>
      <Navbar/>
    <Container fluid className="img-wrapper container-fluid">
      <Container>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
   <Box className="form_bg">
   <Form/>
   </Box>
  </Grid>
  <Grid item xs={6}>
    
  </Grid>
  </Grid>
  </Container>
    </Container>
    
{/* 3 content */}
<Container fluid className="three-content">
<Container>
<Grid container spacing={2}>
  <Grid item xs={4}>
  <Card sx={{ minWidth: 275 }} style={{boxShadow: "none"}}>
      <CardContent style={{backgroundColor: "#F5F5F5"}}>
        <img src="./website_images/cil_money.png"></img>
        <h5 className="three-content-h5" component="div">
        Your pick of rides at low prices        </h5>
      
        <p className="three-content-p">
        No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.
          <br />
          
        </p>
      </CardContent>
      
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card sx={{ minWidth: 275 }} style={{boxShadow: "none"}}>
      <CardContent style={{backgroundColor: "#F5F5F5"}}>
        <img src="./website_images/bi_lightning.png"></img>
        <h5 className="three-content-h5" component="div">
        Scroll, click, tap and go!        </h5>
      
        <p className="three-content-p">
        Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.
          <br />
          
        </p>
      </CardContent>
      
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card sx={{ minWidth: 275 }} style={{boxShadow: "none"}}>
      <CardContent style={{backgroundColor: "#F5F5F5"}}>
        <img src="./website_images/codicon_workspace-trusted.png"></img>
        <h5 className="three-content-h5" component="div">
        Trust who you travel with        </h5>
      
        <p className="three-content-p">
        We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.
          <br />
          
        </p>
      </CardContent>
      
    </Card>
   </Grid>
  </Grid>
</Container>
</Container>




{/* Your safety is our priority */}
<Container className="your-safety">
<Grid container spacing={2}>
  <Grid item xs={5}>
    <img src="./website_images/image 1.png"></img>
  </Grid>
  <Grid item xs={7}>
    <h4>Your safety is our priority</h4>
    <p>At carpool, we're working hard to
       make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.</p>
       <Button style={{backgroundColor: "#D9D9D9", borderRadius:"45px",color:"#f80015",padding:"10px 15px",marginBottom:"10px",fontSize:"12px"}} >Learn More</Button>
  </Grid>
  </Grid>
</Container>
    
{/*Driving in your car soon?*/}
<Container fluid style={{backgroundColor:"#F5F5F5", marginTop:"20px"}}>
<Container className="your-safety">
<Grid container spacing={2}>
  <Grid item xs={5}>
    <img src="./website_images/image 2.png"></img>
  </Grid>
  <Grid item xs={7}>
    <h4 >Driving in your car soon?</h4>
    <p style={{color:"#636363",fontWeight:"400"}}>Let's make this your least expensive journey ever.</p>
       <Button style={{backgroundColor: "#28135D", borderRadius:"45px",color:"#fff",padding:"10px 15px",marginBottom:"10px",fontSize:"12px"}} >Learn More</Button>
  </Grid>
  </Grid>
</Container>
</Container>

{/* Car pool faq */}
<Container className="faq">
<h1>Carpool Help Centre</h1>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How do I book a carpool ride?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can book a carpool ride on our mobile app, or on blablacar.com. Simply search for your destination, 
          choose the date you want to travel and pick the carpool that suits you best! Some
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I publish a carpool ride?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Offering a carpool ride on BlaBlaCar is easy. To publish your ride, use our mobile app or blablacar.com. Indicate your 
          departure and arrival points, the date and time of your departure, how many
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How do I cancel my carpool ride?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you have a change of plans, you can always cancel your carpool ride from the ‘Your rides’ section of our app. The sooner you cancel, the better. 
          That way the driver has time to accept new passengers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What are the benefits of travelling by carpool?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          There are multiple advantages to carpooling, over other means of transport.
           Travelling by carpool is usually more affordable, especially for longer distances. Carpooling is also more eco-
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How much does a carpool ride cost?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The costs of a carpool ride can vary greatly, and depend on factors like distance, time of departure, the demand of that ride and more.
           It is also up to the driver to decide how much to charge
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I start carpooling?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Carpooling with BlaBlaCar is super easy, and free! Simply sign up for an account and tell us some basic details about yourself. 
          Once you have a BlaBlaCar account, you can start booking or
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Button style={{backgroundColor: "#28135D", borderRadius:"45px",color:"#fff",padding:"10px 15px",marginBottom:"80px",marginTop:"50px",fontSize:"12px",marginLeft:"auto",marginRight:"auto"}} >Read our help center</Button>
</Container>
{/* Footer */}
<Container fluid className="footer" >
  <Container  style={{borderBottom:"1px #fff solid",paddingBottom:"150px"}}>
  <Grid container spacing={2}>
  <Grid item xs={3}>
 
    <h4>How it works</h4>
    <p>About us</p>
  </Grid>
  <Grid item xs={3}>
  <h4>Help center</h4>
    <p>Terms and conditions</p>
   </Grid>
   <Grid item xs={3}>
   <h4>Press</h4>
    <p>We’re Hiring !</p>
   </Grid>
   <Grid item xs={3}>
   <h4 style={{paddingLeft:"10px"}}>Social</h4>
    <InstagramIcon style={{padding:"10px"}}/>
    <TwitterIcon style={{padding:"10px"}}/>
    <FacebookRoundedIcon style={{padding:"10px"}}/>
   </Grid>
  </Grid>
 {/* <Backtotop/> */}
  </Container>
<h6>Copyright © carpool by Emegix</h6>
</Container>
    </div>
  );
}

export default Home;
