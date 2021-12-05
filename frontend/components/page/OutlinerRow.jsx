import React, { useState } from 'react';
import {
  FiMoreHorizontal,
  FiTrash2,
  FiEdit,
} from 'react-icons/fi';

const OutlinerRow = (props) => {
  const { x, y } = position;
  const [hover, setHover] = useState(false);


  return (
    <div
      className="outliner-row"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => console.log(props)}
    >
      {/* <div className="select-image-wrapper">
        <img className="select-image" src={item.thumbnail} />
      </div>
      <div className="select-info">
        <div className="select-name">{item.name}</div>
      </div>
      <div className={show ? 'tooltip-wrapper visible' : 'tooltip-wrapper'}>
        <div className="tooltip">
          <img className="tooltip-image" src={item.tooltip} />
          <div className="tooltip-text">{item.description}</div>
        </div>
      </div> */}
    </div>
  );
};

export default OutlinerRow;
