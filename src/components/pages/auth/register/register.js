import React from 'react'


import './register.css'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { success, error, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

import "@pnotify/core/dist/BrightTheme.css";
import '@pnotify/confirm/dist/PNotifyConfirm.css'

import api from './../../../../services/api'


export default function(){


  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')




  async function createAccount(e){
    e.preventDefault();


    const data = {
        username,
        password,
        email
    }

    api.post('user', data).then((ret)=>{
      if(ret.status === 200){
        success('Gravou com sucesso, Você será redirecionadopara o login')
        history.push('/login')
        window.location.reload();
      } else {
        error('Algo deu errado ;(')
      }
    })
  
  }


  function goBackLogin(){
        history.push('login')
  }

  return(

    <div className="formContainer">
          <form>
                  

                  <div className="formGroup">
                    <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Nome de usuário" className="formControl"/>
                  </div>
  
                  <div className="formGroup">
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="e-mail" placeholder="E-mail" className="formControl"/>
                  </div>
                  
                  <div className="formGroup">
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Senha" className="formControl"/>
                  </div>
  
  
                  <div className="buttons">
                      <button onClick={createAccount} class="btn form-control">Criar Conta</button>
                      <button onClick={goBackLogin}class="btn form-control">Voltar</button>
                  </div>

            </form>
    </div>
  )
}