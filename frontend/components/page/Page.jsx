import React from 'react';
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
    this.OnDragEnd = this.OnDragEnd.bind(this);
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
    console.log(result);
    const { source, destination } = result;

    // if dropped outside the area or no movement
    if (!destination || source.index === destination.index) return;

    // reorder blocks (splice >1 if implementing multi-drag)
    const blocks = this.state.blocks;
    const newBlocks = [...blocks];
    const removed = newBlocks.splice(source.index, 1);
    newBlocks.splice(destination.index, 0, [removed]);

    this.setState({ blocks: newBlocks });
  }

  render() {
    // if (this.state.blocks.length === 0 || !this.state.page) {
    if (this.state.blocks.length === 0) {
      return null;
    }

    const { currentUser, blocks } = this.props;
    const currentPageBlocks = blocks[this.state.pageId];

    // const blocksList = currentPageBlocks.map((block) => {
    //   return <div key={block.id}>{block.properties.title}</div>;
    // });
    
    // const blocksList = Object.keys(blocks).map((blockKey) => {
    //   const block = blocks[blockKey];
    //   return <div key={block.id}>{block.properties.title}</div>;
    // });

    // const pageCover = this.state.page.coverUrl;

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
          <div className="page-header-wrapper">
            <div className="page-header">
              {/* {pageCover ? <img src={this.state.page.coverUrl} className="page-cover" /> : null} */}
            </div>
          </div>

          <div className="page-wrapper">
            <h1 className="page-title">{this.props.pages[this.state.pageId].properties.title}</h1>

            <DragDropContext onDragStart onDragUpdate onDragEnd={this.OnDragEnd}>
              <div className="page-content">

                <Droppable droppableId={this.state.pageId}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="droppable-area"
                    >
                      {currentPageBlocks.map((block, index) => (
                        <Block 
                          key={block.id} 
                          block={block} 
                          index={index} 
                        />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
                
              </div>
            </DragDropContext>
          </div>
        </div>
      </div>
    );

  }
}

export default withRouter(Page);
