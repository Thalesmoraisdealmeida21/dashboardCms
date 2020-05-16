import React from 'react'

import LayoutAuth from './../layoutAuth/layoutAuth'
import { useHistory } from 'react-router-dom'


export default function(){
  
    const history = useHistory();

    function goToRegister(){
      history.push('register')
    }

  return(
    <div className="formContainer">
       
             <form>
                  

                <div className="formGroup">
                  <input type="text" placeholder="Nome de usuário" className="formControl"/>
                </div>

                <div className="formGroup">
                  <input type="password" placeholder="Senha" className="formControl"/>
                </div>


                <div className="buttons">
                    <button class="btn form-control">Login</button>
                    <button onClick={goToRegister} class="btn form-control">Criar Conta</button>
                </div>
              </form>
          
    </div>
          

        
  )
}