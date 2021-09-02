import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import SplashHome from '../components/auth/SplashHome';
import EditorContainer from '../components/editor/EditorContainer';

// Components only seen by logged out users
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route 
    path={path} 
    exact={exact} 
    render={(props) => {
      return (
        !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      );
    }} 
  />
);

// Components only seen by logged in users
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route 
    path={path} 
    exact={exact} 
    render={(props) => (
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    )} 
  />
);

const Home = ({ path, loggedIn, exact }) => (
  <Route 
    path={path} 
    exact={exact} 
    render={(props) => (
      loggedIn ? <EditorContainer {...props} /> : <SplashHome {...props} />
    )} 
  />
);

const mapStateToProps = state => ({ 
  loggedIn: Boolean(state.session.currentUserId) 
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const HomeRoute = withRouter(connect(mapStateToProps)(Home));
