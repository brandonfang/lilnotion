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
import BlockActionMenu from '../menus/BlockActionMenu';
import BlockSelectMenu from '../menus/BlockSelectMenu';

// use functional component if not using react-contenteditable
class Block extends React.Component {
  constructor(props) {
    super(props);
    this.dragHandleClick = this.dragHandleClick.bind(this);
    this.calculateActionMenuPosition = this.calculateActionMenuPosition.bind(this);
    this.calculateSelectMenuPosition = this.calculateSelectMenuPosition.bind(this);
    this.openActionMenu = this.openActionMenu.bind(this);
    this.closeActionMenu = this.closeActionMenu.bind(this);
    this.openSelectMenu = this.openSelectMenu.bind(this);
    this.closeSelectMenu = this.closeSelectMenu.bind(this);
    this.handleBlockSelect = this.handleBlockSelect.bind(this);

    this.state = {
      blockType: this.props.block.blockType,
      actionMenuOpen: false,
      actionMenuPosition: {
        x: null,
        y: null,
      },
      // selectMenuOpen: true,
      selectMenuOpen: false,
      selectMenuPosition: {
        x: null,
        y: null,
      },
    };
  }

  dragHandleClick(e) {
    // e.preventDefault();
    const dragHandle = e.target;
    this.openActionMenu(dragHandle, 'DRAG_HANDLE_CLICK');
  }

  calculateActionMenuPosition(parent, initiator) {
    // determine if menu opens to left or right of drag handle (in the future)
    switch (initiator) {
      case 'DRAG_HANDLE_CLICK':
        const x = parent.offsetLeft + parent.scrollLeft + 24;
        const y = parent.offsetTop + parent.scrollTop - 8;
        return { x: x, y: y };
      default:
        return { x: null, y: null };
    }
  }

  calculateSelectMenuPosition(initiator) {
    // remove switch statement if no key events
    switch (initiator) {
      case 'ACTION_MENU':
        const { x: actionX, y: actionY } = this.state.actionMenuPosition;
        return { x: actionX + 240, y: actionY};
      default:
        return { x: null, y: null };
    }
  }

  openActionMenu(parent, trigger) {
    const { x, y } = this.calculateActionMenuPosition(parent, trigger);
    this.setState({
      actionMenuOpen: true,
      actionMenuPosition: { x: x, y: y },
    });

    setTimeout(() => {
      document.addEventListener('click', this.closeActionMenu, false);
    }, 100);
  }

  closeActionMenu() {
    this.setState({
      actionMenuOpen: false,
      actionMenuPosition: { x: null, y: null },
    });
    document.removeEventListener('click', this.closeActionMenu, false);
  }

  openSelectMenu(trigger) {
    const { x, y } = this.calculateSelectMenuPosition(trigger);
    this.setState({
      selectMenuOpen: true,
      selectMenuPosition: { x: x, y: y },
    });
    document.addEventListener('click', this.closeSelectMenu, false);
  }

  closeSelectMenu() {
    this.setState({
      selectMenuOpen: false,
      selectMenuPosition: { x: null, y: null },
    });
    document.removeEventListener('click', this.closeSelectMenu, false);
  }

  handleBlockSelect(blockType) {
    if (blockType === 'image') {
      // image file picker
    } else {
      this.setState({ blockType: blockType }, () => {
        this.closeSelectMenu();
      });
    }
  }

  componentWillUnmount() {}

  render() {
    const blockType = this.props.block.blockType;
    let blockBody;
    switch (blockType) {
      case 'h1':
        blockBody = <Heading1Container block={this.props.block} />;
        break;
      case 'h2':
        blockBody = <Heading2Container block={this.props.block} />;
        break;
      case 'h3':
        blockBody = <Heading3Container block={this.props.block} />;
        break;
      case 'paragraph':
        blockBody = <ParagraphContainer block={this.props.block} />;
        break;
      case 'quote':
        blockBody = <QuoteContainer block={this.props.block} />;
        break;
      case 'callout':
        blockBody = <CalloutContainer block={this.props.block} />;
        break;
      case 'bulletedList':
        blockBody = <BulletedListContainer block={this.props.block} />;
        break;
      case 'numberedList':
        blockBody = <NumberedListContainer block={this.props.block} />;
        break;
      case 'todo':
        blockBody = <ToDoContainer block={this.props.block} />;
        break;
      case 'toggle':
        blockBody = <ToggleContainer block={this.props.block} />;
        break;
      case 'divider':
        blockBody = <DividerContainer block={this.props.block} />;
        break;
      case 'image':
        blockBody = <ImageContainer block={this.props.block} />;
        break;
      // code
      // link
      // page
      default:
        blockBody = <ParagraphContainer block={this.props.block} />;
        break;
    }

    return (
      <Draggable draggableId={this.props.block.id} index={this.props.index}>
        {(provided, snapshot) => (
          // each block contains 1) block handle, 2) action menu, 3) select menu, 4) block body
          <div ref={provided.innerRef} {...provided.draggableProps} className="block">
            {/* BEGIN */}
            {this.state.actionMenuOpen ? (
              <BlockActionMenu
                position={this.state.actionMenuPosition}
                actions={{
                  // turnInto: () => this.openSelectMenu('ACTION_MENU'),
                  turnInto: () => console.log('turn into fired'),
                  openSelectMenu: () => this.openSelectMenu('ACTION_MENU'),
                  closeSelectMenu: () => this.closeSelectMenu(),
                  deleteBlock: () => this.props.deleteBlock({ blockId: this.props.block.id }),
                }}
              />
            ) : null}

            {this.state.selectMenuOpen ? (
              <BlockSelectMenu
                position={this.state.selectMenuPosition}
                close={this.closeSelectMenu}
                handleBlockSelect={this.handleBlockSelect}
              />
            ) : null}

            <div
              onClick={this.dragHandleClick}
              {...provided.dragHandleProps}
              className="block-handle"
              role="button"
              tabIndex="0"
            >
              ⋮⋮
            </div>

            {blockBody}
            {/* END */}
          </div>
        )}
      </Draggable>
    );
  }
}

export default Block;
