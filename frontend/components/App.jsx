import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HomeRoute } from '../util/route-util';
import LoginFormContainer from './auth/LoginFormContainer';
import SignupFormContainer from './auth/SignupFormContainer';
import OnboardingContainer from './auth/OnboardingContainer';
import PageNotFound from './PageNotFound';

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
            {/* Add a wildcard route for workspaces show pages */}
            {/* <ProtectedRoute path="/" component={EditorContainer}/> */}
            <Route path="/404" component={PageNotFound} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </>
    );
  }
}

// consider wrapping App in an AppContainer component
export default App;
