import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import ContentEditable from 'react-contenteditable'
import Text from './Text';
import Heading1 from './Heading1';
import Heading2 from './Heading2';
import Heading3 from './Heading3';

// turn into functional component if not using react-contenteditable
class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockType: props.block.blockType,
      html: props.block.properties.title,
    };
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

  render() {
    const blockType = this.props.block.blockType;
    let blockBody;
    switch (blockType) {
      case 'h1':
        blockBody = <Heading1 block={this.props.block} />
        break;
      case 'h2':
        blockBody = <Heading2 block={this.props.block} />
        break;
      case 'h2':
        blockBody = <Heading3 block={this.props.block} />
        break;
      case 'text':
        // blockBody = <Text block={this.props.block} />
        blockBody = <div><p>{this.props.block.properties.title}</p></div>
        break;
      // default:
      //   blockBody = <Text block={this.props.block} />;
      //   break;
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
            // {...provided.dragHandleProps}
            className="block" 
          >
            <div
              className="block-handle"
              role="button"
              tabIndex="0"
              onClick={this.dragHandleClick}
              {...provided.dragHandleProps}
            >⋮⋮</div>
            
            {blockBody}

            {/* <ContentEditable
              innerRef={this.contentEditable}
              html={this.state.html}
              disabled={false}
              onChange={this.handleChange}
              tagName="div"
              className="notranslate block-content"
              placeholder="Type '/' for commands"
              properties={this.props.block.properties}
            /> */}
          </div>
        )}
      </Draggable>
    );
  }
}

export default Block;
