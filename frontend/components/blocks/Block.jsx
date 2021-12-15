import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import PlusHandle from './PlusHandle';
import DragHandle from './DragHandle';

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
import CodeContainer from './CodeContainer';
import LinkContainer from './LinkContainer';

import BlockActionMenu from '../menus/BlockActionMenu';
import BlockSelectMenu from '../menus/BlockSelectMenu';
import BlockSlashMenu from '../menus/BlockSlashMenu';

const SLASH = '/';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.plusHandleClick = this.plusHandleClick.bind(this);
    this.dragHandleClick = this.dragHandleClick.bind(this);
    this.deleteBlock = this.deleteBlock.bind(this);
    this.calculateDragHandlePosition = this.calculateDragHandlePosition(this);
    this.calculateActionMenuPosition = this.calculateActionMenuPosition.bind(this);
    this.calculateSelectMenuPosition = this.calculateSelectMenuPosition.bind(this);
    this.openActionMenu = this.openActionMenu.bind(this);
    this.closeActionMenu = this.closeActionMenu.bind(this);
    this.openSelectMenu = this.openSelectMenu.bind(this);
    this.closeSelectMenu = this.closeSelectMenu.bind(this);
    this.handleBlockSelect = this.handleBlockSelect.bind(this);
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.toggleMouseOverTurnInto = this.toggleMouseOverTurnInto.bind(this);
    this.toggleMouseOverSelectMenu = this.toggleMouseOverSelectMenu.bind(this);

    this.state = {
      blockType: this.props.block.blockType,
      actionMenuOpen: false,
      actionMenuPosition: {
        x: null,
        y: null,
      },
      selectMenuOpen: false,
      selectMenuPosition: {
        x: null,
        y: null,
      },
      slashMenuOpen: false,
      slashMenuPosition: {
        x: null,
        y: null,
      },
      hover: false,
      // mouseOverTurnInto: false,
      // mouseOverSelectMenu: false,
    };
  }

  handleSelectMenu() {
    if (!mouseOverTurnInto && !mouseOverSelectMenu) {
      this.closeSelectMenu();
    }
    // if (clickOutsideTurnInto || clickOutsideSelectMenu) {
    //   this.closeSelectMenu();
    // }
  }

  toggleMouseOverTurnInto() {
    console.log('toggleMouseOverTurnInto');
    const newState = !this.state.mouseOverTurnInto;
    this.setState({ mouseOverTurnInto: newState });
    this.handleSelectMenu();
  }

  toggleMouseOverSelectMenu() {
    console.log('toggleMouseOverSelectMenu');
    const newState = !this.state.mouseOverSelectMenu;
    this.setState({ mouseOverSelectMenu: newState });
    this.handleSelectMenu();
  }

  plusHandleClick() {
    // add a new block below current block
    const currentBlockId = this.props.block.id;
    const blockIds = this.props.blockIds;
    this.props
      .createBlock({
        userId: this.props.currentUser.id,
        pageId: this.props.block.pageId,
        blockType: 'paragraph',
        text: '',
      })
      .then((res) => {
        for (let i = 0; i < blockIds.length; i++) {
          if (blockIds[i] === currentBlockId) {
            const newBlockIds = [
              ...blockIds.slice(0, i + 1),
              res.block.id,
              ...blockIds.slice(i + 1),
            ];
            // Object.assign
            this.props.updatePage({ id: this.props.block.pageId, blockIds: newBlockIds });
          }
        }
      });
  }

  deleteBlock() {
    const idToDelete = this.props.block.id;
    this.props.deleteBlock(idToDelete)
    const newBlockIds = this.props.blockIds.filter((id) => id !== idToDelete);
    this.props.updatePage({ id: this.props.block.pageId, blockIds: newBlockIds });
    return;
  }

  dragHandleClick(e) {
    // drag to move, click to open menu
    const dragHandle = e.target;
    this.openActionMenu(dragHandle, 'DRAG_HANDLE_CLICK');
  }

  calculateDragHandlePosition(blockType) {}

  calculateActionMenuPosition(parent, initiator) {
    // determine if menu opens to left or right of drag handle (in the future)
    switch (initiator) {
      case 'DRAG_HANDLE_CLICK':
        const x = parent.offsetLeft + parent.scrollLeft + 26;
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
        return { x: actionX + 240, y: actionY };
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

  handleBlockSelect(blockType, block) {
    let newBlock = Object.assign({}, block, { blockType: blockType });
    this.props.updateBlock(newBlock);
    this.setState({ blockType: blockType }, () => this.closeSelectMenu());
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeActionMenu, false);
    document.removeEventListener('click', this.closeActionMenu, false);
  }

  render() {
    const blockType = this.props.block.blockType;
    let blockBody;
    switch (blockType) {
      case 'h1':
        blockBody = <Heading1Container block={this.props.block} deleteBlock={this.deleteBlock} />;
        break;
      case 'h2':
        blockBody = <Heading2Container block={this.props.block} deleteBlock={this.deleteBlock} />;
        break;
      case 'h3':
        blockBody = <Heading3Container block={this.props.block} deleteBlock={this.deleteBlock} />;
        break;
      case 'paragraph':
        blockBody = <ParagraphContainer block={this.props.block} deleteBlock={this.deleteBlock} />;
        break;
      case 'quote':
        blockBody = <QuoteContainer block={this.props.block} deleteBlock={this.deleteBlock} />;
        break;
      case 'callout':
        blockBody = <CalloutContainer block={this.props.block} deleteBlock={this.deleteBlock} />;
        break;
      case 'bulletedList':
        blockBody = <BulletedListContainer block={this.props.block} deleteBlock={this.deleteBlock} />;
        break;
      case 'numberedList':
        blockBody = <NumberedListContainer block={this.props.block} deleteBlock={this.deleteBlock} />;
        break;
      case 'todo':
        blockBody = <ToDoContainer block={this.props.block} deleteBlock={this.deleteBlock} />;
        break;
      case 'toggle':
        blockBody = <ToggleContainer block={this.props.block} deleteBlock={this.deleteBlock} />;
        break;
      case 'divider':
        blockBody = <DividerContainer block={this.props.block} deleteBlock={this.deleteBlock} />;
        break;
      case 'image':
        blockBody = <ImageContainer block={this.props.block} deleteBlock={this.deleteBlock} />;
        break;
      case 'code':
        blockBody = <CodeContainer block={this.props.block} deleteBlock={this.deleteBlock} />;
        break;
      case 'link':
        blockBody = <LinkContainer block={this.props.block} deleteBlock={this.deleteBlock} />;
      default:
        blockBody = <ParagraphContainer block={this.props.block} deleteBlock={this.deleteBlock} />;
        break;
    }

    return (
      <Draggable draggableId={this.props.block.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            className="block"
            ref={provided.innerRef}
            {...provided.draggableProps}
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
          >
            <PlusHandle
              plusHandleClick={this.plusHandleClick}
              hover={this.state.hover}
              // custom style top distance
            />

            <DragHandle
              dragHandleClick={this.dragHandleClick}
              dragHandleProps={provided.dragHandleProps}
              hover={this.state.hover}
              // custom style top distance
            />

            {this.state.actionMenuOpen ? (
              <BlockActionMenu
                position={this.state.actionMenuPosition}
                turnInto={() => this.openSelectMenu('ACTION_MENU')}
                openSelectMenu={() => this.openSelectMenu('ACTION_MENU')}
                closeSelectMenu={() => this.closeSelectMenu()}
                deleteBlock={this.deleteBlock}
                // toggleMouseOverTurnInto={this.toggleMouseOverTurnInto}
              />
            ) : null}

            {this.state.selectMenuOpen ? (
              <BlockSelectMenu
                position={this.state.selectMenuPosition}
                closeSelectMenu={this.closeSelectMenu}
                handleBlockSelect={this.handleBlockSelect}
                block={this.props.block}
                // toggleMouseOverSelectMenu={this.toggleMouseOverSelectMenu}
              />
            ) : null}

            {this.state.slashMenuOpen ? (
              <BlockSlashMenu
                position={this.state.selectMenuPosition}
                closeSlashMenu={this.closeSlashMenu}
                handleBlockSelect={this.handleBlockSelect}
                block={this.props.block}
                // toggleMouseOverSelectMenu={this.toggleMouseOverSelectMenu}
              />
            ) : null}

            {blockBody}
          </div>
        )}
      </Draggable>
    );
  }
}

export default Block;
