import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import ContentEditable from 'react-contenteditable'
import Text from './Text';

// turn into functional component if not using react-contenteditable
class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
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
              className="block-drag-handle"
              role="button"
              tabIndex="0"
              onClick={this.dragHandleClick}
              {...provided.dragHandleProps}
            >⋮⋮</div>

            {/* <div>
              {this.props.block.content}
            </div> */}

            <ContentEditable
              innerRef={this.contentEditable}
              html={this.state.html}
              disabled={true}
              onChange={this.handleChange}
              tagName="div"
              className="notranslate block-content"
              placeholder="Type '/' for commands"
              content={this.props.block.content}
            />
          </div>
        )}
      </Draggable>
    );
  }
}

export default Block;
