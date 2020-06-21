import React, { useState, useEffect } from 'react'
import {MdArrowDropDown} from 'react-icons/md'
import {ùseHistory, useHistory} from 'react-router-dom'

import './headerbar.css'
import profile from './../../assets/perfil.png'
import { logout } from '../../services/auth'
import api from '../../services/api'


export default function(){

  const [visibilityDropdown, setVisibilityDropdown] = useState('dropdown-content')
  const [user, setUser] = useState({})

  const history = useHistory();
  function toogleDropdown(){
      if(visibilityDropdown === 'dropdown-content'){
          setVisibilityDropdown('dropdown-content visible')
      } else {
        setVisibilityDropdown('dropdown-content')
      }

  }




    function getDataProfile(){
          api.get(`/user/${localStorage.getItem('idUser')}`).then((userData)=>{
                setUser(userData.data);
                console.log(user)
          })
    }



    useEffect(()=>{
        getDataProfile();
    }, [])
    
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