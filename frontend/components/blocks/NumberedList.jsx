import React from 'react';

const NumberedList = (props) => {
  return (
    <div className="ln-numbered-list">{props.block.properties.title}</div>
  );
}

export default NumberedList;
