
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


import Home from './../src/components/pages/home'



export default function Routes(){
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home}></Route>
              
              
              </Switch>
        </BrowserRouter>
    )

  }