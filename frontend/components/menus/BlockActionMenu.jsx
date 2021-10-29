import React, { useState, useEffect } from 'react';
import { FiRepeat, FiTrash2 } from 'react-icons/fi';
import { AiOutlineCaretRight } from 'react-icons/ai';

const BlockActionMenu = ({
  position,
  turnInto,
  openSelectMenu,
  closeSelectMenu,
  deleteBlock,
  toggleMouseOverTurnInto,
}) => {
  const { x, y } = position;

  return (
    <div className="action-menu-wrapper" style={{ left: x, top: y }}>
      <div className="action-menu">
        <div className="menu-header">Actions</div>
        {/* filter actions typeahead text input */}
        {/* close select menu if  */}
        <div
          className="action-menu-row"
          onMouseEnter={() => toggleMouseOverTurnInto()}
          onMouseLeave={() => toggleMouseOverTurnInto()}
          role="button"
          tabIndex="0"
        >
          <div className="action-icon">
            <FiRepeat />
          </div>
          <div className="action-name">Turn into</div>
          <div className="cascading-menu-indicator">
            <AiOutlineCaretRight />
          </div>
        </div>

        <div
          className="action-menu-row"
          onClick={() => deleteBlock()}
          onMouseEnter={() => closeSelectMenu()}
          role="button"
          tabIndex="0"
        >
          <div className="action-icon">
            <FiTrash2 />
          </div>
          <div className="action-name">Delete</div>
          <div className="action-command">Del</div>
        </div>
      </div>
    </div>
  );
};

export default BlockActionMenu;
