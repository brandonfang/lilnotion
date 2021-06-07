import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route-util';
import SplashHome from './auth/SplashHome';
import LoginFormContainer from './auth/LoginFormContainer';
import SignupFormContainer from './auth/SignupFormContainer';
import OnboardingContainer from './auth/OnboardingContainer';
import EditorContainer from './editor/EditorContainer';
import NotFoundPage from './NotFoundPage';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="app">
          <Switch>
            <ProtectedRoute exact path="/app" component={EditorContainer} />
            <ProtectedRoute exact path="/onboarding" component={OnboardingContainer} />
            <AuthRoute exact path="/" component={SplashHome} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path="/404" component={NotFoundPage} />
            <Route path="/" component={SplashHome} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </>
    );
  }
}

// consider wrapping App in an AppContainer
export default App;
