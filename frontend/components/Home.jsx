import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Redirect, withRouter } from 'react-router-dom';
import SplashHome from './auth/SplashHome';
import EditorContainer from './editor/EditorContainer';

const Home = ({ component: Component, path, loggedIn, exact }) => (
  <Route />


);

const mapStateToProps = state => ({ 
  // loggedIn: Boolean(state.session.currentUserId) 
});

export default withRouter(connect(mapStateToProps(Home)));

