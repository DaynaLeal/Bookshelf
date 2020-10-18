import NavBar from 'components/NavBar'
import React, { Suspense } from 'react'
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom'

import Landing from '../views/Landing'
import MyBooks from '../views/MyBooks'
import AddBook from '../views/AddBook'

const Router = () => {
  return(
    <>
      <NavBar/>
      <Suspense fallback={<div>Loading Content...</div>}>
        <main>
          <Switch>
            <Route path='/mybooks' render={(routeProps: RouteProps) => <MyBooks routeProps={routeProps} />} />
            <Route path='/addBook' component={AddBook} />
            <Route path='/' component={Landing}/>
            <Redirect from="/" to="/"/>
          </Switch>
        </main>
      </Suspense>
    </>  
  )
}

export default Router