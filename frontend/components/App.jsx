import React from 'react'
import { Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute, HomeRoute } from '../util/route-util'
import LoginFormContainer from './auth/LoginFormContainer'
import SignupFormContainer from './auth/SignupFormContainer'
import EditorContainer from './editor/EditorContainer'
import PageNotFound from './PageNotFound'

function App() {
  return (
    <>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

        <HomeRoute exact path="/" />
        <ProtectedRoute path="/p/:id" component={EditorContainer} />

        <AuthRoute path="*" component={PageNotFound} />
        <HomeRoute />
      </Switch>
    </>
  )
}

export default App
