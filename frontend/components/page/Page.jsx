import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PageHeader from './PageHeader';
import Block from '../blocks/Block';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageId: this.props.location.pathname.slice(3),
      blocks: {}
    };

  }

  componentDidMount() {
    // console.log(this.props);
    // console.log(this.props.match);
    // this.props.fetchBlocks(this.props.match.params.pageId);
    // console.log(this.state.pageId)
    // this.props.fetchBlocks(this.state.pageId);

    this.props.fetchBlocks(this.props.location.pathname.slice(3));
  }

  componentDidUpdate(prevProps) {
    let newPageId = this.props.location.pathname.slice(3);

    if (this.state.pageId !== newPageId) {
      debugger;
      for (let i = 0; i < this.props.blocks.length; i++) {
        if (this.props.blocks[i].pageId === newPageId) {
          // fetchBlocks on newPageID, then setState
        }
      }
    }
  }

  OnDragEnd(result) {
    const { source, destination } = result;
    // if dropped outside the list or no movement
    if (source.index === destination.index || !destination) {
      return;
    }
    // reorder blocks
    // restore content after reorder
    const updatedBlocks = [...blocks];
    const removed = updatedBlocks.splice(source.index - 1, 1); // splice >1 if implementing multi-drag
    updatedBlocks.splice(destination.index - 1, 0, [removed]);
    setBlocks(updatedBlocks);
  }

  render() {
    if (!this.props.blocks) {
      return null;
    }

    const { currentUser, blocks } = this.props;

    const blockList = Object.keys(blocks).map((blockKey) => {
      const block = blocks[blockKey];

      return (
        <div key={block.id}>
         {block.properties.title}
        </div>
      );
    });

    
    return (
      <div className="scroller">
        <div className="page-content">
          <PageHeader />

          <h1 className="page-title">Heading {this.state.title}</h1>

          {blockList}

          {/* <DragDropContext onDragEnd={this.OnDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="droppable-area"
                >
                  {this.state.blocks.map((block, index) => (
                    // <Draggable key={block.id} draggableId={block.id} index={index}>
                    //   {(provided, snapshot) => (
                    //     <div
                    //       ref={provided.innerRef}
                    //       {...provided.draggableProps}
                    //       {...provided.dragHandleProps}
                    //     >
                    //       {block.content}
                    //     </div>
                    //   )}
                    // </Draggable>
                    <Block key={block.id} block={block} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext> */}


        </div>
      </div>
    );
  }
}

export default withRouter(Page);
