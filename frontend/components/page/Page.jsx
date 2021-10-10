import React from 'react';
import { withRouter } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import BlockContainer from '../blocks/BlockContainer';
import PageHeader from './PageHeader';
import MediaMenuContainer from '../menus/MediaMenuContainer';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.OnDragEnd = this.OnDragEnd.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
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
    if (!this.props.page || Object.keys(this.props.page).length === 0) {
      this.props.fetchPage(this.state.pageId).then((res) => {
        // console.log(page)
        this.setState({
          page: res.page,
          title: res.page.title,
          imageUrl: res.page.imageUrl,
          blockIds: res.page.blockIds,
        })
      });
    } else {
      this.setState({
        page: this.props.page,
        title: this.props.page.title,
        imageUrl: this.props.page.imageUrl,
        blockIds: this.props.page.blockIds
      });
    }
    this.props.fetchBlocks(this.state.pageId)
      .then((res) => {
        this.setState({ 
          blocks: res.blocks,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    let newPageId = this.props.location.pathname.slice(3);
    if (prevProps.pageId !== newPageId) {
      // this.props.fetchBlocks(newPageId)
      //   .then((res) => {
      //     this.setState({ 
      //       blocks: res.blocks, 
      //       pageId: newPageId 
      //     });
      //   });
      this.props.fetchPage(newPageId)
        .then((res) => {
          this.setState({
            page: res.page,
            title: res.page.title,
            imageUrl: res.page.imageUrl,
            blockIds: res.page.blockIds,
          })
        })
        
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

  handleImageUpload(e) {
    debugger

  }

  render() {
    // console.log(this.props)
    if (!this.props.blocks || !this.props.pages || !this.props.page) return null;
    if (this.state.blocks.length === 0) return null;
    if (Object.keys(this.props.page).length === 0) return null;
    // console.log(this.props);
    const orderedBlocks = []
    const blockIds = this.props.page.blockIds;
    for (let i = 0; i < blockIds.length; i++) {
      orderedBlocks.push(this.state.blocks[blockIds[i]])
    }
    // console.log(blockIds)
    // console.log(orderedBlocks);
    const pageHasCover = this.props.page.imageUrl.length > 0;

    // check for attachment
    // use default or user photo based on attachment
    // const pageHasUserUploadedImage = this.props.page.hasUserPhoto 
    
    // console.log(orderedBlocks);

    console.log(this.state);
    return (
      <div className="page">
        <div className="topbar-wrapper">
          <div className="topbar">
            <div className="breadcrumb-wrapper">
              <div className="breadcrumb">{this.props.pages[this.state.pageId].title}</div>
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
              {pageHasCover ? <img src={this.props.page.imageUrl} className="page-cover" /> : null}
              {/* <input type="file" name="" id="" /> */}
            </div>
          </div>

          <div className="temp-picker">
            <form onSubmit={this.handleImageUpload} className="picker-form">
              <label htmlFor="page-cover-input">Choose a photo</label>
              <input
                type="file"
                id="page-cover-input"
                // value={this.state.page.imageUrl}
                // onChange={this.handleImageUpload}
              />
              <button type="submit" id="picker-submit">Add cover photo</button>
            </form>
          </div>

          {/* <PageHeader /> */}

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
                        <BlockContainer key={block.id} block={block} index={index} />
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
