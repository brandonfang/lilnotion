import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const publicNavBar = (props) => (
    <header className="header public-header">
      <div className="outer">
        <div className="inner">
          <div className="logo-wrapper">
            <Link to="/">
              <img className="logo" src={window.logo} alt="lilNotion logo" />
            </Link>
          </div>

          <div className="nav-wrapper">
            <nav className="nav">
              <ul className="nav-list">
                <li className="item">
                  <Link to="/login">Log in</Link>
                </li>
                <li className="item">
                  <Link to="/signup">Sign up</Link>
                </li>
              </ul>

              <div className="divider"></div>

              <ul className="nav-list links">
                <li className="item">
                  <a href="https://www.linkedin.com/in/bdmfang" target="_blank">LinkedIn</a>
                </li>
                <li className="item">
                  <a href="https://github.com/brandonfang/lilnotion" target="_blank">GitHub</a>
                </li>
                <li className="item">
                  <a href="https://bdmfang.com" target="_blank">Portfolio</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );

  const privateNavBar = (props) => (
    <header className="header private-header">
      <div className="outer">
        <div className="inner">
          <div className="logo-wrapper">
            <Link to="/">
              <img className="logo" src={window.logo} alt="lilNotion logo" />
            </Link>
          </div>

          <div className="nav-wrapper">
            <nav className="nav">
              <div className="nav-greeting">
                Welcome, {props.currentUser.firstName} {props.currentUser.lastName}!
              </div>

              <div className="divider"></div>

              <ul className="nav-list">
                <li className="item">
                  <div tabIndex="0" className="nav-logout" onClick={props.logout}>Log out</div>
                </li>
              </ul>
              
              <div className="divider"></div>

              <ul className="nav-list links">
                <li className="item">
                  <a href="https://www.linkedin.com/in/bdmfang" target="_blank">LinkedIn</a>
                </li>
                <li className="item links">
                  <a href="https://github.com/brandonfang/lilnotion" target="_blank">GitHub</a>
                </li>
                <li className="item links">
                  <a href="https://bdmfang.com" target="_blank">Portfolio</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );

  return props.currentUser ? privateNavBar(props) : publicNavBar(props);
};
 
export default Navbar;
