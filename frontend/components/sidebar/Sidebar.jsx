import React from 'react';
import { FiSearch, FiClock, FiSettings, FiGithub, FiLinkedin, FiTwitter, FiGlobe, FiPlus, FiLogOut } from 'react-icons/fi'
// import SidebarItem

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
        <div className="sidebar-switcher-wrapper">
          <div className="sidebar-switcher">
            <div className="workspace-icon-wrapper-outer">
              <div className="workspace-icon-wrapper-inner">
                <div className="workspace-icon">
                  <span role="image" aria-label="✨">✨</span>
                </div>
              </div>
            </div>

            <div className="workspace-label-wrapper">
              <div className="workspace-label">
                <div>Acme Inc.</div>
              </div>
              {/* sidebar collapse button*/}
            </div>
          </div>
        </div>

        <div className="sidebar-utilities">
          <div className="sidebar-utility-wrapper">
            <div className="sidebar-utility">
              <div className="sidebar-utility-icon-wrapper">
                <FiSearch />
              </div>
              <div className="sidebar-utility-label">Quick Find</div>
            </div>
          </div>

          <div className="sidebar-utility-wrapper">
            <div className="sidebar-utility">
              <div className="sidebar-utility-icon-wrapper">
                <FiClock />
              </div>
              <div className="sidebar-utility-label">All Updates</div>
            </div>
          </div>

          <div className="sidebar-utility-wrapper">
            <div className="sidebar-utility">
              <div className="sidebar-utility-icon-wrapper">
                <FiSettings />
              </div>
              <div className="sidebar-utility-label">Settings & Members</div>
            </div>
          </div>
        </div>

        {/* sidebar scroller component */}
        <div className="sidebar-scroller-vertical">
          <div className="outliner-bookmarks-header">
            Pages
          </div>

          <div className="outliner-bookmarks">

          </div>

          <div className="outliner">
            <div className="page-block">
              Meeting Notes
            </div>
          </div>
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
