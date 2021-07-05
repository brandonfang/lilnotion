import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HomeRoute } from '../util/route-util';
import LoginFormContainer from './auth/LoginFormContainer';
import SignupFormContainer from './auth/SignupFormContainer';
import OnboardingContainer from './auth/OnboardingContainer';
import EditorContainer from './editor/EditorContainer'
import PageNotFound from './PageNotFound';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <div className="app"> */}
          <Switch>
            <HomeRoute exact path="/" />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/onboarding" component={OnboardingContainer} />
            <ProtectedRoute path="/:workspaceDomain/:pageId" component={EditorContainer} />
            <ProtectedRoute path="/:workspaceDomain" component={EditorContainer} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        {/* </div> */}
      </>
    );
  }
}

export default App;
