import React from 'react';
import Headerbar from './components/headerbar/headerbar'


import Sidebar from'./components/sidebar/sidebar'
import Routes from './routes'
import './App.css'

function App() {
  return (
    <div className="App">
    
          <Sidebar></Sidebar>
          <div className="layout">
            <Headerbar></Headerbar>


              <div className="content">
                  <Routes></Routes>
              </div>
          </div>
          
          
          
        

      

    


        
    </div>
  );
}

export default App;
