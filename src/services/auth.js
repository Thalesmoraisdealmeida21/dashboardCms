import api from './api'

export function isLogged(){
        return localStorage.getItem('token') !== null
}

export function getToken(){
  return localStorage.getItem('token')

}

export function login(token){
  localStorage.setItem('token', token)
}

export async function  logout(){

 await api.post('logout').then((res)=>{
    if(res.status === 200){
      localStorage.removeItem('token');
      
    }
  })

  return true;

 
  




}