import React from 'react';
import ReactDOM from 'react-dom';
import { FiTrash2, FiEdit } from 'react-icons/fi';

export default function OutlinerMenu({ position, deletePage }) {
  const [thing, setThing] = React.useState(null);

  return ReactDOM.createPortal(
    <>
      <div
        className="outliner-action-menu"
        onClick={() => deletePage(page.id)}
        role="button"
        tabIndex="0"
        style={{left: position.x, top: position.y}}
      >
        <div className="outliner-action-menu-row">
          <div className="action-icon">
            <FiTrash2 />
          </div>
          <div className="action-name">Delete</div>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}
