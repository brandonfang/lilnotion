import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import ContentEditable from 'react-contenteditable'
import Text from './Text';

// turn into functional component if no longer using react-contenteditable
class Block extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.dragHandleClick = this.dragHandleClick.bind(this);
    this.contentEditable = React.createRef();
    this.state = {
      html: props.block.content,
    }
  }

  handleChange(e) {
    this.setState(html, e.target.value);
  }

  dragHandleClick(e) {
    const dragHandle = e.target;
    return;
  }
  
  render() {
    return (
      <>
        <Draggable key={this.props.block.id} draggableId={this.props.block.id} index={this.props.index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              className='block'
            >
              <div
                className='block-drag-handle'
                role='button'
                tabIndex='0'
                onClick={this.dragHandleClick}
                {...provided.dragHandleProps}
              >
                ⋮⋮
              </div>
              {/* {this.props.block.content} */}
              <ContentEditable
                innerRef={this.contentEditable}
                html={this.state.html} 
                disabled={false}    
                onChange={this.handleChange} 
                tagName='div'
                className='notranslate block-content'
                placeholder="Type '/' for commands"
                content={this.props.block.content}
              />
            </div>
          )}
        </Draggable>
      </>
    );
  }
}

export default Block;
