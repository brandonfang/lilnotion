import React from 'react';
import NavBarContainer from '../navbar/NavBarContainer';
// import GreetingContainer from '../greeting/GreetingContainer';
import { Link } from 'react-router-dom';

const SplashAbout = () => (   
  <>
    <NavBarContainer />
    <main className="splash-main">
      <div className="align-center-wrap">
        <img src={window.hero} alt="People using Notion" />
        <div className="center-text-wrap">
          <h2>About This Project</h2>
          <p>lilNotion is not formally affiliated with Notion.</p>
          <p><Link to="/login">Log in</Link> or <Link to="/signup">Sign up</Link></p>
        </div>
      </div>

      {/* Footer here */}
    </main>
  </>
);

export default SplashAbout;
