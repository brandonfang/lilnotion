import React from 'react';
import { withRouter } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PageHeader from './PageHeader';
import BlockContainer from '../blocks/BlockContainer';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.OnDragEnd = this.OnDragEnd.bind(this);    
    this.state = {
      pages: this.props.pages,
      pageId: this.props.pageId,
      page: this.props.page,
      title: '',
      blockIds: [],
      imageUrl: '',
      blocks: [],
    };
  }

  componentDidMount() {
    // this.props.fetchPage(this.state.pageId)
    //   .then((page) => {
    //     // console.log(page)
    //     // this.setState({
    //     //   page: page,
    //     //   title: page.title
    //     // })
    //   });
    this.props.fetchBlocks(this.state.pageId)
      .then((res) => {
        this.setState({ 
          blocks: res.blocks,
        });
      });
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
    const blockIds = this.state.blockIds;
    const newBlockIds = [...blockIds];
    const removed = newBlockIds.splice(source.index, 1);
    newBlockIds.splice(destination.index, 0, ...removed);

    this.setState({ blockIds: newBlockIds }, () => {
      // const newPage = Object.assign(this.state.page, { blockIds: newBlockIds});
      // this.props.updatePage(newPage);
    });
  }

  render() {
    // console.log(this.props)
    if (!this.props.blocks || !this.props.pages || !this.props.page) return null;
    if (this.state.blocks.length === 0) return null;
    if (Object.keys(this.props.page).length === 0) return null;
    
    const orderedBlocks = []
    const blockIds = this.props.page.blockIds;
    for (let i = 0; i < blockIds.length; i++) {
      orderedBlocks.push(this.state.blocks[blockIds[i]])
    }
    const pageCover = this.state.imageUrl;
    
    // console.log(orderedBlocks);
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
              {/* {pageCover ? <img src={this.state.page.imageUrl} className="page-cover" /> : null} */}
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
                      {orderedBlocks.map((block, index) => (
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
