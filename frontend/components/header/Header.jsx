import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <header>
    <nav>
      <Link to="/">
        <img src={window.logo} alt="lilNotion logo" />
      </Link>
      <nav className="">
        <Link to="/">Home</Link>
        <Link to="/">Product</Link>
        <Link to="/">About</Link>
      </nav>
    </nav>
  </header>
)
 
export default Header;
