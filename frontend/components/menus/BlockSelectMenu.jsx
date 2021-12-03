import React, { useState, useEffect } from 'react';
import SelectMenuRow from './SelectMenuRow';

const BlockSelectMenu = ({
  position,
  closeSelectMenu,
  handleBlockSelect,
  block,
  toggleMouseOverSelectMenu,
}) => {
  const { x, y } = position;

  // const menuData = [
  //   {
  //     name: 'Text',
  //     description: 'Just start writing with plain text.',
  //     blockType: 'paragraph',
  //     thumbnail: '../../assets/blocks/text.png',
  //     tooltip: '../../assets/tooltips/tooltip-text.png',
  //   },
  //   {
  //     name: 'Heading 1',
  //     description: 'Big section heading.',
  //     blockType: 'h1',
  //     thumbnail: '../../assets/blocks/h1.png',
  //     tooltip: '../../assets/tooltips/tooltip-h1.png',
  //   },
  //   {
  //     name: 'Heading 2',
  //     description: 'Medium section heading.',
  //     blockType: 'h2',
  //     thumbnail: '../../assets/blocks/h2.png',
  //     tooltip: '../../assets/tooltips/tooltip-h2.png',
  //   },
  //   {
  //     name: 'Heading 3',
  //     description: 'Small section heading.',
  //     blockType: 'h3',
  //     thumbnail: '../../assets/blocks/h3.png',
  //     tooltip: '../../assets/tooltips/tooltip-h3.png',
  //   },
  //   {
  //     name: 'To-do list',
  //     description: 'Track tasks with a to-do list.',
  //     blockType: 'todo',
  //     thumbnail: '../../assets/blocks/to-do.png',
  //     tooltip: '../../assets/tooltips/tooltip-to-do.png',
  //   },
  //   {
  //     name: 'Bulleted list',
  //     description: 'Create a simple bulleted list.',
  //     blockType: 'bulletedList',
  //     thumbnail: '../../assets/blocks/bulleted-list.png',
  //     tooltip: '../../assets/tooltips/tooltip-bulleted-list.png',
  //   },
  //   {
  //     name: 'Numbered list',
  //     description: 'Create a list with numbering.',
  //     blockType: 'numberedList',
  //     thumbnail: '../../assets/blocks/numbered-list.png',
  //     tooltip: '../../assets/tooltips/tooltip-numbered-list.png',
  //   },
  //   {
  //     name: 'Toggle list',
  //     description: 'Toggles can hide and show content inside.',
  //     blockType: 'toggle',
  //     thumbnail: '../../assets/blocks/toggle.png',
  //     tooltip: '../../assets/tooltips/tooltip-toggle.png',
  //   },
  //   {
  //     name: 'Code',
  //     description: 'Capture a code snippet.',
  //     blockType: 'code',
  //     thumbnail: '../../assets/blocks/code.png',
  //     tooltip: '../../assets/tooltips/tooltip-code.png',
  //   },
  //   {
  //     name: 'Quote',
  //     description: 'Capture a quote.',
  //     blockType: 'quote',
  //     thumbnail: '../../assets/blocks/quote.png',
  //     tooltip: '../../assets/tooltips/tooltip-quote.png',
  //   },
  //   {
  //     name: 'Callout',
  //     description: 'Make writing stand out.',
  //     blockType: 'callout',
  //     thumbnail: '../../assets/blocks/callout.png',
  //     tooltip: '../../assets/tooltips/tooltip-callout.png',
  //   },
  //   {
  //     name: 'Divider',
  //     description: 'Visually divide blocks.',
  //     blockType: 'divider',
  //     thumbnail: '../../assets/blocks/divider.png',
  //     tooltip: '../../assets/tooltips/tooltip-divider.png',
  //   },
  //   {
  //     name: 'Image',
  //     description: 'Upload or embed with a link.',
  //     blockType: 'image',
  //     thumbnail: '../../assets/blocks/link.png',
  //     tooltip: '../../assets/tooltips/tooltip-link.png',
  //   },
  // ];

  const menuData = [
    {
      name: 'Text',
      description: 'Just start writing with plain text.',
      blockType: 'paragraph',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/text.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-text.png',
    },
    {
      name: 'Heading 1',
      description: 'Big section heading.',
      blockType: 'h1',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/h1.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-h1.png',
    },
    {
      name: 'Heading 2',
      description: 'Medium section heading.',
      blockType: 'h2',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/h2.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-h3.png',
    },
    {
      name: 'Heading 3',
      description: 'Small section heading.',
      blockType: 'h3',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/h3.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-h3.png',
    },
    {
      name: 'To-do list',
      description: 'Track tasks with a to-do list.',
      blockType: 'todo',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/to-do.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-to-do.png',
    },
    {
      name: 'Bulleted list',
      description: 'Create a simple bulleted list.',
      blockType: 'bulletedList',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/bulleted-list.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-bulleted-list.png',
    },
    {
      name: 'Numbered list',
      description: 'Create a list with numbering.',
      blockType: 'numberedList',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/numbered-list.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-numbered-list.png',
    },
    {
      name: 'Toggle list',
      description: 'Toggles can hide and show content inside.',
      blockType: 'toggle',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/toggle.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-toggle.png',
    },
    {
      name: 'Code',
      description: 'Capture a code snippet.',
      blockType: 'code',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/code.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-code.png',
    },
    {
      name: 'Quote',
      description: 'Capture a quote.',
      blockType: 'quote',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/quote.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-quote.png',
    },
    {
      name: 'Callout',
      description: 'Make writing stand out.',
      blockType: 'callout',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/callout.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-callout.png',
    },
    {
      name: 'Divider',
      description: 'Visually divide blocks.',
      blockType: 'divider',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/divider.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-divider.png',
    },
    {
      name: 'Image',
      description: 'Upload or embed with a link.',
      blockType: 'image',
      thumbnail: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/image.png',
      tooltip: 'https://lilnotion-dev.s3.us-west-1.amazonaws.com/tooltip-image.png',
    },
  ];

  return (
    <div
      className="select-menu-wrapper"
      style={{ left: x, top: y }}
      // onMouseEnter={() => toggleMouseOverSelectMenu()}
      // onMouseLeave={() => toggleMouseOverSelectMenu()}
    >
      <div className="select-menu">
        {menuData.map((item, i) => (
          <SelectMenuRow
            key={i}
            item={item}
            position={position}
            handleBlockSelect={handleBlockSelect}
            block={block}
          />
        ))}
      </div>
    </div>
  );
};

export default BlockSelectMenu;
