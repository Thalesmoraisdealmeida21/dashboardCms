import React, { useState }  from 'react'
import profileImage from './../../assets/perfil.jpg'
import {MdDashboard, MdAddShoppingCart, MdSchool, MdEmail, MdChat, MdNoteAdd, MdAccessibility, MdArrowDropDownCircle, MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'


import './sidebar.css'
import { Link } from 'react-router-dom'

export default function(){

  const [menuCollpse, setMenuCollpase] = useState("sidebarContainer")
  const [sizeIcons, setSizeIcons] = useState(30)
  function collapseMenu(){
    if(menuCollpse === "sidebarContainer menuCollapsed"){
      setMenuCollpase("sidebarContainer");
      setSizeIcons(25)
    } else {
      setMenuCollpase("sidebarContainer menuCollapsed");
      setSizeIcons(40)
    }
     


  }
  return(
    
    
      <div className={menuCollpse}> 

        <div className="headerMenu">
            <h4>CMS</h4>

            <button onClick={collapseMenu} className="btn-toggle">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
  
        </button>
        </div>

     
    
        <div className="profileContainer">
          <div className="profileContent">
 
            <img src={profileImage} alt=""/>
            <h4>Thales Morais</h4>
          </div>
          
        </div>



        <div className="menu">
            <div className="session">
                <span>Aplicações</span>

                <div className="menuItems">

                  <ul>
                    <li>
                     
                       <Link to="/post" className="linkMenu">


                          <div className="icon">
                            <MdDashboard size={sizeIcons} style={{transition: "1s"}}></MdDashboard> 
                          </div>
                     
                      
                      
                        <label>Públicações</label>

                
               
    
                      </Link>
                 </li>

                 

                  </ul>
                </div>
            </div>

            
        </div>

      </div>
   

  )
}