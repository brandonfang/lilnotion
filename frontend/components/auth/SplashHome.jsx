import React from 'react';
// import GreetingContainer from '../greeting/GreetingContainer';
import { Link } from 'react-router-dom';

const SplashHome = () => (
  <div>
    <nav>
      <img src={window.logo} alt="lilNotion logo" />
      {/* <GreetingContainer /> */}
    </nav>
    <img src={window.hero} alt="People using Notion" />
    <h1>All-in-one workspace</h1>
    <h2>One tool for your whole team. Write, plan, and get organized.</h2>
    <p><Link to="/login">Log in</Link> or <Link to="/signup">Sign up</Link></p>
    <p><Link to="/about">About this project</Link></p>
    {/* More marketing down here */}
  </div>
);

export default SplashHome;
