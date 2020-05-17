
import React, {lazy, Suspense} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Loader from './assets/loader.svg'
import { useState } from 'react'
import { isLogged } from './services/auth'

function loadingScreen(){

  return(
      
    <div style={{ margin: "auto" }}className="loader" style={{textAlign: "center", marginTop:"auto"}}>
        <img src={Loader} alt=""/>
        <h3>Carregando</h3>
    </div>
  )
}

const Home = lazy(() => import('./components/pages/home')) 
const NewPost = lazy(() => import('./../src/components/pages/newPost/newPost'));
const UpdatePost = lazy(()=> import('./../src/components/pages/updatePost/updatePost'))
const Login = lazy(() => import('./components/pages/auth/login/login'))
const Register= lazy(()=> import('./components/pages/auth/register/register'))


export default function Routes(){


  if(isLogged()){
    return (
      <BrowserRouter>
          <Switch>
            <Suspense fallback={ (loadingScreen())}>

              
              <Route path="/" exact component={Home}></Route>
              <Route path="/post" exact component={Home}></Route>
              <Route path="/post/new" exact component={NewPost}></Route>
              <Route path="/post/update/:id"  component={UpdatePost}></Route>
         
            </Suspense>

              
              
              </Switch>
        </BrowserRouter>
    )
  } else {
    return(
      <BrowserRouter>
        <Switch>
          <Suspense fallback={ (loadingScreen())}>
            <Route path="/" exact component={Login}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/register" exact component={Register}></Route>
            
  
          </Suspense>  
        </Switch>
       </BrowserRouter>
    )

  }



  
  }