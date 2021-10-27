import React, { useState } from 'react';

const SelectMenuRow = ({ item, position }) => {
  const { x, y } = position;
  // calculate responsive tooltip position
  const [show, setShow] = useState(false);

  return (
    <div
      className="select-menu-row"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="select-image-wrapper">
        <img className="select-image" src={item.thumbnail} />
      </div>
      <div className="select-info">
        <div className="select-name">{item.name}</div>
      </div>
      <div
        className={show ? 'tooltip-wrapper visible' : 'tooltip-wrapper'}
        // style={{ left: x, top: y }}
      >
        <div className="tooltip">
          <img className="tooltip-image" src={item.tooltip} />
          <div className="tooltip-text">{item.description}</div>
        </div>
      </div>
    </div>
  );
};

export default SelectMenuRow;
