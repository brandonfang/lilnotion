import React from 'react';
import SidebarSwitcherContainer from './SidebarSwitcherContainer';
import SidebarSettings from './SidebarSettings'
// import SidebarItem
// import SidebarBottomActions
// import icons

const Sidebar = ({
  currentUser,
  currentWorkspace,
  currentPage,
  pages,
  logout
}) => {
  return (
    <div className="sidebar">
      <SidebarSwitcherContainer />
      <SidebarSettings />




      

      <div className="sidebar-scroller-vertical">
        <div className="outliner-bookmarks-header">
          <div>Pages</div>
        </div>

        <div className="outliner-bookmarks">

        </div>

        <div className="outliner">
          <div className="page-block">
            Meeting Notes
          </div>
        </div>

        {/* Format a logout button here */}
        <p tabIndex="0" className="sidebar-logout" onClick={logout}><a href="/">Log out</a></p>
      
      </div>

      <div className="sidebar-new-page">
        
      </div>
      {/* Sidebar bottom actions */}
    </div>
  );
};
 
export default Sidebar;
