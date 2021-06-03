import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session-actions';
import LoginForm from './LoginForm';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'login',
  navLink: <Link to='/signup'>Sign Up instead</Link>,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
