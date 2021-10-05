import React from 'react';

const NumberedList = (props) => {
  return (
    <div className="numbered-list">{props.block.properties.title}</div>
  );
}

export default NumberedList;
