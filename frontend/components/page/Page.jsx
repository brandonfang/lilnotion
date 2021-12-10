import React from 'react';
import { withRouter } from 'react-router-dom';
import ContentEditable from 'react-contenteditable';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import sanitizeHtml from 'sanitize-html';
import { debounce } from '../../util/utils';
import equal from 'fast-deep-equal';
import BlockContainer from '../blocks/BlockContainer';
import MediaMenuContainer from '../menus/MediaMenuContainer';
import { FiMenu, FiPlus } from 'react-icons/fi';
import emoji from 'node-emoji';
import 'emoji-mart/css/emoji-mart.css';
import { Picker, Emoji } from 'emoji-mart';
import coverData from './coverData';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.changeFavicon = this.changeFavicon.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.getFaviconUrl = this.getFaviconUrl.bind(this);
    this.getRandomCover = this.getRandomCover.bind(this);
    this.addBlock = this.addBlock.bind(this);
    this.OnDragEnd = this.OnDragEnd.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.getRandomCover = this.getRandomCover.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.openEmojiPicker = this.openEmojiPicker.bind(this);
    this.closeEmojiPicker = this.closeEmojiPicker.bind(this);
    this.selectEmoji = this.selectEmoji.bind(this);
    this.state = {
      pageId: props.location.pathname.slice(3),
      page: props.pages[this.props.location.pathname.slice(3)],
      html: '',
      photoFile: null,
      photoUrl: null,
      // blocks: props.blocks,
      emojiPickerOpen: false,
    };
  }

  componentDidMount() {
    console.log('page.jsx componentDidMount()');

    if (this.state.page && Object.keys(this.state.page).length > 0 && this.state.page.title) {
      this.changeFavicon(this.state.page.icon);
      this.changeTitle(this.state.page.title);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('page.jsx componentDidUpdate()');

    // console.log("prevProps: ", prevProps);
    // console.log('new Props: ', this.props);

    const newPageId = this.props.location.pathname.slice(3);
    const newPage = this.props.pages[newPageId];
    const locationChanged = !equal(this.props.location, prevProps.location);
    const pageChanged = !equal(newPage, prevState.page);
    const blocksChanged = !equal(this.props.blocks, prevProps.blocks);

    if (locationChanged || pageChanged || blocksChanged) {
      console.log('componentDidUpdate() something changed');
      this.setState({
        pageId: newPageId,
        page: newPage,
        blocks: this.props.blocks,
      });
      this.changeFavicon(newPage.icon);
      this.changeTitle(newPage.title);
    }
    // const htmlChanged = this.props.html !== this.state.html;
    // if (htmlChanged) {
    //   const newPage = Object.assign(this.props.page, { title: this.state.html });
    //   this.props.updatePage(newPage);
    // }
  }

  changeTitle(title) {
    document.title = title;
  }

  getFaviconUrl(emoji) {
    // try getting background-position data from <span> from onClick event
    // const set = 'apple';
    // const emojiDatasourceVersion = '5.0.1';
    // const sheetSize = '64';
    // this returns the entire emoji sheet
    // return `https://unpkg.com/emoji-datasource-${set}@${emojiDatasourceVersion}/img/${set}/sheets-256/${sheetSize}.png`;

    // temp solution to get favicon url
    // only works sometimes
    const id = emoji.id;
    const unified = emoji.unified;
    return `https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/${id}_${unified}.png`;
  }

  changeFavicon(emoji) {
    // temp solution to get favicon url
    const url = this.getFaviconUrl(emoji);
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = url;
    document.head.appendChild(link);
  }

  handleTitleChange(e) {
    const newPage = Object.assign(this.state.page, { title: e.target.value });
    this.setState({ page: newPage, html: e.target.value }, () => this.props.updatePage(newPage));
    this.changeTitle(e.target.value);
  }

  getRandomCover(arr) {
    const cover = arr[Math.floor(Math.random() * arr.length)];
    return cover;
  }

  // getRandomCover(obj) {
  //   const keys = Object.keys(obj);
  //   return obj[keys[(keys.length * Math.random()) << 0]];
  // }

  addBlock() {
    const block = {
      userId: this.props.currentUser.id,
      pageId: this.props.location.pathname.slice(3),
      blockType: 'paragraph',
      text: '',
    };
    this.props.createBlock(block).then((res) => {
      // console.log("page before update: ", this.state.page)
      // console.log("blockids before update: ", this.state.page.blockIds)
      const newBlockIds = [...this.state.page.blockIds, res.block.id];
      const newPage = Object.assign(this.state.page, { blockIds: newBlockIds });
      console.log(newPage);
      this.props.updatePage(newPage);
    });
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
    const newPage = Object.assign(this.state.page, { blockIds: newBlockIds });
    this.setState({ page: newPage }, () => this.props.updatePage(newPage));
    console.log(newBlockIds);
  }

  handlePreview(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        this.setState(
          {
            photoFile: file,
            photoUrl: fileReader.result,
          },
          () => this.handleUpload()
        );
      };
    }
  }

  handleUpload() {
    const file = this.state.photoFile;
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        const formData = new FormData();
        formData.append('page[uploadedImageUrl]', file);
        $.ajax({
          url: `/api/pages/${this.state.page.id}`,
          method: 'PATCH',
          data: formData,
          contentType: false,
          processData: false,
        }).then(
          (res) => console.log('res: ', res),
          (err) => console.log('error: ', err)
        );
      };
    }
  }

  getPagePadding() {}

  selectEmoji(emoji) {
    console.log(emoji);
    this.changeFavicon(emoji);
    const newPage = Object.assign(this.state.page, { icon: emoji });
    this.closeEmojiPicker();
    this.setState(newPage, () => this.props.updatePage(newPage));
  }

  openEmojiPicker() {
    console.log('openEmojiPicker()');
    this.setState({ emojiPickerOpen: true });
    document.addEventListener('click', () => this.closeEmojiPicker, false);
    // document.addEventListener('click', this.closeEmojiPicker, false);
  }

  closeEmojiPicker() {
    this.setState({ emojiPickerOpen: false });
    document.removeEventListener('click', this.closeEmojiPicker, false);
  }

  render() {
    console.log('page.jsx render()');
    const { pages, blocks, location, history } = this.props;

    if (!pages || !blocks) return null;
    if (location.pathname.length <= 1) {
      const firstPage = Object.values(pages)[0];
      history.push(`/p/${firstPage.id}`);
      return null;
    }

    const page = pages[location.pathname.slice(3)];
    const orderedBlocks = [];
    const blockIds = page.blockIds;
    for (let i = 0; i < blockIds.length; i++) {
      orderedBlocks.push(blocks[blockIds[i]]);
    }

    const pageHasGalleryCover = this.state.page.galleryImageUrl.length > 0;
    const pageHasUploadedCover = this.state.page.uploadedImageUrl.length > 0;
    const preview = this.state.photoUrl ? (
      <img className="page-cover-preview" src={this.state.photoUrl} />
    ) : null;

    // console.log(coverData)

    // const html = '<strong>hello world</strong>';
    // console.log(sanitizeHtml(html));
    // console.log(sanitizeHtml("<img src=x onerror=alert('img') />").length);
    // console.log(sanitizeHtml("console.log('hello world')"));
    // console.log(sanitizeHtml("<script>alert('hello world')</script>").length);

    return (
      <div className="page">
        <div className="topbar">
          <div className="topbar-left">
            <div
              className="topbar-menu-wrapper"
              // onClick={() => console.log(localStorage.getItem('sidebar')))}
            >
              <FiMenu className="topbar-menu" />
            </div>
            <div className="breadcrumb-wrapper">
              <div className="breadcrumb">{page.title}</div>
            </div>
          </div>
          <div className="topbar-actions">
            <div className="more-button-wrapper">
              <div className="more-button">
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="page-scroller">
          <div className="page-header-wrapper">
            <div className="page-header">
              {pageHasGalleryCover ? (
                <img src={page.galleryImageUrl} className="page-cover" />
              ) : null}
            </div>
          </div>

          <div className="page-wrapper">
            <div className="page-controls">
              <div className="page-icon-wrapper" onClick={this.openEmojiPicker}>
                <div className="page-icon">{emoji.get(page.icon.id)}</div>
              </div>

              <Emoji size={78} emoji={page.icon.id} />

              {this.state.emojiPickerOpen && (
                <Picker
                  set="apple"
                  color="#37352f"
                  emoji=""
                  title=""
                  autoFocus={true}
                  perLine={12}
                  theme="light"
                  sheetSize={64}
                  defaultSkin={4}
                  emojiTooltip={false}
                  showPreview={false}
                  showSkinTones={true}
                  useButton={false}
                  onSkinChange={this.handleSkinChange}
                  onSelect={this.selectEmoji}
                  style={{ position: 'absolute', zIndex: 2, top: '78px', left: '-200px' }}
                />
              )}

              <label className="cover-upload-label">
                <svg viewBox="0 0 14 14" className="cover-upload-icon">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm0 12h10L8.5 5.5l-2 4-2-1.5L2 12z"
                  ></path>
                </svg>
                Add cover
                <input
                  type="file"
                  id=""
                  className="cover-upload-input"
                  accept="image/*"
                  onChange={this.handlePreview}
                  hidden
                />
              </label>
            </div>

            <div className="page-title-wrapper">
              <ContentEditable
                innerRef={this.contentEditable}
                // html={this.state.html}
                html={this.state.page.title}
                onChange={debounce((e) => this.handleTitleChange(e), 500)}
                tagName="h1"
                placeholder="Untitled"
                className="page-title"
                id="page-title"
              />
              <div className="add-block-button" onClick={() => this.addBlock()}>
                <FiPlus />
              </div>
              {/* <Emoji emoji="santa" set="apple" skin={5} size={78} tooltip={true} /> */}
            </div>

            <DragDropContext onDragEnd={(result) => this.OnDragEnd(result)}>
              <div className="page-body">
                <Droppable droppableId={this.state.pageId}>
                  {(provided) => (
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
                          blockIds={this.state.page.blockIds}
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
