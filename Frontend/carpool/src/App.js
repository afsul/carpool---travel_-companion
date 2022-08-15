import {BrowserRouter as Router,Routes,Route, BrowserRouter}from 'react-router-dom'
import React from 'react' 
import { AuthProvider } from './context/UserContext';
import './App.css';
import Home from './Pages/Home/Home'
import { Login } from './Pages/Login/Login';
import Signup from './Pages/Sign Up/Signup';
import Payment from './Pages/Payment/Payment';
import UserProfile from './Pages/User Profile/UserProfile'
import EditUserProfile from'./Pages/User Profile/EditUserProfile'
import OtpVerify from './Pages/Otp/OtpVerify';
import Ride_schedule from './Pages/Ride Schedule/Ride_schedule'
import Ride_list from './Pages/Ride list/Ride_list'
import RideSingle from './Pages/Ride Details/RideSingle'
import AddVehicle from './Pages/Add Vehicle/AddVehicle'
import Your_rides from './Pages/Manage Rides/Your_rides'
import useForm from './Hooks/useForm';




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
        <Route path='/user/edit-profile' element={<EditUserProfile/>}/>
        <Route path='/user/otp' element={<OtpVerify/>}/>
        <Route path='/user/ride_schedule' element={<Ride_schedule/>}/>
        <Route path='/user/ride_list' element={<Ride_list/>}/>
        <Route path='/user/single_ride' element={<RideSingle/>}/>
        <Route path='/user/add_vehicle' element={<AddVehicle/>}/>
        <Route path='/user/Your_rides' element={<Your_rides/>}/>     
        {/* <Route path='/admin/AdminLogin' element={<AdminLogin/>}/>      */}

           
      </Routes>
      </AuthProvider>
     </Router>
    </div>
  );
}

export default App;
