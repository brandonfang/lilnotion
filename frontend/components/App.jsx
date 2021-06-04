import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route-util';
import SplashHome from './auth/SplashHome';
import SplashAbout from './auth/SplashAbout';
import LoginFormContainer from './auth/LoginFormContainer';
import SignupFormContainer from './auth/SignupFormContainer';
import LoggedInContent from './auth/LoggedInContent';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="app">
          <Switch>
            {/* <Route exact path="/login" component={LoginFormContainer} /> */}
            {/* <Route exact path="/signup" component={SignupFormContainer} /> */}

            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/about" component={SplashAbout} />
            <ProtectedRoute path="/" component={LoggedInContent} />
            <Route exact path="/" component={SplashHome} />
          </Switch>          
        </div>
      </>
    );
  }
}

export default App;
