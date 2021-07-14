import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import ContentEditable from 'react-contenteditable'
import Text from './Text';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.state = {
      html: props.item.content,
    }
  }

  handleChange = (e) => {
    this.setState(html, e.target.value);
  }
  
  render() {
    return (
      <>
        <Draggable key={this.props.item.id} draggableId={this.props.item.id} index={this.props.index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className='block'
            >
              <span className='block-drag-handle'>⋮⋮</span>
              {/* {this.props.item.content} */}
              <ContentEditable
                innerRef={this.contentEditable}
                html={this.state.html} 
                disabled={false}    
                onChange={this.handleChange} 
                tagName='div'
                className='notranslate block-content'
                placeholder="Type '/' for commands"
                content={this.props.item.content}
              />
            </div>
          )}
        </Draggable>
      </>
    );
  }
}

export default Block;
