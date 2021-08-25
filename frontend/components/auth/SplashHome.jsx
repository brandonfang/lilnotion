import React from 'react';
import NavBarContainer from '../navbar/NavBarContainer';
import { logout } from '../../actions/session-actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SplashHome = (props) => (
  <>
    <NavBarContainer />
    <main className="splash-main">
      <div className="align-center-wrapper">
        <div className="hero-image-wrapper">
          <img src={window.hero} alt="People using Notion" />
        </div>

        <div className="center-text-wrapper">
          <h1 className="hero-title">All-in-one workspace</h1>
          <h2 className="hero-subtitle">One tool for your whole team. Write, plan, and get organized.</h2>
          
          <div className="cta-container">
            <Link to="/login" className="cta cta-login">Log in</Link>
            <Link to="/signup" className="cta cta-signup">Try it now</Link>
          </div>
          
          <p className="caption">Not affiliated with Notion.</p>
        </div>
      </div>

      {/* More marketing here */}
      {/* Footer here */}
    </main>
  </>
);

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashHome);
