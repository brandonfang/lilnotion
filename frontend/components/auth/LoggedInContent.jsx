import React from 'react';
import NavBarContainer from '../navbar/NavBarContainer';

class LoggedInContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {    
    return (
      <>
        <NavBarContainer />

        <div className="user-content-wrapper">
          <h1>You are logged in.</h1>
          <p>This is content only authenticated users are supposed to see.</p>
          <p></p>
        </div>
      </>
    );
  }
}

export default LoggedInContent;
