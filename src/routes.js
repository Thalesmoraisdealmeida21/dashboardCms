
import React, {lazy, Suspense} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Loader from './assets/loader.svg'

function loadingScreen(){

  return(

    <div className="loader" style={{textAlign: "center", marginTop:"auto"}}>
        <img src={Loader} alt=""/>
        <h3>Carregando</h3>
    </div>
  )
}

const Home = lazy(() => import('./components/pages/home')) 
const NewPost = lazy(()=> import('./../src/components/pages/newPost/newPost'));


export default function Routes(){
  return (
      <BrowserRouter>
          <Switch>
            <Suspense fallback={ (loadingScreen())}>
              <Route path="/" exact component={Home}></Route>
              <Route path="/post/new" exact component={NewPost}></Route>
            </Suspense>

              
              
              </Switch>
        </BrowserRouter>
    )

  }