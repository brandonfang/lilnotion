import React, { useState } from 'react';

const DragHandle = (props) => {
  // calculate responsive tooltip position
  const [show, setShow] = useState(false);

  return (
    <div
      onClick={() => setShow(false)}
      onClick={props.dragHandleClick}
      {...props.dragHandleProps}
      className={props.hover ? 'drag-handle visible' : 'drag-handle'}
      role="button"
      tabIndex="0"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="18"
        viewBox="0 0 18 24"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="6" cy="6" r="0.5"></circle>
        <circle cx="6" cy="12" r="0.5"></circle>
        <circle cx="6" cy="18" r="0.5"></circle>
        <circle cx="12" cy="6" r="0.5"></circle>
        <circle cx="12" cy="12" r="0.5"></circle>
        <circle cx="12" cy="18" r="0.5"></circle>
      </svg>
      {/* <div className={show ? 'handle-tooltip visible' : 'handle-tooltip'}>
        <div className="handle-tooltip-text">
          <span>Drag</span> to move
          <br />
          <span>Click</span> to open menu
        </div>
      </div> */}
    </div>
  );
};

export default DragHandle;
