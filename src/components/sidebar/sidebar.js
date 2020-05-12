import React from 'react'
import profileImage from './../../assets/perfil.jpg'
import {MdDashboard, MdAddShoppingCart, MdSchool, MdEmail, MdChat, MdNoteAdd, MdAccessibility, MdArrowDropDownCircle, MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'


import './sidebar.css'

export default function(){


  return(
    
    
      <div className="sidebarContainer"> 
  

    
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
                     
                       <a href="" className="linkMenu">
                       
                         <MdDashboard size={20} ></MdDashboard> 
                      
                      
                        <label htmlFor="">Dashboard</label>

                
                            <MdKeyboardArrowRight className="iconDropdown" size={20}></MdKeyboardArrowRight>
               
               
                        
                      </a>
                    </li>

                      <li>
                     
                       <a href="#" className="linkMenu">
                         <MdNoteAdd size={20} ></MdNoteAdd> 
                        <label htmlFor="">Públicações</label>

                      </a>
                    </li>

                    <li>
                     
                     <a href="#" className="linkMenu">
                       <MdAddShoppingCart size={20} ></MdAddShoppingCart> 
                      <label htmlFor="">E-commerce</label>

                    </a>
                  </li>


                  <li>
                     
                     <a href="#" className="linkMenu">
                       <MdAccessibility size={20} ></MdAccessibility> 
                      <label htmlFor="">Acessibilidade</label>

                    </a>
                  </li>


                  <li>
                     
                     <a href="#" className="linkMenu">
                       <MdSchool size={20} ></MdSchool> 
                      <label htmlFor="">Faculdade</label>

                    </a>
                  </li>



                  <li>
                     
                     <a href="#" className="linkMenu">
                       <MdEmail size={20} ></MdEmail> 
                      <label htmlFor="">E-mail</label>

                    </a>
                  </li>

                  <li>
                     
                     <a href="#" className="linkMenu">
                       <MdChat size={20} ></MdChat> 
                      <label htmlFor="">Chat</label>

                    </a>
                  </li>

                 

                  </ul>
                </div>
            </div>

            
        </div>

      </div>
   

  )
}