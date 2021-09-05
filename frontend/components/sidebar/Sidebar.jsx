import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FiSearch, FiClock, FiSettings, FiFileText, FiGithub, FiLinkedin, FiTwitter, FiGlobe, FiPlus, FiLogOut } from 'react-icons/fi';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // bind quick find
    this.newPage = this.newPage.bind(this);
  }

  componentDidMount() {
    // this.props.fetchPages(this.props.currentUser.id);
  }

  newPage() {
    this.props.createPage().then((page) => {
      this.props.history.push(`/p/${page.id}`);
    })
  }

  render() {
    if (!this.props.pages) { 
      return null; 
    } 

    const { currentUser, pages } = this.props;
    const pagesList = Object.keys(pages).map((pageKey) => {
      const page = pages[pageKey];
      return (
        <div className="outliner-item" key={page.id} onClick={() => this.props.history.push(`/p/${page.id}`)}>
          <div className="page-block">
            <FiFileText className="sidebar-icon" />
            {page.properties.title}
          </div>
        </div>
      );
    });

    return (
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
            <div className="outliner">
              {pagesList}
            </div>
          </div>
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-credits">
            <div className="credit">
              <FiGithub className="sidebar-icon" />
              <a href="" target="_blank">
                GitHub
              </a>
            </div>
            <div className="credit">
              <FiLinkedin className="sidebar-icon" />
              <a href="" target="_blank">
                LinkedIn
              </a>
            </div>
            <div className="credit">
              <FiTwitter className="sidebar-icon" />
              <a href="" target="_blank">
                Twitter
              </a>
            </div>
            <div className="credit">
              <FiGlobe className="sidebar-icon" />
              <a href="" target="_blank">
                Portfolio
              </a>
            </div>
          </div>

          <div className="sidebar-shortcuts">
            <div className="shortcut" onClick={this.newPage}>
              <FiPlus className="sidebar-icon" size={16} />
              New page
            </div>
            <div className="shortcut" onClick={this.props.logout}>
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
