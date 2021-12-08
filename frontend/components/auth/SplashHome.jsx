import React from 'react';
import NavBarContainer from '../navbar/NavBarContainer';
import { login } from '../../actions/session-actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SplashHome = ({ login }) => {
  const loginDemo = () => {
    const demo1 = { email: 'doug@engelbart.com', password: 'password' };
    // add demo2 later
    const demo = Math.random() < 0.5 ? demo1 : demo1;
    login(demo);
  };

  return (
    <>
      <NavBarContainer />
      <main className="splash-main">
        <div className="align-center-wrapper">
          <div className="hero-image-wrapper">
            <img src={window.hero} alt="People using Notion" />
          </div>

          <div className="center-text-wrapper">
            <h1 className="hero-title">All-in-one workspace</h1>
            <h2 className="hero-subtitle">
              One tool for your whole team. Write, plan, and get organized.
            </h2>

            <div className="cta-container">
              {/* <Link to="/login" className="cta cta-login">
                Log in
              </Link> */}
              <div onClick={loginDemo} className="cta cta-try">
                Try lilNotion now
              </div>
            </div>
          </div>
        </div>
        
        <div className="align-center-wrapper"> {/* margin vertical 80px */}
          <h2>Build to empower every team</h2>
          <h3>lilNotion solves problems unique to every function.</h3>
          <div className="persona-grid"> {/* margin vertical 40px */}
              <div className="persona-grid-item">
                <div className="persona-grid-image"><img src={window.product} alt="product" /></div>
                <h4 className="persona-title">Product</h4>
                <ul className="persona-list">
                  <li>Visualize your product roadmap</li>
                  <li>Write feature specs</li>
                  <li>Cross-functional collaboration</li>
                </ul>
              </div>
              <div className="persona-grid-item">
                <div className="persona-grid-image"><img src={window.engineering} alt="engineering" /></div>
                <h4 className="persona-title">Engineering</h4>
                <ul className="persona-list">
                  <li>Coordinate releases</li>
                  <li>Codify processes</li>
                  <li>Write docs to ship fast</li>
                </ul>
              </div>
              <div className="persona-grid-item">
                <div className="persona-grid-image"><img src={window.hr} alt="hr" /></div>
                <h4 className="persona-title">HR</h4>
                <ul className="persona-list">
                  <li>Create a company wiki</li>
                  <li>Answer questions at scale</li>
                  <li>Onboard new employees</li>
                </ul>
              </div>
              <div className="persona-grid-item">
                <div className="persona-grid-image"><img src={window.design} alt="design" /></div>
                <h4 className="persona-title">Design</h4>
                <ul className="persona-list">
                  <li>Track every project</li>
                  <li>Catalog fonts, logos, and assets</li>
                  <li>Publish a design system</li>
                </ul>
              </div>
              <div className="persona-grid-item">
                <div className="persona-grid-image"><img src={window.sales} alt="sales" /></div>
                <h4 className="persona-title">Sales</h4>
                <ul className="persona-list">
                  <li>Build a flexible CRM</li>
                  <li>Organize all meeting notes</li>
                  <li>Share a single playbook</li>
                </ul>
              </div>
              <div className="persona-grid-item">
                <div className="persona-grid-image"><img src={window.marketing} alt="marketing" /></div>
                <h4 className="persona-title">Marketing</h4>
                <ul className="persona-list">
                  <li>Make a style guide</li>
                  <li>Track your content calendar</li>
                  <li>Keep tabs on everything</li>
                </ul>
              </div>
          </div>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashHome);
