  
import axios from 'axios'
import { getToken } from './auth';
import env from './../enviroment/environment-dev'


const api = axios.create({
    baseURL: env.api
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