import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HomeRoute } from '../util/route-util';
import OnboardingContainer from './auth/OnboardingContainer';
import LoginFormContainer from './auth/LoginFormContainer';
import SignupFormContainer from './auth/SignupFormContainer';
import PageNotFound from './PageNotFound';
import Workspace from './workspace/Workspace';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="app">
          <Switch>
            <HomeRoute exact path="/" />
            <ProtectedRoute exact path="/onboarding" component={OnboardingContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path="/404" component={PageNotFound} />
            <ProtectedRoute path="/:workspaceDomain/:pageId" component={Workspace} />
            <Redirect to="/404" />
            {/* <Route path="*" component={PageNotFound} /> */}
          </Switch>
        </div>
      </>
    );
  }
}

// consider wrapping App in an AppContainer component
export default App;
