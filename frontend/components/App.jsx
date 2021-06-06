import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route-util';
import SplashHome from './auth/SplashHome';
import LoginFormContainer from './auth/LoginFormContainer';
import SignupFormContainer from './auth/SignupFormContainer';
import LoggedInContent from './auth/LoggedInContent';
import NotFoundPage from './NotFoundPage';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="app">
          <Switch>
            {/* <Route path="/home" component={LoggedInContent} /> */}

            <AuthRoute exact path="/" component={SplashHome} />
            <ProtectedRoute exact path="/app" component={LoggedInContent} />
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

export default App;
