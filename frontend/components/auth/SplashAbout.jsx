import React from 'react';
import NavBarContainer from '../navbar/NavBarContainer';
import { Link } from 'react-router-dom';

const SplashAbout = () => (   
  <>
    <NavBarContainer />
    <main className="splash-main">
      <div className="align-center-wrapper">
        {/* <div className="image-wrapper">
          <img src={window.hero} alt="People using Notion" />
        </div> */}

        <div className="center-text-wrapper">
          <h2>About This Project</h2>
          <p>lilNotion is not formally affiliated with Notion.</p>
          <p><Link to="/login">Log in</Link> or <Link to="/signup">Sign up</Link></p>
        </div>
      </div>

      {/* More marketing here */}
      {/* Footer here */}
    </main>
  </>
);

export default SplashAbout;
