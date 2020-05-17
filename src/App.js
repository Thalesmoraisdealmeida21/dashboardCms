import React from 'react';
import Headerbar from './components/headerbar/headerbar'


import Sidebar from'./components/sidebar/sidebar'
import Routes from './routes'
import Auth from './components/pages/auth/layoutAuth/layoutAuth'

import './App.css'
import { isLogged } from './services/auth';
import { BrowserRouter } from 'react-router-dom';

function App() {


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
          
 

                    <Auth></Auth>
                    <Routes></Routes>
      
                    
                </div>
        }
    </BrowserRouter>
  )
 


}

export default App;
