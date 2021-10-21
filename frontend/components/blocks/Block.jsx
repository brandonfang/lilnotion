import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

import Heading1Container from './Heading1Container';
import Heading2Container from './Heading2Container';
import Heading3Container from './Heading3Container';
import QuoteContainer from './QuoteContainer';
import CalloutContainer from './CalloutContainer';
import BulletedListContainer from './BulletedListContainer';
import NumberedListContainer from './NumberedListContainer';
import ParagraphContainer from './ParagraphContainer';
import ToDoContainer from './ToDoContainer';
import ToggleContainer from './ToggleContainer';
import DividerContainer from './DividerContainer';
import ImageContainer from './ImageContainer';

import BlockSelectMenuContainer from '../menus/BlockSelectMenuContainer';

// turn blocks into functional components if not using react-contenteditable
class Block extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.dragHandleClick = this.dragHandleClick.bind(this);
    this.openBlockSelectMenu = this.openBlockSelectMenu.bind(this);
    this.closeBlockSelectMenu = this.closeBlockSelectMenu.bind(this);
    this.calculateBlockSelectMenuPosition = this.calculateBlockSelectMenuPosition.bind(this);

    this.state = {
      blockSelectMenuOpen: false,
      blockSelectMenuPosition: {
        x: null,
        y: null
      },
    }
  }


  dragHandleClick(e) {
    const dragHandle = e.target;
    this.openBlockSelectMenu();
  }

  openBlockSelectMenu(trigger) {
    // console.log('open menu')
    const { x, y } = this.calculateBlockSelectMenuPosition(trigger);
    this.setState({
      blockSelectMenuOpen: true,
      blockSelectMenuPosition: { x: x, y: y },
    });
    document.addEventListener('click', this.closeBlockSelectMenu);

  }

  closeBlockSelectMenu() {
    // console.log('close menu')
    this.setState({
      blockSelectMenuOpen: false,
      blockSelectMenuPosition: { x: null, y: null }
    });
    document.removeEventListener('click', this.closeBlockSelectMenu);
  }

  calculateBlockSelectMenuPosition(triger) {}

  componentWillUnmount() {}

  render() {
    const blockType = this.props.block.blockType;
    let blockBody;
    switch (blockType) {
      case 'h1':
        blockBody = <Heading1Container block={this.props.block} />
        break;
      case 'h2':
        blockBody = <Heading2Container block={this.props.block} />
        break;
      case 'h3':
        blockBody = <Heading3Container block={this.props.block} />
        break;
      case 'paragraph':
        blockBody = <ParagraphContainer block={this.props.block} />
        break;
      case 'quote':
        blockBody = <QuoteContainer block={this.props.block} />
        break;
      case 'callout':
        blockBody = <CalloutContainer block={this.props.block} />
        break;
      case 'bulletedList':
        blockBody = <BulletedListContainer block={this.props.block} />
        break;
      case 'numberedList':
        blockBody = <NumberedListContainer block={this.props.block} />
        break;
      case 'todo':
        blockBody = <ToDoContainer block={this.props.block} />
        break;
      case 'toggle':
        blockBody = <ToggleContainer block={this.props.block} />
        break;
      case 'divider':
        blockBody = <DividerContainer block={this.props.block} />
        break;
      case 'image':
        blockBody = <Image block={this.props.block} />
        break;
      default:
        blockBody = <ParagraphContainer block={this.props.block} />;
        break;
    }
    
    return (
      <Draggable
        draggableId={this.props.block.id}
        index={this.props.index}
      >
        {(provided, snapshot) => (
          // blocks contain block handle, select menu, and block body
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            className="block" 
          >
            <div
              onClick={this.dragHandleClick}
              {...provided.dragHandleProps}
              className="block-handle"
              role="button"
              tabIndex="0"
            >⋮⋮</div>

            <BlockSelectMenuContainer />

            {blockBody}
          </div>
        )}
      </Draggable>
    );
  }
}

export default Block;
