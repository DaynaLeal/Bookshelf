import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Landing from '../views/Landing'
import Mybooks from '../views/Mybooks'

const Router = () => {
  return(
    <>
      <Suspense fallback={<div>Loading Content...</div>}>
        <main>
          <Switch>
            <Route path='/mybooks' component={Mybooks}/>
            <Route path='/' component={Landing}/>
            <Redirect from="/" to="/"/>
          </Switch>
        </main>
      </Suspense>
    </>
  )
}

export default Router