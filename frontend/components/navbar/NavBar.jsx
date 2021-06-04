import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => (
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
                <Link to="/">Product</Link>
              </li>
              <li className="item">
                <Link to="/about">About</Link>
              </li>
              <li className="item">
                <Link to="#">LinkedIn</Link>
              </li>
              <li className="item">
                <Link to="#">GitHub</Link>
              </li>
            </ul>

            <div className="divider"></div>

            {/* Need to add GreetingContainer to this component */}

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
 
export default Navbar;
