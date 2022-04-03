import React from 'react'
import { withRouter, useParams, useHistory } from 'react-router-dom'
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
import * as Tooltip from '@radix-ui/react-tooltip'

function Sidebar({
  currentUser,
  logout,
  createPage,
  updatePage,
  deletePage,
  createBlock,
  isSidebarOpen,
  toggleSidebar,
  pages,
}) {
  const history = useHistory()
  const { id } = useParams()

  const goToPage = (pageId, pageTitle) => {
    if (pageTitle === '') pageTitle = 'Untitled'
    history.push(`/p/${pageId}`)
  }

  const newPage = async () => {
    const { page } = await createPage({
      userId: currentUser.id,
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

    const { block } = await createBlock({
      userId: currentUser.id,
      pageId: page.id,
      blockType: 'paragraph',
      text: '',
    })

    const newPage = Object.assign(page, { blockIds: [block.id] })
    updatePage(newPage)
      .then(() => history.push(`/p/${page.id}`))
      .then(() => document.getElementById('page-title').focus())
  }

  const handleDeletePage = (pageId) => {
    if (pageId === id) {
      deletePage(pageId).then(() => {
        const firstPage = pages[Object.keys(pages)[0]]
        history.push(`/p/${firstPage.id}`)
      })
    } else {
      deletePage(pageId)
    }
  }

  const arrayOfPages = Object.values(pages)
  arrayOfPages.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
  const pagesList = arrayOfPages.map((page, i) => {
    return (
      <OutlinerRow
        key={`${page.id}-${i}`}
        page={page}
        goToPage={goToPage}
        deletePage={handleDeletePage}
      />
    )
  })

  const isDataValid = pages && Object.keys(pages).length !== 0

  return isDataValid ? (
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
              {/* <Tooltip.Provider
                className="switcher-label-wrapper"
                delayDuration={100}
                skipDelayDuration={100}
              > */}
                <Tooltip.Root>
                  <div className="switcher-label">
                    <div>{currentUser.firstName}'s lilNotion</div>
                  </div>

                  <Tooltip.Trigger className="sidebar-toggle" onClick={toggleSidebar}>
                    <FiChevronsLeft />
                  </Tooltip.Trigger>
                  <Tooltip.Content>
                    <div className="toggle-tooltip visible right">
                      <div className="toggle-tooltip-text">Close sidebar</div>
                    </div>
                  </Tooltip.Content>
                </Tooltip.Root>
              {/* </Tooltip.Provider> */}
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
            <div className="shortcut" onClick={newPage}>
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
  ) : null
}

export default withRouter(Sidebar)
