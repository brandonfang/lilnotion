import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  FiChevronsRight,
  FiChevronsLeft,
  FiSearch,
  FiSettings,
  FiGithub,
  FiLinkedin,
  FiGlobe,
  FiPlus,
  FiLogOut,
} from 'react-icons/fi';
import OutlinerRow from './OutlinerRow';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.goToPage = this.goToPage.bind(this);
    this.newPage = this.newPage.bind(this);
    this.deletePage = this.deletePage.bind(this);
    this.state = {
      sidebarClosed: props.sidebarClosed,
      toggleHover: false,
    };
  }

  componentDidMount() {
    // if (!this.state.sidebarClosed) {
    //   const sidebar = this.ref.current;
    //   const editor = document.getElementById('editor');
    //   sidebar.classList.remove('collapsed');
    //   editor.classList.remove('collapsed');
    // }
  }

  // toggleSidebar() {
  //   const sidebar = this.ref.current;
  //   const editor = document.getElementById('editor');
  //   if (this.state.sidebarClosed) {
  //     sidebar.classList.remove('collapsed');
  //     editor.classList.remove('collapsed');
  //     this.setState({ sidebarClosed: false, toggleHover: false });
  //   } else {
  //     sidebar.classList.add('collapsed');
  //     editor.classList.add('collapsed');
  //     this.setState({ sidebarClosed: true, toggleHover: false });
  //   }
  // }

  goToPage(pageId, pageTitle) {
    if (pageTitle === '') pageTitle = 'Untitled';
    this.props.history.push(`/p/${pageId}`);
  }

  async newPage() {
    const { page } = await this.props.createPage({
      userId: this.props.currentUser.id,
      title: '',
      blockIds: [],
      icon: {
        id: 'page_facing_up',
        name: 'Page Facing Up',
        short_names: ['page_facing_up'],
        colons: ':page_facing_up:',
        emoticons: [],
        unified: '1f4c4',
        skin: null,
        native: '📄',
      },
    });

    const { block } = await this.props.createBlock({
      userId: this.props.currentUser.id,
      pageId: page.id,
      blockType: 'paragraph',
      text: '',
    });

    const newPage = Object.assign(page, { blockIds: [block.id] });
    this.props
      .updatePage(newPage)
      .then(() => this.props.history.push(`/p/${page.id}`))
      .then(() => document.getElementById('page-title').focus());
  }

  deletePage(pageId) {
    console.log(pageId)
    // check if deleted page is the current page
    if (this.props.match.params.id === pageId) {
      // if so, redirect to another page
      const pages = this.props.pages;
      const firstPage = pages[Object.keys(pages)[0]];
      const secondPage = pages[Object.keys(pages)[1]];
      if (pageId !== firstPage.id) {
        console.log('redirecting to first page')
        this.props.history.push(`/p/${firstPage.id}`);
      } else {
        console.log('redirecting to second page')
        this.props.history.push(`/p/${secondPage.id}`);
      }
    }
    this.props.deletePage(pageId).then((res) => {
      console.log(res);
    });
    
  }

  render() {
    // console.log('sidebar.jsx render()');
    if (!this.props.pages || Object.keys(this.props.pages).length === 0) return null;

    const { currentUser, pages, deletePage, logout } = this.props;
    const { sidebarClosed, toggleHover } = this.state;
    const toggleIcon = sidebarClosed ? <FiChevronsRight /> : <FiChevronsLeft />;
    const tooltipText = sidebarClosed ? 'Lock sidebar open' : 'Close sidebar';
    let tooltipClassName;
    if (sidebarClosed) {
      tooltipClassName = toggleHover ? 'toggle-tooltip visible right' : 'toggle-tooltip right';
    } else {
      tooltipClassName = toggleHover ? 'toggle-tooltip visible' : 'toggle-tooltip';
    }

    // sort pages by creation timestamp
    const arrayOfPages = Object.values(pages);
    arrayOfPages.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));

    const pagesList = arrayOfPages.map((page, i) => {
      return (
        <OutlinerRow
          key={`${page.id}-${i}`}
          page={page}
          goToPage={this.goToPage}
          deletePage={this.deletePage}
        />
      );
    });

    return (
      // wrap sidebar in <DragDropContext> if dnd needed
      <div ref={this.ref} className="sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-top">
            <div className="sidebar-switcher-wrapper">
              <div className="sidebar-switcher">
                <div className="switcher-outer">
                  <div className="switcher-inner">
                    <div className="switcher-icon">{currentUser.firstName[0].toUpperCase()}</div>
                  </div>
                </div>
                <div className="switcher-label-wrapper">
                  <div className="switcher-label">
                    <div>{currentUser.firstName}'s lilNotion</div>
                  </div>
                  {/* <div
                    className="sidebar-toggle"
                    onClick={this.toggleSidebar}
                    onMouseEnter={() => this.setState({ toggleHover: true })}
                    onMouseLeave={() => this.setState({ toggleHover: false })}
                  >
                    {toggleIcon}
                    <div className={tooltipClassName}>
                      <div className="toggle-tooltip-text">{tooltipText}</div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="sidebar-credits">
              <div className="credit">
                <FiGithub className="sidebar-icon" />
                <a
                  href="https://github.com/brandonfang"
                  className="credit-link"
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
                  className="credit-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="credit">
                <FiGlobe className="sidebar-icon" />
                <a
                  href="https://bdmfang.com"
                  className="credit-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
              </div>
            </div>

            {/* <div className="sidebar-utilities">
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
                    <FiSettings />
                  </div>
                  <div className="sidebar-utility-label">Settings & Members</div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="sidebar-middle">
            <div className="sidebar-scroller">
              <div className="outliner-header">Pages</div>
              <div className="outliner">{pagesList}</div>
            </div>
          </div>

          <div className="sidebar-bottom">
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
      </div>
    );
  }
}

export default withRouter(Sidebar);
