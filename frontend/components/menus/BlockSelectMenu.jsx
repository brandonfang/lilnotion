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

  const menuData = [
    {
      name: 'Text',
      description: 'Just start writing with plain text.',
      blockType: 'paragraph',
      thumbnail: window.text,
      tooltip: window.textTooltip,
    },
    {
      name: 'Heading 1',
      description: 'Big section heading.',
      blockType: 'h1',
      thumbnail: window.h1,
      tooltip: window.h1Tooltip,
    },
    {
      name: 'Heading 2',
      description: 'Medium section heading.',
      blockType: 'h2',
      thumbnail: window.h2,
      tooltip: window.h2Tooltip,
    },
    {
      name: 'Heading 3',
      description: 'Small section heading.',
      blockType: 'h3',
      thumbnail: window.h3,
      tooltip: window.h3Tooltip,
    },
    {
      name: 'To-do list',
      description: 'Track tasks with a to-do list.',
      blockType: 'todo',
      thumbnail: window.toDo,
      tooltip: window.toDoTooltip,
    },
    {
      name: 'Bulleted list',
      description: 'Create a simple bulleted list.',
      blockType: 'bulletedList',
      thumbnail: window.bulletedList,
      tooltip: window.bulletedListTooltip,
    },
    {
      name: 'Numbered list',
      description: 'Create a list with numbering.',
      blockType: 'numberedList',
      thumbnail: window.numberedList,
      tooltip: window.numberedListTooltip,
    },
    // {
    //   name: 'Toggle list',
    //   description: 'Toggles can hide and show content inside.',
    //   blockType: 'toggle',
    //   thumbnail: window.toggle,
    //   tooltip: window.toggleTooltip,
    // },
    {
      name: 'Code',
      description: 'Capture a code snippet.',
      blockType: 'code',
      thumbnail: window.code,
      tooltip: window.codeTooltip,
    },
    {
      name: 'Quote',
      description: 'Capture a quote.',
      blockType: 'quote',
      thumbnail: window.quote,
      tooltip: window.quoteTooltip,
    },
    {
      name: 'Divider',
      description: 'Visually divide blocks.',
      blockType: 'divider',
      thumbnail: window.divider,
      tooltip: window.dividerTooltip,
    },
    // {
    //   name: 'Link',
    //   description: 'Link to an existing page.',
    //   blockType: 'link',
    //   thumbnail: window.link,
    //   tooltip: window.linkTooltip,
    // },
    {
      name: 'Callout',
      description: 'Make writing stand out.',
      blockType: 'callout',
      thumbnail: window.callout,
      tooltip: window.calloutTooltip,
    },
    {
      name: 'Image',
      description: 'Upload or embed with a link.',
      blockType: 'image',
      thumbnail: window.image,
      tooltip: window.imageTooltip,
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
