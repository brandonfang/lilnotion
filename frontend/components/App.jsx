import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route-util';
import SplashHome from './auth/SplashHome';
import SplashAbout from './auth/SplashAbout';
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
            {/* <Route exact path="/" component={SplashHome} /> */}
            {/* <Route path="/home" component={LoggedInContent} /> */}

            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/about" component={SplashAbout} />
            <Route path="/" component={SplashHome} />
            <ProtectedRoute path="/home" component={LoggedInContent} />

            <AuthRoute path="/404" component={NotFoundPage} />
            <Redirect to="/404" />


          </Switch>
        </div>
      </>
    );
  }
}

export default App;
