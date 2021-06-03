import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

  const authLinks = () => (
    <div>
      <Link to="/login">Log in</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </div>
  );

  const personalGreeting = () => (
    <hgroup>
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : authLinks();
};

export default Greeting;
