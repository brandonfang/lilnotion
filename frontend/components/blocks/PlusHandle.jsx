import React, { useState } from 'react';

const PlusHandle = (props) => {
  // calculate responsive tooltip position
  const [show, setShow] = useState(false);

  return (
    <div
      onClick={props.plusHandleClick}
      className={props.hover ? 'plus-handle visible' : 'plus-handle'}
      role="button"
      tabIndex="0"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      {/* <div className={show ? 'handle-tooltip visible' : 'handle-tooltip'}>
        <div className="handle-tooltip-text">
          <span>Click</span> to add a block below
        </div>
      </div> */}
    </div>
  );
};

export default PlusHandle;
