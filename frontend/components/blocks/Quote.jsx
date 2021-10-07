import React from 'react';
import ContentEditable from 'react-contenteditable';
import debounce from './debounce';

const Quote = (props) => {
  return (
    <div className="quote">{props.block.properties.title}</div>
  );
}

export default Quote;
