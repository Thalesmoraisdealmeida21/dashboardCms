import React, { useState } from 'react'
import {MdArrowDropDown} from 'react-icons/md'
import {ùseHistory, useHistory} from 'react-router-dom'

import './headerbar.css'
import profile from './../../assets/perfil.jpg'
import { logout } from '../../services/auth'

export default function(){

  const [visibilityDropdown, setVisibilityDropdown] = useState('dropdown-content')
  const history = useHistory();
  function toogleDropdown(){
      if(visibilityDropdown === 'dropdown-content'){
          setVisibilityDropdown('dropdown-content visible')
      } else {
        setVisibilityDropdown('dropdown-content')
      }

  }

   function handleLogout(){
    logout().then((retAuth)=>{
        history.push("login");
        window.location.reload();
    })
    
    


 



  
        
  }
  return(
    <div className="HeaderbarContainer">


        <div className="col-7">
           
        </div>

        <div className="col-3">
   
            <img src={profile} className="profileImg" alt=""/>
            <span>

              <div className="dropdown">
                  <button onClick={toogleDropdown} className="btn-dropdown link">
                    Thales Morais
                    <MdArrowDropDown></MdArrowDropDown>
                  </button> 
                    <div className={visibilityDropdown}>
                    <button className="link drop-option">Perfil</button>
                    <button onClick={handleLogout} className="link drop-option">Sair</button>
                </div>
              </div>
              

             
       
              </span>


         
        </div>


      
    </div>
    
  )  
}