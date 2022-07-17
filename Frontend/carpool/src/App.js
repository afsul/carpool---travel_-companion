import {BrowserRouter as Router,Routes,Route, BrowserRouter}from 'react-router-dom'
import Home from "./Pages/Home";
import './App.css';
import React from 'react' 
import { Login } from './Pages/Login';
import Signup from './Pages/Signup';
import Payment from './Pages/Payment';
import UserProfile from './Pages/UserProfile';
import OtpVerify from './Pages/OtpVerify';
import Ride_schedule from './Pages/Ride_schedule';
import Ride_list from './Pages/Ride_list';
import RideSingle from './Pages/RideSingle';
import AddVehicle from './Pages/AddVehicle';
import Your_rides from './Pages/Your_rides';
import { AuthProvider } from './context/UserContext';


function App() {
  return (
    <div>
      
     <Router>
      <AuthProvider>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user/login' element={<Login/>}/>
        <Route path='/user/signup' element={<Signup/>}/>
        <Route path='/user/payment' element={<Payment/>}/>
        <Route path='/user/profile' element={<UserProfile/>}/>
        <Route path='/user/otp' element={<OtpVerify/>}/>
        <Route path='/user/ride_schedule' element={<Ride_schedule/>}/>
        <Route path='/user/ride_list' element={<Ride_list/>}/>
        <Route path='/user/single_ride' element={<RideSingle/>}/>
        <Route path='/user/add_vehicle' element={<AddVehicle/>}/>
        <Route path='/user/Your_rides' element={<Your_rides/>}/>        
      </Routes>
      </AuthProvider>
     </Router>
    </div>
  );
}

export default App;
