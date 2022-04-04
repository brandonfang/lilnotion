# lilNotion

lilNotion is a fullstack, single-page web app that clones some of [Notion](https://www.notion.so/product)'s features. It's a document editor that allows users to write notes, projects, and wikis in a flexible format.

## 🖥 **Live Demo: [lilnotion.herokuapp.com](https://lilnotion.herokuapp.com)**

![lilNotion home](https://raw.githubusercontent.com/brandonfang/lilnotion/main/app/assets/images/readme-1.png)

## 🧑‍💻 Tech Stack

- Frontend: React/Redux/Webpack
- Backend: Ruby on Rails/PostgreSQL
- Storage: AWS S3
- Hosting: Heroku
- Drag and Drop: react-beautiful-dnd
- UI components: radix-ui

## 🎨 Features

### 🔐 User Authentication

Users can create an account to store their private pages. Visitors who don't want to make an account can log in as a demo user. RESTful authentication is implemented encrypting passwords with BCrypt and generating/caching session tokens with cryptographically strong random numbers.

![user authentication](https://raw.githubusercontent.com/brandonfang/lilnotion/main/app/assets/images/readme-2.png)

### 📝 Pages and Blocks

Every page and block has a unique identifier (UUID v4). Users can write seamlessly with different data types.

![pages](https://raw.githubusercontent.com/brandonfang/lilnotion/main/app/assets/images/readme-3.png)

### 📚 Dynamic Blocks

A block can be converted into another type of block using the `⋮⋮` icon or the `⌘` + `/` command. Changing the type of a block will affect the underlying content but will created a more stylized appearance.

![blocks](https://raw.githubusercontent.com/brandonfang/lilnotion/main/app/assets/images/readme-4.png)

Block.jsx

```jsx
function Block({ blockType }) {
  let blockBody
  switch (blockType) {
    case 'h1':
      blockBody = <Heading1Container block={block} deleteBlock={deleteBlock} />
      break
    case 'h2':
      blockBody = <Heading2Container block={block} deleteBlock={deleteBlock} />
      break
    case 'h3':
      blockBody = <Heading3Container block={block} deleteBlock={deleteBlock} />
      break
    case 'paragraph':
      blockBody = <ParagraphContainer block={block} deleteBlock={deleteBlock} />
      break
    case 'quote':
      blockBody = <QuoteContainer block={block} deleteBlock={deleteBlock} />
      break
    case 'callout':
      blockBody = <CalloutContainer block={block} deleteBlock={deleteBlock} />
      break
    ...
    default:
      blockBody = <ParagraphContainer block={block} deleteBlock={deleteBlock} />
      break
  }

  return (
    <Draggable>
      <PlusHandle />
      <DragHandle />
      {this.state.actionMenuOpen ? <BlockActionMenu /> : null}
      {this.state.selectMenuOpen ? <BlockSelectMenu /> : null}
      {this.state.slashMenuOpen ? <BlockSlashMenu /> : null}
      {blockBody}
    </Draggable>
  )
}
```

### 🤏 Drag and Drop

Users can drag and drop blocks to rearrange information.

<!-- record gif of drag and drop -->
<!-- ![drag and drop]() -->

Page.jsx

```jsx
function Page({ pages, blocks, updatePage }) {
  const { id } = useParams()
  const [pageId, setPageId] = useState(id)
  const [page, setPage] = useState(pages[id])

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

  const orderedBlocks = []
  const blockIds = page.blockIds
  for (let i = 0; i < blockIds.length; i++) {
    orderedBlocks.push(blocks[blockIds[i]])
  }

  return (
    <div className="page">
      <div className="page-scroller">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={pageId}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="droppable-area">
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
        </DragDropContext>
      </div>
    </div>
  )
}
```

### 📸 Image Support

Image support with Amazon S3 storage allows users to attach images to blocks and page covers.

<!-- record gif of uploading image -->
<!-- ![image support]() -->

Image.jsx

```jsx
function Image({ block, updateBlock }) {
  const [photoUrl, setPhotoUrl] = useState(null)

  function handleUpload(e) {
    const file = e.target.files[0]
    if (file) {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)

      fileReader.onloadend = () => {
        const formData = new FormData()
        formData.append('block[imageUrl]', file)

        $.ajax({
          url: `/api/blocks/${block.id}`,
          method: 'PATCH',
          data: formData,
          contentType: false,
          processData: false,
        }).then(
          (res) => updateBlock(res),
          (err) => console.log('error: ', err)
        )
      }
    }
  }

  const isImageUploaded = block.imageUrl && block.imageUrl.length > 0
  const imageBody = isImageUploaded ? (
    <img className="block-image" src={block.imageUrl} alt="" />
  ) : (
    <label className="image-upload-label">
      <BiImage className="image-upload-icon" />
      <div className="image-upload-text">Add an image</div>
      <input
        type="file"
        className="image-upload-input"
        accept="image/*"
        onChange={handleUpload}
        hidden
      />
    </label>
  )

  return (
    <div className="block-body image">
      <div className="image-block-wrapper">{imageBody}</div>
    </div>
  )
}
```

## 👋 How To Use

To clone and run this application, you'll need Git, Node.js, and Ruby on Rails installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/brandonfang/lilnotion

# Go into the repository
$ cd lilnotion

# Install dependencies
$ npm install
$ gem install

# Run the app
$ npm start
$ rails server
```

## 📅 To-do

- Rich text - text formatting, colored text, colored backgrounds
- Nested pages
