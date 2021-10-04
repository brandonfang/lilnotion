import React from 'react';

const Text = (props) => {
  return (
    <p className="ln-text">{props.block.properties.title}</p>
  );
}

export default Text;
