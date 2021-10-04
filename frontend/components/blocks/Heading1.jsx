import React from 'react';

const Heading1 = (props) => {
  return (
    <h1 className="ln-h1">{props.block.properties.title}</h1>
  );
}

export default Heading1;
