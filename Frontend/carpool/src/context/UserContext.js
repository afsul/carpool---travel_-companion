import {createContext, useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from "jwt-decode";


export const AuthContext = createContext()


export const AuthProvider = ({children}) => {
    
    const navigate  = useNavigate()
    const [token,setToken] = useState()
    const [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)


     
      var tokenid = localStorage.getItem('authTokens')
      var decoded = jwt_decode(tokenid);


    const Login = async (data) =>{  
        // data.preventDefault();
        console.log(data);
        await axios.post("http://localhost:8000/auth/jwt/create/",data)
        .then((response)=>{
            
            // console.log('====================================pp',response);
            console.log(response.data);
            // console.log('====================================');
            localStorage.setItem("access_token",response.data.access)
            localStorage.setItem("LoginStatus",true)
            console.log(response,"this is response data======================+>")
            setToken(response.data.access)
            setAuthTokens(response.data);
            localStorage.setItem("LoginStatus",true)
            localStorage.getItem('LoginStatus')
            setUser(jwt_decode(response.data.access))
            localStorage.setItem('authTokens',JSON.stringify(response.data))
            console.log('decoded token',decoded)
            navigate("/")
        })
    
        console.log('this is token in login react',token)
       
        }

        const contextData = {
            Login,
            token,
            user,
            authTokens,
            decoded

            
        }


        return(
           <AuthContext.Provider value={contextData}>
            {children}
           </AuthContext.Provider>
        )


        
    
}