
import React, {lazy, Suspense} from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Loader from './assets/loader.svg'

import { isLogged } from './services/auth'

function loadingScreen(){

  return(
      
    <div  className="loader" style={{margin: "auto", textAlign: "center", marginTop:"20vh"}}>
        <img src={Loader} alt=""/>
        <h3>Carregando</h3>
    </div>
  )
}

const Home = lazy(() => import('./components/pages/home')) 
const NewPost = lazy(() => import('./../src/components/pages/newPost/newPost'));
const UpdatePost = lazy(()=> import('./../src/components/pages/updatePost/updatePost'))
const Login = lazy(() => import('./components/pages/auth/login/login'))
//const Register= lazy(()=> import('./components/pages/auth/register/register'))
const NotFound = lazy(()=> import('./components/pages/page-404/page-404'))


export default function Routes(){


  if(isLogged()){
    return (
      <BrowserRouter>
          <Switch>
            <Suspense fallback={ (loadingScreen())}>

              <Route path="/" exact component={Home}></Route>
              <Route path="/loading" component={NotFound}></Route>
              <Route path="/post" exact component={Home}></Route>
              <Route path="/post/new" exact component={NewPost}></Route>
              <Route path="/post/update/:id" exact component={UpdatePost}></Route>
          

         
            </Suspense>

              
              
              </Switch>
        </BrowserRouter>
    )
  } else {
    return(
      <BrowserRouter>
        <Switch>
          <Suspense fallback={ (loadingScreen())}>
      
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="*">
              <Redirect to="/login"></Redirect>
            </Route>


            


          </Suspense>  
        </Switch>
       </BrowserRouter>
    )

  }



  
  }