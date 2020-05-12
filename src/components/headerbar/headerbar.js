import React from 'react'
import {MdArrowDropDown} from 'react-icons/md'

import './headerbar.css'
import profile from './../../assets/perfil.jpg'

export default function(){
  return(
    <div className="HeaderbarContainer">


        <div className="col-7">
           
        </div>

        <div className="col-3">
   
            <img src={profile} className="profileImg" alt=""/>
            <span>
              <a href="">Thales Morais</a>    
                <MdArrowDropDown></MdArrowDropDown>
               
              </span>


         
        </div>


      
    </div>
    
  )  
}