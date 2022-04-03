import React from 'react'
import { withRouter } from 'react-router-dom'
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
} from 'react-icons/fi'
import OutlinerRow from './OutlinerRow'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.goToPage = this.goToPage.bind(this)
    this.newPage = this.newPage.bind(this)
    this.deletePage = this.deletePage.bind(this)
    this.state = {
      toggleHover: false,
    }
  }

  goToPage(pageId, pageTitle) {
    if (pageTitle === '') pageTitle = 'Untitled'
    this.props.history.push(`/p/${pageId}`)
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
    })

    const { block } = await this.props.createBlock({
      userId: this.props.currentUser.id,
      pageId: page.id,
      blockType: 'paragraph',
      text: '',
    })

    const newPage = Object.assign(page, { blockIds: [block.id] })
    this.props
      .updatePage(newPage)
      .then(() => this.props.history.push(`/p/${page.id}`))
      .then(() => document.getElementById('page-title').focus())
  }

  deletePage(pageId) {
    // write deleteCurrentPage() and deleteOtherPage(pageId);
    this.props.deletePage(pageId)
  }

  render() {
    console.log('sidebar.jsx render()');
    if (!this.props.pages || Object.keys(this.props.pages).length === 0) return null

    const { currentUser, pages, deletePage, logout, isSidebarOpen, toggleSidebar } = this.props
    const { toggleHover } = this.state
    const toggleIcon = isSidebarOpen ? <FiChevronsLeft /> : <FiChevronsRight />
    const tooltipText = isSidebarOpen ? 'Close sidebar' : 'Lock sidebar open'
    let tooltipClassName
    if (isSidebarOpen) {
      tooltipClassName = toggleHover ? 'toggle-tooltip visible right' : 'toggle-tooltip right'
    } else {
      tooltipClassName = toggleHover ? 'toggle-tooltip visible' : 'toggle-tooltip'
    }

    const arrayOfPages = Object.values(pages)
    arrayOfPages.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))

    const pagesList = arrayOfPages.map((page, i) => {
      return (
        <OutlinerRow
          key={`${page.id}-${i}`}
          page={page}
          goToPage={this.goToPage}
          deletePage={this.deletePage}
        />
      )
    })

    return (
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
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
                  <div
                    className="sidebar-toggle"
                    onClick={toggleSidebar}
                    onMouseEnter={() => this.setState({ toggleHover: true })}
                    onMouseLeave={() => this.setState({ toggleHover: false })}
                  >
                    {toggleIcon}
                    <div className={tooltipClassName}>
                      <div className="toggle-tooltip-text">{tooltipText}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-credits">
              <div className="sidebar-section-header">About</div>
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
              <div className="sidebar-section-header">Pages</div>
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
    )
  }
}

export default withRouter(Sidebar)
