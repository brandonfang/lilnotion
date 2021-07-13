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
          <p>lilNotion is clone of <a href="https://www.notion.so/" target="_blank">Notion</a>.</p>
          
          <div className="cta-container">
            <Link to="/signup" className="cta cta-signup">Try it now</Link>
          </div>
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
