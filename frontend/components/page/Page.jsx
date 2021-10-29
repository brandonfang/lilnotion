import React from 'react';
import { withRouter } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import BlockContainer from '../blocks/BlockContainer';
import PageHeaderContainer from './PageHeaderContainer';
import MediaMenuContainer from '../menus/MediaMenuContainer';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: this.props.pages,
      pageId: this.props.pageId,
      page: this.props.page,
      title: '',
      blockIds: [],
      galleryImageUrl: '',
      uploadedImageUrl: '',
      blocks: [],
    };
  }

  componentDidMount() {
    if (!this.props.page || Object.keys(this.props.page).length === 0) {
      // if page data missing, fetch data and add it to component state
      this.props.fetchPage(this.state.pageId).then((res) => {
        this.setState({
          page: res.page,
          title: res.page.title,
          galleryImageUrl: res.page.galleryImageUrl,
          uploadedImageUrl: res.page.uploadedImageUrl,
          blockIds: res.page.blockIds,
        });
      });
    } else {
      // if page data exists, add it to component state
      this.setState({
        page: this.props.page,
        title: this.props.page.title,
        galleryImageUrl: this.props.page.galleryImageUrl,
        uploadedImageUrl: this.props.page.uploadedImageUrl,
        blockIds: this.props.page.blockIds,
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
      this.props.fetchPage(newPageId)
        .then((res) => {
          this.setState({
            page: res.page,
            title: res.page.title,
            galleryImageUrl: res.page.galleryImageUrl,
            uploadedImageUrl: res.page.uploadedImageUrl,
            blockIds: res.page.blockIds,
          });
        })
      this.props.fetchBlocks(newPageId)
        .then((res) => {
          this.setState({ 
            blocks: res.blocks, 
            pageId: newPageId 
          });
        });
    }
    // if (prevProps.blocks !== this.props.blocks) {
    //   this.props.fetchBlocks(this.state.pageId).then((res) => {
    //     this.setState({
    //       blocks: res.blocks,
    //     });
    //   });
    // }
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
      const newPage = Object.assign(this.state.page, { blockIds: newBlockIds});
      this.props.updatePage(newPage);
    });
  }

  handleImageUpload(e) {
    // debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append(page[title], this.state.title);
    // formData.append(page[photo], this.state.photoFile);

    // $.ajax({
    //   url: `/api/pages/${this.state.pageId}`,
    //   method: 'PATCH',
    //   data: formData,
    //   contentType: false,
    //   processData: false
    // }).then(
    //   (res) => console.log(res),
    //   (err) => console.log(err)
    // );
  }

  render() {
    if (!this.props.blocks || !this.props.pages || !this.props.page) return null;
    if (this.state.blocks.length === 0) return null;
    if (Object.keys(this.props.page).length === 0) return null;

    const orderedBlocks = []
    const blockIds = this.props.page.blockIds;
    for (let i = 0; i < blockIds.length; i++) {
      orderedBlocks.push(this.state.blocks[blockIds[i]])
    }

    const pageHasGalleryCover = this.props.page.galleryImageUrl.length > 0;
    const pageHasUploadedCover = this.props.page.uploadedImageUrl.length > 0;

    // check for attachment
    // use default or user photo based on attachment
    // const pageHasUserUploadedImage = this.props.page.hasUserPhoto 
    
    return (
      <div className="page">
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

        <div className="page-scroller">
          {/* <div className="page-header-wrapper">
            <div className="page-header">
              {pageHasGalleryCover ? <img src={this.props.page.galleryImageUrl} className="page-cover" /> : null}
            </div>
          </div>

          <div className="temp-picker">
            <form onSubmit={this.handleImageUpload.bind(this)} id="picker-form">
              <label htmlFor="page-cover-input">Choose a photo</label>
              <input
                type="file"
                id="page-cover-input"
                // value={}
                onChange={() => document.getElementById('picker-form').submit()}
              />
              <button type="submit" id="picker-submit">Add cover photo</button>
            </form>
          </div>

          <PageHeaderContainer page={this.state.page} /> */}

          <div className="page-wrapper">
            <div className="page-title-wrapper">
              <h1 className="page-title">{this.props.pages[this.state.pageId].title}</h1>
            </div>

            <DragDropContext onDragEnd={this.OnDragEnd.bind(this)}>
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
