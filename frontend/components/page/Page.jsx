import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PageHeader from './PageHeader';
import Block from '../blocks/Block';

class Page extends React.Component {
  constructor(props) {
    super(props);
    let pageId = this.props.location.pathname.slice(3);
    this.state = {
      pageId: pageId,
      pages: this.props.pages,
      page: this.props.pages[pageId],
      blocks: [],
      // title,
      // cover,
    };
  }

  componentDidMount() {
    this.props.fetchBlocks(this.state.pageId)
      .then((blocks) => {
        this.setState({ blocks: blocks[Object.keys(blocks)[0]] });
      });
  }

  componentDidUpdate(prevProps) {
    let newPageId = this.props.location.pathname.slice(3);
    if (this.state.pageId !== newPageId) {
      this.props.fetchBlocks(this.props.location.pathname.slice(3))
        .then((blocks) => {
          this.setState({ blocks: blocks, pageId: newPageId })
        });
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
    let blocks = this.state.blocks;
    const updatedBlocks = [...blocks];
    const removed = updatedBlocks.splice(source.index - 1, 1); // splice >1 if implementing multi-drag
    updatedBlocks.splice(destination.index - 1, 0, [removed]);
    setBlocks(updatedBlocks);
  }

  render() {
    if (this.state.blocks.length === 0) {
      return null;
    }

    const { currentUser, blocks } = this.props;
    const currentPageBlocks = blocks[Object.keys(blocks)[0]];

    // console.log(this.props.pages[this.state.pageId]);
    // console.log(this.props.blocks);
    // console.log(currentPageBlocks);
    // console.log(this.state);

    // const blockList = currentPageBlocks.map((block) => {
    //   return <div key={block.id}>{block.properties.title}</div>;
    // });

    const blockList = currentPageBlocks.map((block, index) => {
      return <Block key={block.id} block={block} index={index} />

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
    })

    
    // const blockList = Object.keys(blocks).map((blockKey) => {
    //   const block = blocks[blockKey];
    //   return <div key={block.id}>{block.properties.title}</div>;
    // });

    return (
      <div className="page">
        <div className="topbar-wrapper">
          <div className="topbar">
            <div className="breadcrumb-wrapper">
              <div className="breadcrumb">
                {this.props.pages[this.state.pageId].properties.title}
              </div>
            </div>
            <div className="topbar-action-buttons">
              <div className="more-button-wrapper">
                <div className="more-button">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-scroller">
          <div className="page-content">
            <div className="page-header-wrapper">
              <div className="page-header">
                <h1 className="page-title">
                  {this.props.pages[this.state.pageId].properties.title}
                </h1>
              </div>
            </div>

            <img src={`${this.state.page.properties.coverUrl}`} alt="" srcSet="" />

            {/* {blockList} */}

            <DragDropContext onDragEnd={this.OnDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="droppable-area"
                  >
                    {blockList}

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    );

  }
}

export default withRouter(Page);
