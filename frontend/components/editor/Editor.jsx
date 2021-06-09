import React from 'react';
import SidebarContainer from './SidebarContainer'

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  render() {
    // console.log(this.props);
    // const state = this.state;

    return (
      <div className="lilnotion-editor">
        {/* <SidebarContainer /> */}
        <div className="lilnotion-sidebar">
          <div className="lilnotion-sidebar-switcher">
            <div className="lilnotion-sidebar-switcher-content">
              <div></div>
              <div>Pioneers</div>
              <div></div>
            </div>
          </div>
        </div>
        
        <div className="lilnotion-frame">
          <div className="lilnotion-topbar"></div>

            <div className="temp-container">
              <h1>You are logged in.</h1>
              <p>This is content only authenticated users are supposed to see.</p>
              <h3 tabIndex="0" className="nav-logout" onClick={this.props.logout}><a href="/">Log out</a></h3>

            </div>


        </div>
      </div>
    );
  }
}
 
export default Editor;
