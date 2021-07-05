import React from 'react';
import SidebarSwitcherContainer from './SidebarSwitcherContainer';
import SidebarUtilities from './SidebarUtilities'
import { FiGithub, FiLinkedin, FiTwitter, FiGlobe, FiPlus, FiLogOut } from 'react-icons/fi'
// import SidebarItem
// import SidebarBottomActions
// import icons

const Sidebar = ({
  currentUser,
  currentWorkspace,
  currentPage,
  createPage,
  logout
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <SidebarSwitcherContainer />
        {/* Quick find search */}
        <SidebarUtilities />

        {/* sidebar scroller component */}
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
          {/* <p tabIndex="0" className="sidebar-logout" onClick={logout}><a href="/">Log out</a></p> */}
        
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-credits">
          <div className="credit">
            <FiGithub className="sidebar-icon" />
            <a href="" target="_blank">GitHub</a>
          </div>
          <div className="credit">
            <FiLinkedin className="sidebar-icon" />
            <a href="" target="_blank">LinkedIn</a>
          </div>
          <div className="credit">
            <FiTwitter className="sidebar-icon" />
            <a href="" target="_blank">Twitter</a>
          </div>
          <div className="credit">
            <FiGlobe className="sidebar-icon" />
            <a href="" target="_blank">Portfolio</a>
          </div>
        </div>

        <div className="sidebar-shortcuts">
          <div className="shortcut" onClick={createPage}>
            <FiPlus className="sidebar-icon" size={16} />
             New page
          </div>
          <div className="shortcut" onClick={logout}>
            <FiLogOut className="sidebar-icon" size={16} />
            Log out
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Sidebar;
