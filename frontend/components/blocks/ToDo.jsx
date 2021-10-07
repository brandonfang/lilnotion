import React from 'react';
import ContentEditable from 'react-contenteditable';
import debounce from './debounce';

const ToDo = (props) => {
  return (
    // add checkbox and state
    <div className="todo">{props.block.properties.title}</div>
  );
}

export default ToDo;
