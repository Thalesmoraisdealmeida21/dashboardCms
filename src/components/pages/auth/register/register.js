import React from 'react'


import './register.css'
import { useHistory } from 'react-router-dom'


export default function(){


  const history = useHistory()



  function goBackLogin(){
        history.push('login')
  }

  return(

    <div className="formContainer">
          <form>
                  

                  <div className="formGroup">
                    <input type="text" placeholder="Nome de usuário" className="formControl"/>
                  </div>
  
                  <div className="formGroup">
                    <input type="e-mail" placeholder="E-mail" className="formControl"/>
                  </div>
                  
                  <div className="formGroup">
                    <input type="password" placeholder="Senha" className="formControl"/>
                  </div>
  
  
                  <div className="buttons">
                      <button class="btn form-control">Criar Conta</button>
                      <button onClick={goBackLogin}class="btn form-control">Voltar</button>
                  </div>

            </form>
    </div>
  )
}