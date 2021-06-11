import React from 'react';

class SidebarSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
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
              <div>Workspace Name</div>
            </div>
            <div className="workspace-switch-icon-wrapper">
              {/* <div className="workspace-switch-icon"> */}
                <svg viewBox="-1 -1 9 11" className="workspace-switch-icon">
                  <path id="path0_stroke" d="M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"></path>
                </svg>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default SidebarSwitcher;
