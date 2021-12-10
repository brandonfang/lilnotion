import React, { useState } from 'react';

const SlashMenuRow = ({ item, handleBlockSelect, block }) => {
  // calculate responsive tooltip position
  const { tooltipX, tooltipY } = position;
  const [show, setShow] = useState(false);

  return (
    <div
      className="slash-menu-row"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => handleBlockSelect(item.blockType, block)}
    >
      <div className="block-type-image-wrapper">
        <img className="block-type-image" src={item.thumbnail} />
      </div>
      <div className="block-type-info">
        <div className="block-type-name">{item.name}</div>
        <div className="block-type-description">{item.description}</div>
      </div>
      <div className={show ? 'tooltip-wrapper visible slash' : 'tooltip-wrapper slash'}>
        <div className="tooltip">
          <img className="tooltip-image" src={item.tooltip} />
          <div className="tooltip-text">{item.description}</div>
        </div>
      </div>
    </div>
  );
};

export default SlashMenuRow;
