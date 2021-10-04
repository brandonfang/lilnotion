import React from 'react';

const Quote = (props) => {
  return (
    <div className="ln-quote">{props.block.properties.title}</div>
  );
}

export default Quote;
