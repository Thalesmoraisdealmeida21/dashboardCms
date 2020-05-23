import React, { useState } from 'react';
import Headerbar from './components/headerbar/headerbar'


import Sidebar from'./components/sidebar/sidebar'
import Routes from './routes'
import Auth from './components/pages/auth/layoutAuth/layoutAuth'
import { useRouteMatch } from 'react-router-dom'

import './App.css'
import { isLogged } from './services/auth';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';


function App() {


  const [notFound, setNotFound] = useState(false)
  


  function getRouteNotFound(){
          if(window.location.pathname === "/404"){
            setNotFound(true);
          }
  }
  

  useEffect(()=>{
      getRouteNotFound();

  }, [])


  return(
    <BrowserRouter>

        {isLogged() &&
              <div className="App">
    
              <Sidebar></Sidebar>
              <div className="layout">
                <Headerbar></Headerbar>
    
    
                  <div className="content">
                      <Routes></Routes>
                  </div>
              </div>
        </div>
        }

        {!isLogged() &&
                    <div className="auth">
          


                    {!notFound &&
                      
                            <Auth></Auth>
                 
  
                    } 

                    <Routes></Routes>

               

                   
      
                    
                </div>
        }
    </BrowserRouter>
  )
 


}

export default App;
