import React from 'react';

const BulletedList = (props) => {
  return (
    <div className="ln-bulleted-list">{props.block.properties.title}</div>
  );
}

export default BulletedList;
