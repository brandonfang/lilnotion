import React from 'react';

const ToDo = (props) => {
  return (
    // add checkbox and state
    <div className="ln-todo">{props.block.properties.title}</div>
  );
}

export default ToDo;
