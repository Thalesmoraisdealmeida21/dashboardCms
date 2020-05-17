  
import axios from 'axios'
import { getToken } from './auth';

const api = axios.create({
    baseURL: 'http://192.168.0.103:3333'
})


api.interceptors.request.use(async config=>{
    const token = getToken();
    console.log("token" + token)

    if(token){
        config.headers.authorization = token
    }
    return config
})

export default api;