import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const publicNavBar = () => (
    <header className="header">
      <div className="outer">
        <div className="inner">
          <div className="logo-wrapper">
            <Link to="/">
              <img className="logo" src={window.logo} alt="lilNotion logo" />
            </Link>
          </div>

          <div className="desktop-actions">
            <nav className="nav">
              <ul className="nav-list">
                <li className="item">
                  <Link to="/about">About</Link>
                </li>
                <li className="item">
                  <a href="" target="_blank">LinkedIn</a>
                </li>
                <li className="item">
                  <a href="" target="_blank">GitHub</a>
                </li>
              </ul>

              <div className="divider"></div>

              <ul className="nav-list">
                <li className="item">
                  <Link to="/login">Log in</Link>
                </li>
                <li className="item">
                  <Link to="/signup">Sign up</Link>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* <div className="mobile-actions"></div> */}
        </div>
      </div>
    </header>
  );

  const privateNavBar = () => (
    <header className="header">
      <div className="outer">
        <div className="inner">
          <div className="logo-wrapper">
            <Link to="/">
              <img className="logo" src={window.logo} alt="lilNotion logo" />
            </Link>
          </div>

          <div className="desktop-actions">
            <nav className="nav">
              <ul className="nav-list">
                <li className="item">
                  <Link to="/">Home</Link>
                </li>
                <li className="item">
                  Welcome, {props.currentUser.first_name} {props.currentUser.last_name}
                </li>
              </ul>

              <div className="divider"></div>

              <ul className="nav-list">
                <li className="item">
                  {/* <Link to="/logout">Log out</Link> */}
                  <button onClick={props.logout}>Log out</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );

  return props.currentUser ? privateNavBar() : publicNavBar();
};
 
export default Navbar;
