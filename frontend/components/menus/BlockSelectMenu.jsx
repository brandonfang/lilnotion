import React, { useState, useEffect } from 'react';
import matchSorter from 'match-sorter';
import { FiImage } from 'react-icons/fi';

const BlockSelectMenu = ({ position }) => {
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

export default BlockSelectMenu;

// const MENU_HEIGHT = 150;
// const allowedTags = [
//   {
//     id: "page-title",
//     tag: "h1",
//     label: "Page Title"
//   },
//   {
//     id: "heading",
//     tag: "h2",
//     label: "Heading"
//   },
//   {
//     id: "subheading",
//     tag: "h3",
//     label: "Subheading"
//   },
//   {
//     id: "paragraph",
//     tag: "p",
//     label: "Paragraph"
//   }
// ];

// class BlockSelectMenu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.keyDownHandler = this.keyDownHandler.bind(this);
//     this.state = {
//       command: "",
//       items: allowedTags,
//       selectedItem: 0
//     };
//   }

//   componentDidMount() {
//     document.addEventListener("keydown", this.keyDownHandler);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const command = this.state.command;
//     if (prevState.command !== command) {
//       const items = matchSorter(allowedTags, command, { keys: ["tag"] });
//       this.setState({ items: items });
//     }
//   }

//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.keyDownHandler);
//   }

//   keyDownHandler(e) {
//     const items = this.state.items;
//     const selected = this.state.selectedItem;
//     const command = this.state.command;

//     switch (e.key) {
//       case "Enter":
//         e.preventDefault();
//         this.props.onSelect(items[selected].tag);
//         break;
//       case "Backspace":
//         if (!command) this.props.close();
//         this.setState({ command: command.substring(0, command.length - 1) });
//         break;
//       case "ArrowUp":
//         e.preventDefault();
//         const prevSelected = selected === 0 ? items.length - 1 : selected - 1;
//         this.setState({ selectedItem: prevSelected });
//         break;
//       case "ArrowDown":
//       case "Tab":
//         e.preventDefault();
//         const nextSelected = selected === items.length - 1 ? 0 : selected + 1;
//         this.setState({ selectedItem: nextSelected });
//         break;
//       default:
//         this.setState({ command: this.state.command + e.key });
//         break;
//     }
//   }

//   render() {
//     const x = this.props.position.x;
//     const y = this.props.position.y - MENU_HEIGHT;
//     const positionAttributes = { top: y, left: x };

//     return (
//       <div className="SelectMenu" style={positionAttributes}>
//         <div className="Items">
//           {this.state.items.map((item, key) => {
//             const selectedItem = this.state.selectedItem;
//             const isSelected = this.state.items.indexOf(item) === selectedItem;
//             return (
//               <div
//                 className={isSelected ? "Selected" : null}
//                 key={key}
//                 role="button"
//                 tabIndex="0"
//                 onClick={() => this.props.onSelect(item.tag)}
//               >
//                 {item.label}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
