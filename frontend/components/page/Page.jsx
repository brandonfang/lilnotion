import React from 'react';
import { withRouter } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PageHeader from './PageHeader';
import BlockContainer from '../blocks/BlockContainer';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: this.props.pages,
      pageId: this.props.pageId,
      page: this.props.page,
      title: '',
      blockIds: [],
      imageUrl: '',
      blocks: [],
    };
    this.OnDragEnd = this.OnDragEnd.bind(this);
  }

  componentDidMount() {
    this.props.fetchBlocks(this.state.pageId)
      .then((res) => {
        this.setState({ 
          blocks: res.blocks,
        });
      });
    // if (this.props.page && Object.keys(this.props.page).length > 0) {
    //   console.log('test')
    //   this.setState({
    //     title: this.props.page.title,
    //     blockIds: this.props.page.blockIds,
    //     imageUrl: this.props.page.imageUrl,
    //   })
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    let newPageId = this.props.location.pathname.slice(3);
    if (this.state.pageId !== newPageId) {
      this.props.fetchBlocks(newPageId)
        .then((res) => {
          this.setState({ 
            blocks: res.blocks, 
            pageId: newPageId 
          });
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
    if (this.state.blocks.length === 0 || !this.props.page || Object.keys(this.props.page).length === 0) {
      return null;
    }
    
    // const currentPageBlocks = this.props.blocks[this.state.pageId];
    const pageCover = this.state.imageUrl;

    const orderedBlocks = []

    // for (this.state.page.) {
    //   result.push()
    // }
    console.log(this.props);
    console.log(this.state);

    return (
      <div className="page">
        <div className="topbar-wrapper">
          <div className="topbar">
            <div className="breadcrumb-wrapper">
              <div className="breadcrumb">
                {this.props.pages[this.state.pageId].title}
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
              {pageCover ? <img src={this.state.page.imageUrl} className="page-cover" /> : null}
            </div>
          </div>

          <div className="page-wrapper">
            <h1 className="page-title">{this.props.pages[this.state.pageId].title}</h1>

            <DragDropContext onDragEnd={this.OnDragEnd}>
              <div className="page-content">

                <Droppable droppableId={this.state.pageId}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="droppable-area"
                    >
                      {/* {currentPageBlocks.map((block, index) => (
                        <BlockContainer 
                          key={block.id} 
                          block={block} 
                          index={index} 
                        />
                      ))} */}
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
