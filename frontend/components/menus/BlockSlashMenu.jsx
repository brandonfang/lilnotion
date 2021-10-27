import React, { useState, useEffect } from 'react';
import matchSorter from 'match-sorter';
import { FiImage } from 'react-icons/fi';

const BlockSlashMenu = ({ position }) => {
  const x = position.x;
  const y = position.y;

  const menuData = [
    {
      name: 'Text',
      description: 'Just start writing with plain text.',
      imageUrl: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/text.png',
    },
    {
      name: 'To-do List',
      description: 'Track tasks with a to-do list.',
      imageUrl: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/to-do.png',
    },
    {
      name: 'Heading 1',
      description: 'Big section heading.',
      imageUrl: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/h1.png',
    },
    {
      name: 'Heading 2',
      description: 'Medium section heading.',
      imageUrl: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/h2.png',
    },
    {
      name: 'Heading 3',
      description: 'Small section heading.',
      imageUrl: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/h3.png',
    },
    {
      name: 'Bulleted List',
      description: 'Create a simple bulleted list.',
      imageUrl: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/bulleted-list.png',
    },
    {
      name: 'Quote',
      description: 'Capture a quote.',
      imageUrl: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/quote.png',
    },
    {
      name: 'Divider',
      description: 'Visually divide blocks.',
      imageUrl: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/divider.png',
    },
    {
      name: 'Callout',
      description: 'Make writing stand out.',
      imageUrl: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/callout.png',
    },
    {
      name: 'Image',
      description: 'Upload or embed with a link.',
      imageUrl: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/image.png',
    },
  ];

  return (
    <div className="select-menu-wrapper" style={{ left: x, top: y }}>
      <div className="select-menu">
        <div className="menu-header">Basic blocks</div>
        {menuData.map((item, i) => (
          <div className="select-menu-row" key={i}>
            <div className="block-image">
              {/* <FiImage className="block-image-svg" /> */}
              <img
                className="block-image-inner"
                // src="https://www.notion.so/images/blocks/text.9fdb530b.png"
                src={item.imageUrl}
              />
            </div>
            <div className="block-info">
              <div className="block-name">{item.name}</div>
              <div className="block-description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockSlashMenu;
