import React, { useState, useEffect } from 'react'
import { withRouter, Redirect, useLocation, useHistory, useParams } from 'react-router-dom'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import BlockContainer from '../blocks/BlockContainer'
import { FiMenu, FiChevronsRight, FiPlus, FiMoreHorizontal } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'
import 'emoji-mart/css/emoji-mart.css'
import { Picker, Emoji } from 'emoji-mart'
import coverData from './coverData'
import emoji from 'node-emoji'
import equal from 'fast-deep-equal'


function Page({
  pages,
  blocks,
  isSidebarOpen,
  toggleSidebar,
  currentUser,
  errors,
  fetchPage,
  createPage,
  updatePage,
  deletePage,
  createBlock,
  fetchBlock,
  fetchBlocks,
  updateBlock,
  deleteBlock,
}) {
  const { id } = useParams()
  const history = useHistory()
  const location = useLocation()

  const [pageId, setPageId] = useState(id)
  const [page, setPage] = useState(pages[id])
  const [photoFile, setPhotoFile] = useState(null)
  const [photoUrl, setPhotoUrl] = useState(null)
  // optional vars
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false)
  const [addBlockMenuOpen, setAddBlockMenuOpen] = useState(false)
  const [addBlockMenuPosition, setAddBlockMenuPosition] = useState({
    x: null,
    y: null,
  })

  useEffect(() => {
    // redirect to first page is none provided
    if (location.pathname.length <= 1) {
      const firstPage = Object.values(pages)[0]
      history.push(`/p/${firstPage.id}`)
    }

    if (page && Object.keys(page).length > 0 && page.title) {
      changeFavicon(page.icon)
      changeTitle(page.title)
    }

    return () => {
      // cleanup
    }
  }, [id, page, blocks, location.pathname])

  function changeTitle(title) {
    if (title === '') title = 'Untitled'
    document.title = title
  }

  function getFaviconUrl(emoji) {
    // try getting background-position data from <span> from onClick event
    // const set = 'apple';
    // const emojiDatasourceVersion = '5.0.1';
    // const sheetSize = '64';
    // it returns the entire emoji sheet
    // return `https://unpkg.com/emoji-datasource-${set}@${emojiDatasourceVersion}/img/${set}/sheets-256/${sheetSize}.png`;

    // temp solution to get favicon url that only works sometimes
    const id = emoji.id
    const unified = emoji.unified
    return `https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/${id}_${unified}.png`
  }

  function changeFavicon(emoji) {
    return
    // temp solution to get favicon url
    const url = getFaviconUrl(emoji)
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link')
    link.type = 'image/png'
    link.rel = 'shortcut icon'
    link.href = url
    document.head.appendChild(link)
  }

  function handleTitleChange(e) {
    const newPage = Object.assign(page, { title: e.target.value })
    setPage(newPage)
    updatePage(newPage)
    changeTitle(e.target.value)
  }

  function addRandomCover(arr) {
    document.getElementById('page-icon-wrapper').classList.add('with-cover')
    const cover = arr[Math.floor(Math.random() * arr.length)]
    const coverUrl = cover.imageUrl
    const newPage = Object.assign(page, {
      galleryImageUrl: coverUrl,
      uploadedImageUrl: '',
    })
    setPage(newPage)
    setPhotoUrl(coverUrl)
    updatePage(newPage)
  }

  function removeCover() {
    document.getElementById('page-icon-wrapper').classList.remove('with-cover')
    const newPage = Object.assign(page, {
      galleryImageUrl: '',
      uploadedImageUrl: '',
    })
    updatePage(newPage).then(() => {
      setPage(newPage)
      setPhotoUrl(null)
    })
  }

  function addBlock() {
    const block = {
      userId: currentUser.id,
      pageId: location.pathname.slice(3),
      blockType: 'paragraph',
      text: '',
    }
    createBlock(block).then((res) => {
      const newBlockIds = [...page.blockIds, res.block.id]
      const newPage = Object.assign(page, { blockIds: newBlockIds })
      updatePage(newPage)
    })
  }

  function onDragEnd(result) {
    const { source, destination } = result
    if (!destination || source.index === destination.index) return

    const blockIds = page.blockIds
    const newBlockIds = [...blockIds]
    const removed = newBlockIds.splice(source.index, 1)
    newBlockIds.splice(destination.index, 0, ...removed)
    const newPage = Object.assign(page, { blockIds: newBlockIds })

    setPage(newPage)
    updatePage(newPage)
  }

  function handlePreview(e) {
    e.preventDefault()
    const file = e.target.files[0]
    const fileReader = new FileReader()
    if (file) {
      fileReader.readAsDataURL(file)
      fileReader.onloadend = () => {
        setPhotoFile(file)
        setPhotoUrl(fileReader.result)
        handleUpload()
      }
    }
  }

  function handleUpload() {
    const file = photoFile
    if (file) {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onloadend = () => {
        const formData = new FormData()
        formData.append('page[uploadedImageUrl]', file)
        $.ajax({
          url: `/api/pages/${page.id}`,
          method: 'PATCH',
          data: formData,
          contentType: false,
          processData: false,
        }).then(
          (res) => console.log('res:', res),
          (err) => console.log('error:', err)
        )
      }
    }
  }

  function getPagePadding(width) {}

  function selectEmoji(emoji) {
    closeEmojiPicker()
    changeFavicon(emoji)
    const newPage = Object.assign(page, { icon: emoji })
    setPage(newPage)
    updatePage(newPage)
  }

  function openEmojiPicker() {
    setEmojiPickerOpen(true)
  }

  function closeEmojiPicker() {
    setEmojiPickerOpen(false)
  }

  const isDataInvalid = !pages || !page || !blocks || !page.blockIds
  const breadcrumbTitle = page.title.length > 0 ? page.title : 'Untitled'
  const coverPhoto = page.uploadedImageUrl || page.galleryImageUrl || false
  const orderedBlocks = []
  const blockIds = page.blockIds
  for (let i = 0; i < blockIds.length; i++) {
    orderedBlocks.push(blocks[blockIds[i]])
  }
  return isDataInvalid ? null : (
    <div className="page">
      <div className="topbar">
        <div className="topbar-left">
          {isSidebarOpen ? (
            <div className="topbar-menu-wrapper" onClick={toggleSidebar}>
              <div className="topbar-menu">
                {/* change to FiChevronRight on hover */}
                <AiOutlineMenu className="topbar-menu-icon" />
              </div>
            </div>
          ) : null}
          <div
            className="breadcrumb-wrapper"
            style={isSidebarOpen ? { marginLeft: '16px' } : { marginLeft: 0 }}
          >
            <div className="breadcrumb-icon">
              <Emoji set="apple" emoji={page.icon.id} size={16} />
            </div>
            <div className="breadcrumb">{breadcrumbTitle}</div>
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
        {/* {coverPhoto ? (
            <div className="page-header-wrapper">
              <div className="page-header">
                <img src={coverPhoto} className="page-cover" />
              </div>
            </div>
          ) : null} */}

        <div className="page-wrapper">
          <div className="page-controls">
            <div
              id="page-icon-wrapper"
              className={coverPhoto ? 'with-cover' : null}
              onClick={openEmojiPicker}
            >
              <div className="page-icon">
                <Emoji set="apple" emoji={page.icon.id} size={64} />
              </div>
            </div>

            {/* wrap emoji picker with dropdown.menu or popover component */}
            {emojiPickerOpen && (
              <Picker
                set="apple"
                color="#37352f"
                emoji=""
                title=""
                autoFocus={true}
                perLine={12}
                theme="light"
                sheetSize={64}
                defaultSkin={1}
                showPreview={true}
                emojiTooltip={false}
                showSkinTones={true}
                useButton={false}
                onSkinChange={handleSkinChange}
                onSelect={selectEmoji}
                style={{ position: 'absolute', zIndex: 2, top: '178px', left: '-96px' }}
              />
            )}

            {coverPhoto ? (
              <div className="cover-controls">
                <div className="cover-control change-cover" onClick={addRandomCover}>
                  Change cover
                </div>
                <div className="cover-control remove-cover" onClick={removeCover}>
                  Remove cover
                </div>
              </div>
            ) : (
              <div className="temp">
                <label className="cover-upload-label" onClick={() => addRandomCover(coverData)}>
                  <svg viewBox="0 0 14 14" className="cover-upload-icon">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm0 12h10L8.5 5.5l-2 4-2-1.5L2 12z"
                    ></path>
                  </svg>
                  Add cover
                </label>
              </div>
            )}
          </div>

          <div className="page-title-wrapper">
            {/* style input to have no border> */}
            <input
              type="text"
              placeholder="Untitled"
              className="page-title"
              id="page-title"
              value={page.title}
              onChange={handleTitleChange}
            />
            <div className="add-block-button" onClick={addBlock()}>
              <FiPlus />
            </div>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <div className="page-body">
              <Droppable droppableId={pageId}>
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
                        blockIds={page.blockIds}
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
  )
}

export default withRouter(Page)
