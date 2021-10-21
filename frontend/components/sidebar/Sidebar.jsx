import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FiSearch, FiClock, FiSettings, FiFileText, FiGithub, FiLinkedin, FiTwitter, FiGlobe, FiPlus, FiLogOut } from 'react-icons/fi';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.newPage = this.newPage.bind(this);
  }

  newPage() {
    // default / placeholder page 
    this.props.createPage({
      userId: this.props.currentUser.id,
      title: 'Untitled'
    }).then((page) => {
      // this.props.history.push(`/p/${page.id}`);
    })
  }

  render() {
    if (!this.props.pages) return null;
    if (Object.keys(this.props.pages).length === 0) return null;

    const { currentUser, pages, logout } = this.props;

    const pagesList = Object.keys(pages).map((pageKey) => {
      const page = pages[pageKey];
      return (
        <div className="outliner-item" key={page.id} onClick={() => this.props.history.push(`/p/${page.id}`)}>
          <div className="page-block">
            <FiFileText className="sidebar-icon" />
            <div className="page-block-title">{page.title}</div>
          </div>
        </div>
      );
    });

    return (
      // wrap sidebar in <DragDropContext> if dnd needed
      <div className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-switcher-wrapper">
            <div className="sidebar-switcher">
              <div className="switcher-outer">
                <div className="switcher-inner">
                  <div className="switcher-icon">
                    <span role="" aria-label="">
                      {currentUser.firstName[0].toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="switcher-label-wrapper">
                <div className="switcher-label">
                  <div>{currentUser.firstName}'s lilNotion</div>
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

            {/* <div className="sidebar-utility-wrapper">
              <div className="sidebar-utility">
                <div className="sidebar-utility-icon-wrapper">
                  <FiClock />
                </div>
                <div className="sidebar-utility-label">All Updates</div>
              </div>
            </div> */}

            {/* <div className="sidebar-utility-wrapper">
              <div className="sidebar-utility">
                <div className="sidebar-utility-icon-wrapper">
                  <FiSettings />
                </div>
                <div className="sidebar-utility-label">Settings & Members</div>
              </div>
            </div> */}
          </div>

          {/* sidebar scroller component */}

          <div className="sidebar-scroller-vertical">
            <div className="outliner-bookmarks-header">Pages</div>
            <div className="outliner">{pagesList}</div>
          </div>
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-credits">
            <div className="credit">
              <FiGithub className="sidebar-icon" />
              <a
                href="https://github.com/brandonfang/lilnotion"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="credit">
              <FiLinkedin className="sidebar-icon" />
              <a
                href="https://www.linkedin.com/in/bdmfang"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="credit">
              <FiGlobe className="sidebar-icon" />
              <a href="https://bdmfang.com" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </div>
            <div className="credit">
              <FiTwitter className="sidebar-icon" />
              <a href="https://twitter.com/bdmfang" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>

          <div className="sidebar-shortcuts">
            <div className="shortcut" onClick={this.newPage}>
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
  }
}
 
export default withRouter(Sidebar);
