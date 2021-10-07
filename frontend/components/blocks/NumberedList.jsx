import React from 'react';
import ContentEditable from 'react-contenteditable';
import debounce from './debounce';

const NumberedList = (props) => {
  return (
    <div className="numbered-list">{props.block.properties.title}</div>
  );
}

export default NumberedList;
