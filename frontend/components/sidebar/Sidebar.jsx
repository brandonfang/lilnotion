import React from 'react';
import SidebarSwitcherContainer from './SidebarSwitcherContainer';
import SidebarSettings from './SidebarSettings'
import { FiPlus, FiLogOut } from 'react-icons/fi'
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
      <div className="sidebar-top">
        <SidebarSwitcherContainer />
        {/* Quick find search */}
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
          {/* <p tabIndex="0" className="sidebar-logout" onClick={logout}><a href="/">Log out</a></p> */}
        
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-credits">
          <div className="credits">
            <a href="" target="_blank">GitHub</a>
          </div>
          <div className="credits">
            <a href="" target="_blank">LinkedIn</a>
          </div>
          <div className="credits">
            <a href="" target="_blank">Twitter</a>
          </div>
          <div className="credits">
            Made by <a href="" target="_blank">Brandon Fang</a>
          </div>
        </div>

        <div className="sidebar-shortcuts">
          <div className="shortcut">
            <FiPlus />
             New page
          </div>
          <div className="shortcut">
            <FiLogOut />
            Log out
          </div>
          {/* add a new page */}
          {/* logout */}
        </div>
      </div>
    </div>
  );
};
 
export default Sidebar;
