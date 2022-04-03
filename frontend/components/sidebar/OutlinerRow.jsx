import React, { useState } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { Emoji } from 'emoji-mart'
import { FiTrash2 } from 'react-icons/fi'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Tooltip from '@radix-ui/react-tooltip'

function OutlinerRow({ page, goToPage, handleDeletePage }) {
  const [hover, setHover] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const { id } = useParams()
  const pageId = page.id
  const isActive = pageId === id
  const pageTitle = page.title.length > 0 ? page.title : 'Untitled'

  return (
    <div
      className={isActive ? 'outliner-row-wrapper active' : 'outliner-row-wrapper'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => goToPage(page.id, page.title)}
    >
      <DropdownMenu.Root>
        <div className="outliner-row">
          {/* caret to show nested pages */}
          {/* <div className="outliner-caret-wrapper"></div> */}
          <div className="outliner-icon-wrapper">
            <Emoji size={18} emoji={page.icon.id} set="apple" className="outliner-icon" />
          </div>

          <div className="outliner-page-title">{pageTitle}</div>

          <DropdownMenu.Trigger>
            <div
              className={hover ? 'outliner-actions visible' : 'outliner-actions'}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <svg viewBox="0 0 13 3" className="outliner-actions-icon" fill="currentColor">
                <g>
                  <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
                  <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
                  <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
                </g>
              </svg>
            </div>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content side="right" className="outliner-action-menu">
            <DropdownMenu.Item
              className="outliner-action-menu-row"
              onSelect={() => handleDeletePage(pageId)}
            >
              <div className="action-icon">
                <FiTrash2 />
              </div>
              <div className="action-name">Delete</div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </div>
      </DropdownMenu.Root>
    </div>
  )
}

export default withRouter(OutlinerRow)
