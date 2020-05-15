
import React, {lazy, Suspense} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


const Home = lazy(() => import('./components/pages/home')) 
const NewPost = lazy(()=> import('./../src/components/pages/newPost/newPost'));


export default function Routes(){
  return (
      <BrowserRouter>
          <Switch>
            <Suspense fallback={ <h1> Rendering </h1>}>
              <Route path="/" exact component={Home}></Route>
              <Route path="/post/new" exact component={NewPost}></Route>
            </Suspense>
       
              
              
              </Switch>
        </BrowserRouter>
    )

  }