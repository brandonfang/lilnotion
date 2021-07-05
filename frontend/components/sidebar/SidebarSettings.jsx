import React from 'react';
import { FiSearch, FiClock, FiSettings } from 'react-icons/fi';

const SidebarSettings = () => {
  return (
    <div className="sidebar-settings">
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
  );
}

export default SidebarSettings;
