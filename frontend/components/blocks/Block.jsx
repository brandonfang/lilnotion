import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import Heading1Container from './Heading1Container';
import Heading2Container from './Heading2Container';
import Heading3Container from './Heading3Container';
import QuoteContainer from './QuoteContainer';
import BulletedListContainer from './BulletedListContainer';
import NumberedListContainer from './NumberedListContainer';
import TextContainer from './TextContainer';
import ToDoContainer from './ToDoContainer';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.dragHandleClick = this.dragHandleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ html: e.target.value });
  }

  dragHandleClick(e) {
    const dragHandle = e.target;
    // open menu
  }

  debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

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
      case 'text':
        blockBody = <TextContainer block={this.props.block} />
        break;
      case 'quote':
        blockBody = <QuoteContainer block={this.props.block} />
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
      default:
        blockBody = <TextContainer block={this.props.block} />;
        break;
    }
    
    return (
      <Draggable
        draggableId={this.props.block.id}
        index={this.props.index}
      >
        {(provided, snapshot) => (
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
              // tabIndex="0"
            >⋮⋮</div>

            {blockBody}
          </div>
        )}
      </Draggable>
    );
  }
}

export default Block;
