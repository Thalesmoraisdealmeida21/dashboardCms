  
import axios from 'axios'
import { getToken } from './auth';


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})


api.interceptors.request.use(async config=>{
    const token = getToken();
    const tenant = localStorage.getItem("idUser");
   

    if(token){
        config.headers.authorization = token
        config.headers.tenant = tenant
    }
    
    return config
})

export default api;