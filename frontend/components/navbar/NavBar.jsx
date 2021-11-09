import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  
  return (
    <header className="header">
      <div className="outer">
        <div className="inner">
          <div className="logo-wrapper">
            <Link to="/">
              <img
                className="logo"
                src="https://lilnotion-dev.s3.us-west-1.amazonaws.com/lilnotion-logo-dark.svg"
                alt="lilNotion logo"
              />
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
                  <a
                    href="https://www.linkedin.com/in/bdmfang"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="item">
                  <a
                    href="https://github.com/brandonfang/lilnotion"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li className="item">
                  <a href="https://bdmfang.com" target="_blank" rel="noopener noreferrer">
                    Portfolio
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
 
export default Navbar;
