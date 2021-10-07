import React from 'react';
import ContentEditable from 'react-contenteditable';
import debounce from './debounce';

const Heading2 = (props) => {
  return (
    <h2 className="h2">{props.block.properties.title}</h2>
  );
}

export default Heading2;
