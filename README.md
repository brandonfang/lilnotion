# lilNotion

## About

lilNotion is a fullstack, single-page web app that clones some of [Notion](https://www.notion.so/product)'s features. lilNotion is a document editor that allows users to write notes and wikis in a flexible format.

### **Live Demo: [lilnotion.herokuapp.com](https://lilnotion.herokuapp.com)**

## Technologies

- Frontend: React/Redux/Webpack
- Backend: Ruby on Rails/PostgreSQL
- Storage: AWS S3
- Hosting: Heroku
- Drag and Drop: react-beautiful-dnd

## Key Features

### User Authentication

Users can create an account to store their private pages. Visitors who don't want to make an account can log in as a demo user.

![user authentication]()

### Pages and Blocks

Each block and page have a unique identifier (UUID v4). Users can write seamlessly with different data types, drag-and-drop blocks to rearrange information, and share documents with others. 

![pages]()

### Dynamic Blocks 

A block can be turned into another type of block using the `⌘` + `/` command or block menu. Changing the type of a block will affect how the appearance of that block.

![blocks]()

### Slash Commands


![slash commands]()

### Drag and Drop

![drag and drop]()

### Image Support 

![image support]()


## Acknowledgment

This project was inspired by Konstantin Münster's [blog post](https://medium.com/swlh/how-to-build-a-text-editor-like-notion-c510aedfdfcc).