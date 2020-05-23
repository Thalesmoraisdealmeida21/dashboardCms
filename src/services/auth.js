import api from './api'

export function isLogged(){
        return localStorage.getItem('token') !== null
}

export function getToken(){
  return localStorage.getItem('token')

}

export function login(token, id){
  localStorage.setItem('token', token)
  localStorage.setItem('idUser', id);
}

export async function  logout(){

 await api.post('logout').then((res)=>{
    if(res.status === 200){
      localStorage.removeItem('token');
      
    }
  })

  return true;

 
  




}