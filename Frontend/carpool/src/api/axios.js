import axios from 'axios';
 
export default axios.create({
    baseURL:'http://localhost:8000/',
    headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }

});