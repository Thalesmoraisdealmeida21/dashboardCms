  
import axios from 'axios'
import { getToken } from './auth';


const api = axios.create({
    baseURL: "http://thalesmoras.kinghost.net:21104"
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