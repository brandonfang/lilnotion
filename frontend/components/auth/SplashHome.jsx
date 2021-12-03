import React from 'react';
import NavBarContainer from '../navbar/NavBarContainer';
import { login } from '../../actions/session-actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import logo from '../../assets/notion-hero-1.png';

const SplashHome = ({ login }) => {
  const loginDemo = () => {
    const demo1 = { email: 'doug@engelbart.com', password: 'password' };
    // add demo2 later
    const demo = Math.random() < 0.5 ? demo1 : demo1;
    login(demo);
  }

  return (
    <>
      <NavBarContainer />
      <main className="splash-main">
        <div className="align-center-wrapper">
          <div className="hero-image-wrapper">
            <img
              src={require("../../assets/notion-hero-1.png")}
              // src={logo}
              alt="People using Notion"
            />
          </div>

          <div className="center-text-wrapper">
            <h1 className="hero-title">All-in-one workspace</h1>
            <h2 className="hero-subtitle">
              One tool for your whole team. Write, plan, and get organized.
            </h2>

            <div className="cta-container">
              <Link to="/login" className="cta cta-login">
                Log in
              </Link>
              <div onClick={loginDemo} className="cta cta-try">
                Try lilNotion now
              </div>
            </div>

            {/* <p className="caption">Not affiliated with Notion.</p> */}
          </div>
        </div>

        {/* More marketing here */}
        {/* Footer here */}
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashHome);
