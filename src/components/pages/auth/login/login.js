import React from 'react'
import api from './../../../../services/api'


import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import {login} from './../../../../services/auth'
import { success, error, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

import "@pnotify/core/dist/BrightTheme.css";
import '@pnotify/confirm/dist/PNotifyConfirm.css'

export default function(){

    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function goToRegister(){
      history.push('register')
    }


    function handleLogin(e){
          e.preventDefault();


          const data = {
                username,
                password
          }

      
            api.post('login', data).then((ret)=>{
              if(ret.status === 200){

                let token = ret.data.token;
                login(token, ret.data.idUser);
                history.push('post');
                success('Logado com sucesso, você será redirencionado !!!')
                window.location.reload();
              } else{
                error(ret.statusText)
              }


            }).catch((e)=>{

             
                error("Usuário ou senha inválidos")
             
                
                
            })

         
        


    }

  return(
    <div className="formContainer">
       
             <form>
                  

                <div className="formGroup">
                  <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Nome de usuário" className="formControl"/>
                </div>

                <div className="formGroup">
                  <input type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Senha" className="formControl"/>
                </div>


                <div className="buttons">
                    <button onClick={handleLogin} class="btn form-control">Login</button>
                    <button onClick={goToRegister} class="btn form-control">Criar Conta</button>
                </div>
              </form>
          
    </div>
          

        
  )
}