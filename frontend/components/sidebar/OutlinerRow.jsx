import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import OutlinerMenu from './OutlinerMenu';
import { Emoji } from 'emoji-mart';

// FiMoreHorizonal for more button
// FiTrash2 for deleting page
// FiEdit for renaming page

const OutlinerRow = ({ page, goToPage, deletePage }) => {
  const [hover, setHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({x: null, y: null});
  const pageTitle = page.title.length > 0 ? page.title : 'Untitled';

  // const calculateMenuPosition = (e) => {
  // }

  const openMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(true);
    setMenuPosition({x: e.clientX, y: e.clientY});
  }

  return (
    <div
      className="outliner-row-wrapper"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => goToPage(page.id, page.title)}
    >
      <div className="outliner-row">
        {/* caret to show nested pages */}
        {/* <div className="outliner-caret-wrapper"></div> */}
        <div className="outliner-icon-wrapper">
          <Emoji size={18} emoji={page.icon.id} className="outliner-icon" />
        </div>
        <div className="outliner-page-title">{pageTitle}</div>
        <div className={hover ? 'outliner-actions visible' : 'outliner-actions'} onClick={openMenu}>
          <svg viewBox="0 0 13 3" className="outliner-actions-icon" fill="currentColor">
            <g>
              <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
              <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
              <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
            </g>
          </svg>
        </div>
      </div>
      {menuOpen ? <OutlinerMenu deletePage={deletePage} position={menuPosition} /> : null}
    </div>
  );
};

export default withRouter(OutlinerRow);
