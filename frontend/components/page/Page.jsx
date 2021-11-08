import React from 'react';
import { withRouter } from 'react-router-dom';
import ContentEditable from 'react-contenteditable';
import { debounce } from '../../util/utils';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import BlockContainer from '../blocks/BlockContainer';
import PageHeaderContainer from './PageHeaderContainer';
import MediaMenuContainer from '../menus/MediaMenuContainer';

class Page extends React.Component {
  isMounted = false;

  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.OnDragEnd = this.OnDragEnd.bind(this); 
    this.state = {
      pages: this.props.pages,
      // page: this.props.page,
      page: {},
      pageId: this.props.pageId,
      blocks: this.props.blocks,
      html: '',
      photoFile: null,
      photoUrl: null,
    };
  }

  componentDidMount() {
    this.isMounted = true;
    // console.log(this.state);

    if (!this.props.page || Object.keys(this.props.page).length === 0) {
      this.props.fetchPage(this.props.pageId).then((res) => {
        if (this.isMounted) {
          this.setState({
            page: res.page,
            html: res.page.title,
            title: res.page.title,
          });
        }
      });
    } else {
      console.log('page already exists');
    }

    if (this.props.blocks.length === 0) {
      this.props.fetchBlocks().then((res) => {
        if (this.isMounted) {
          this.setState({
            blocks: res.blocks,
          });
        }
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // let newPageId = this.props.location.pathname.slice(3);
    // if (prevProps.pageId !== newPageId) {
    //   this.props.fetchPage(newPageId)
    //     .then((res) => {
    //       this.setState({
    //         page: res.page,
    //       });
    //     })
    //   this.props.fetchBlocks()
    //     .then((res) => {
    //       this.setState({
    //         blocks: res.blocks,
    //         pageId: newPageId
    //       });
    //     });
    // }
    // if (prevProps.blocks !== this.props.blocks) {
    //   this.props.fetchBlocks().then((res) => {
    //     this.setState({
    //       blocks: res.blocks,
    //     });
    //   });
    // }
    // const htmlChanged = this.props.html !== this.state.html;
    // if (htmlChanged) {
    //   const newPage = Object.assign(this.props.page, { title: this.state.html });
    //   this.props.updatePage(newPage);
    // }
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  handleTitleChange(e) {
    const newPage = Object.assign(this.state.page, { title: e.target.value });
    this.setState({ page: newPage, html: e.target.value }, () => this.props.updatePage(newPage));
  }

  handleImageUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('page[uploadedImageUrl]', this.state.photoFile);
    console.log(this.state.photoFile);

    $.ajax({
      url: `/api/pages/${this.props.pageId}`,
      method: 'PATCH',
      data: formData,
      contentType: false,
      processData: false,
    }).then(
      (res) => {
        this.props.updatePage(this.state.page);
      },
      (err) => console.log(err)
    );
  }

  OnDragEnd(result) {
    const { source, destination } = result;

    // if dropped outside the area or no movement
    if (!destination || source.index === destination.index) return;

    // reorder blocks ids (splice >1 if implementing multi-drag)
    const blockIds = this.state.page.blockIds;
    const newBlockIds = [...blockIds];
    const removed = newBlockIds.splice(source.index, 1);
    newBlockIds.splice(destination.index, 0, ...removed);

    console.log(newBlockIds);
    const newPage = Object.assign(this.state.page, { blockIds: newBlockIds });

    // this.props.updatePage(newPage)
    //   .then((res) => {
    //     this.setState({ page: newPage })
    //   });

    this.setState({ page: newPage });
  }

  render() {
    if (!this.props.blocks || !this.props.pages || !this.props.page) return null;
    if (Object.keys(this.props.page).length === 0) return null;
    if (this.props.blocks.length === 0) return null;
    if (!this.state.page || Object.keys(this.state.page).length === 0) return null;
    if (!this.state.page.blocks || this.state.page.blocks.length === 0) return null;

    const orderedBlocks = [];
    const blockIds = this.state.page.blockIds;
    for (let i = 0; i < blockIds.length; i++) {
      orderedBlocks.push(this.state.blocks[blockIds[i]]);
    }

    const pageHasGalleryCover = this.props.page.galleryImageUrl.length > 0;
    const pageHasUploadedCover = this.props.page.uploadedImageUrl.length > 0;
    const preview = this.state.photoUrl ? <img src="this.state.photoUrl" /> : null;

    // check for attachment
    // use default or user photo based on attachment
    // const pageHasUserUploadedImage = this.props.page.hasUserPhoto

    return (
      <div className="page">
        <div className="topbar">
          <div className="breadcrumb-wrapper">
            {/* add handleTitleChange listener */}
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
            <form onSubmit={this.handleImageUpload} id="picker-form">
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
              <ContentEditable
                innerRef={this.contentEditable}
                html={this.state.html}
                onChange={debounce(this.handleTitleChange, 1000)}
                tagName="h1"
                className="page-title"
                placeholder="Untitled"
              />
            </div>

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
