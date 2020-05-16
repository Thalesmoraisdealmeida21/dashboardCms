import React from 'react';
import Headerbar from './components/headerbar/headerbar'


import Sidebar from'./components/sidebar/sidebar'
import Routes from './routes'
import Auth from './components/pages/auth/layoutAuth/layoutAuth'

import './App.css'

function App() {
 /* return (
    <div className="App">
    
          <Sidebar></Sidebar>
          <div className="layout">
            <Headerbar></Headerbar>


              <div className="content">
                  <Routes></Routes>
              </div>
          </div>
          
          
          
        

      

    


        
    </div>
  );*/


  return(
          <div className="auth">
          
 

              <Auth></Auth>
              <Routes></Routes>

              
          </div>
       
   
  )
}

export default App;
