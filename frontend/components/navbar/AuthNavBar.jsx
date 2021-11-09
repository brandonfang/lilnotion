import React from 'react';
import { Link } from 'react-router-dom';

const AuthNavbar = (props) => {
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
        </div>
      </div>
    </header>
  );
};
 
export default AuthNavbar;
