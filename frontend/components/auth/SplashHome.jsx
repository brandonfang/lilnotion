import React from 'react';
import NavBarContainer from '../navbar/NavBarContainer';
import { login } from '../../actions/session-actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SplashHome = ({ login }) => {
  const loginDemo = () => {
    const demo = { email: 'doug@engelbart.com', password: 'password' };
    login(demo);
  };

  return (
    <>
      <NavBarContainer />
      <div className="splash-bg">
        <main className="splash-main">
          <section className="align-center-wrapper">
            <div className="hero-image-wrapper">
              <img src={window.hero} alt="People using Notion" />
            </div>
            <div className="center-text-wrapper">
              <h1 className="hero-title">All-in-one workspace</h1>
              <h2 className="hero-subtitle">
                One tool for your whole team. Write, plan, and get organized.
              </h2>
              <div className="cta-container">
                <div onClick={loginDemo} className="cta cta-try">
                  Try lilNotion now
                </div>
                <Link to="/login" className="cta cta-login">
                  Log in
                </Link>
              </div>
              <p className="caption">
                lilNotion is a clone of <a href="https://www.notion.so/product" target="_blank" rel="noopener noreferrer">Notion</a> and not affiliated.
              </p>
            </div>
          </section>

          <section className="align-center-wrapper showcase">
            <div className="screenshot-wrapper">
              <img className="screenshot" src={window.wiki} alt="Wiki" />
            </div>
          </section>

          <section className="companies">
            <h2 className="trusted">Trusted by teams at</h2>
            <div className="logos">
              <div className="company-logo">
                <img src={window.squareLogo} alt="Square" />
              </div>
              <div className="company-logo">
                <img src={window.loomLogo} alt="Loom" />
              </div>
              <div className="company-logo">
                <img src={window.pixarLogo} alt="Pixar" />
              </div>
              <div className="company-logo">
                <img src={window.ibmLogo} alt="IBM" />
              </div>
              <div className="company-logo">
                <img src={window.nikeLogo} alt="Nike" />
              </div>
              <div className="company-logo">
                <img src={window.spotifyLogo} alt="Spotify" />
              </div>
              <div className="company-logo">
                <img src={window.slackLogo} alt="Slack" />
              </div>
            </div>
          </section>

          <section className="align-center-wrapper margin-l">
            <h2 className="global-title">Build to empower every team</h2>
            <h3 className="global-subtitle">lilNotion solves problems unique to every function.</h3>
            <div className="persona-grid">
              <div className="persona-grid-item">
                <div className="persona-grid-image">
                  <img src={window.product} alt="Product" />
                </div>
                <h4 className="persona-title">Product</h4>
                <ul className="persona-list">
                  <li>Visualize your product roadmap</li>
                  <li>Write feature specs</li>
                  <li>Cross-functional collaboration</li>
                </ul>
              </div>
              <div className="persona-grid-item">
                <div className="persona-grid-image">
                  <img src={window.engineering} alt="Engineering" />
                </div>
                <h4 className="persona-title">Engineering</h4>
                <ul className="persona-list">
                  <li>Coordinate releases</li>
                  <li>Codify processes</li>
                  <li>Write docs to ship fast</li>
                </ul>
              </div>
              <div className="persona-grid-item">
                <div className="persona-grid-image">
                  <img src={window.hr} alt="HR" />
                </div>
                <h4 className="persona-title">HR</h4>
                <ul className="persona-list">
                  <li>Create a company wiki</li>
                  <li>Answer questions at scale</li>
                  <li>Onboard new employees</li>
                </ul>
              </div>
              <div className="persona-grid-item">
                <div className="persona-grid-image">
                  <img src={window.design} alt="Design" />
                </div>
                <h4 className="persona-title">Design</h4>
                <ul className="persona-list">
                  <li>Track every project</li>
                  <li>Catalog fonts, logos, and assets</li>
                  <li>Publish a design system</li>
                </ul>
              </div>
              <div className="persona-grid-item">
                <div className="persona-grid-image">
                  <img src={window.sales} alt="Sales" />
                </div>
                <h4 className="persona-title">Sales</h4>
                <ul className="persona-list">
                  <li>Build a flexible CRM</li>
                  <li>Organize all meeting notes</li>
                  <li>Share a single playbook</li>
                </ul>
              </div>
              <div className="persona-grid-item">
                <div className="persona-grid-image">
                  <img src={window.marketing} alt="Marketing" />
                </div>
                <h4 className="persona-title">Marketing</h4>
                <ul className="persona-list">
                  <li>Make a style guide</li>
                  <li>Track your content calendar</li>
                  <li>Keep tabs on everything</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="align-center-wrapper">
            <h2 className="global-title">And connect the whole company</h2>
            <h3 className="global-subtitle">No more context switching or silos.</h3>
            <div className="cta-container">
              <Link to="/signup" className="cta cta-try">
                Sign up
              </Link>
              <Link to="/login" className="cta cta-login">
                Log in
              </Link>
            </div>
          </section>
        </main>
      </div>
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
