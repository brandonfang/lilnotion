import React from 'react';
import ContentEditable from 'react-contenteditable';
import debounce from './debounce';

const Heading3 = (props) => {
  return (
    <h3 className="h3">{props.block.properties.title}</h3>
  );
}

export default Heading3;
