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

          <div className="desktop-actions">
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

              <ul className="nav-list">
                <li className="item">
                  <a href="" target="_blank">GitHub</a>
                </li>
                <li className="item">
                  <a href="" target="_blank">Twitter</a>
                </li>
                <li className="item">
                  <a href="" target="_blank">LinkedIn</a>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* <div className="mobile-actions"></div> */}
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

          <div className="desktop-actions">
            <nav className="nav">
              <ul className="nav-list">
                <li className="item">
                  <div tabIndex="0" className="nav-logout" onClick={props.logout}>Log out</div>
                </li>
              </ul>
              
              <div className="divider"></div>


              <ul className="nav-list">
                <li className="item">
                  <a href="" target="_blank">GitHub</a>
                </li>
                <li className="item">
                  <a href="" target="_blank">Twitter</a>
                </li>
                <li className="item">
                  <a href="" target="_blank">LinkedIn</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );

  console.log(props);

  return props.currentUser ? privateNavBar(props) : publicNavBar(props);
};
 
export default Navbar;
