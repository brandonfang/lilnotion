import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <div className="sidebar">
        <SidebarSwitcherContainer />
      </div>
    );
  }
}
 
export default Sidebar;
