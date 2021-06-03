import React from 'react';
// import GreetingContainer from '../greeting/GreetingContainer';
import { Link } from 'react-router-dom';

const SplashAbout = () => (
  <div>
    <nav>
      <img src={window.logo} alt="lilNotion logo" />
      {/* <GreetingContainer /> */}
    </nav>
    <h1>About This Project</h1>
    <p>lilNotion is not formally affiliated with Notion in any way.</p>
    <p><Link to="/login">Log in</Link> or <Link to="/signup">Sign up</Link></p>
    
    {/* More marketing down here */}
  </div>
);

export default SplashAbout;
