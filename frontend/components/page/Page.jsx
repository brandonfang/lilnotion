import React from 'react';
import { withRouter } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PageHeader from './PageHeader';
import BlockContainer from '../blocks/BlockContainer';

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
      // coverUrl,
    };
    this.OnDragEnd = this.OnDragEnd.bind(this);
  }

  componentDidMount() {
    this.props.fetchBlocks(this.state.pageId)
      .then((res) => {
        this.setState({ blocks: res.blocks[Object.keys(res.blocks)[0]] });
      });
  }

  componentDidUpdate(prevProps) {
    let newPageId = this.props.location.pathname.slice(3);
    if (this.state.pageId !== newPageId) {
      this.props.fetchBlocks(newPageId)
        .then((res) => {
          this.setState({ blocks: res.blocks[Object.keys(res.blocks)[0]], pageId: newPageId });
        });
    }
  }

  OnDragEnd(result) {
    const { source, destination } = result;

    // if dropped outside the area or no movement
    if (!destination || source.index === destination.index) return;

    // reorder blocks (splice >1 if implementing multi-drag)
    const blocks = this.state.blocks;
    const newBlocks = [...blocks];
    const removed = newBlocks.splice(source.index, 1);
    newBlocks.splice(destination.index, 0, ...removed);

    this.setState({ blocks: newBlocks }, () => {
      // console.log(this.props);
      // console.log(newBlocks)

      // this.props.updatePage();
    });
  }

  render() {
    if (this.state.blocks.length === 0 || Object.keys(this.props.pages).length == 0) {
      return null;
    }

    const { currentUser, blocks } = this.props;
    const currentPageBlocks = blocks[this.state.pageId];
    // const pageCover = this.state.page.properties.coverUrl;

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
              {/* {pageCover ? <img src={this.state.page.properties.coverUrl} className="page-cover" /> : null} */}
            </div>
          </div>

          <div className="page-wrapper">
            <h1 className="page-title">{this.props.pages[this.state.pageId].properties.title}</h1>

            <DragDropContext onDragEnd={this.OnDragEnd}>
              <div className="page-content">

                <Droppable droppableId={this.state.pageId}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="droppable-area"
                    >
                      {currentPageBlocks.map((block, index) => (

                        // <Draggable
                        //   key={block.id}
                        //   draggableId={block.id}
                        //   index={index}
                        // >
                        //   {(provided, snapshot) => (
                        //     <div
                        //       ref={provided.innerRef}
                        //       {...provided.draggableProps}
                        //       className="block" 
                        //     >
                        //       <div
                        //         className="block-handle"
                        //         role="button"
                        //         tabIndex="0"
                        //         {...provided.dragHandleProps}
                        //       >⋮⋮</div>

                        //       <div className="block-content">
                        //         {block.properties.title}
                        //       </div>

                        //     </div>
                        //   )}
                        // </Draggable>
                        <BlockContainer 
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
