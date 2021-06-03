import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route-util';
import SplashHome from './auth/SplashHome';
import SplashAbout from './auth/SplashAbout';
import LoginFormContainer from './auth/LoginFormContainer';
import SignupFormContainer from './auth/SignupFormContainer';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="app">
          <Switch>
            <Route exact path="/" component={SplashHome} />
            <Route exact path="/about" component={SplashAbout} />
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
            {/* <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
            {/* <ProtectedRoute  /> */}
          </Switch>          
        </div>
      </>
    );
  }
}

export default App;
