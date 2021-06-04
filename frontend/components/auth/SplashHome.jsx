import React from 'react';
import NavBarContainer from '../navbar/NavBarContainer';
import { Link } from 'react-router-dom';

const SplashHome = () => (
  <>
    <NavBarContainer />
    <main className="splash-main">
      <div className="align-center-wrapper">
        <div className="image-wrapper">
          <img src={window.hero} alt="People using Notion" />
        </div>

        <div className="center-text-wrapper">
          <h1 className="hero-title">All-in-one workspace</h1>
          <h2 className="hero-subtitle">One tool for your whole team. Write, plan, and get organized.</h2>
          <p><Link to="/login">Log in</Link> or <Link to="/signup">Sign up</Link></p>
        </div>
      </div>

      {/* More marketing here */}
      {/* Footer here */}
    </main>
  </>
);

export default SplashHome;
