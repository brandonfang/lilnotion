import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FiFileText, FiMoreHorizontal, FiTrash2, FiEdit } from 'react-icons/fi';

const OutlinerRow = ({ page, history }) => {
  // const { x, y } = position;
  const [hover, setHover] = useState(false);
  const pageTitle = page.title.length > 0 ? page.title : 'Untitled';

  return (
    <div
      className="outliner-row-wrapper"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => history.push(`/p/${page.id}`)}
    >
      <div className="outliner-row">
        {/* caret to show nested pages */}
        {/* <div className="outliner-caret-wrapper"></div> */}
        <div className="outliner-icon-wrapper">
          <FiFileText className="outliner-icon" />
        </div>
        <div className="outliner-page-title">{pageTitle}</div>
        <div className={hover ? 'outliner-actions visible' : 'outliner-actions'}>
          <svg viewBox="0 0 13 3" className="outliner-actions-icon" fill="currentColor">
            <g>
              <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
              <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
              <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default withRouter(OutlinerRow);
