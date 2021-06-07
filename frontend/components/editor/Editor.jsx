import React from 'react';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    const state = this.state;

    return (
      <>
        <div className="user-content-wrapper">
          <h1>You are logged in.</h1>
          <p>This is content only authenticated users are supposed to see.</p>
          <h3 tabIndex="0" className="nav-logout" onClick={this.props.logout}><a href="/">Log out</a></h3>
        </div>
      </>
    );
  }
}
 
export default Editor;
