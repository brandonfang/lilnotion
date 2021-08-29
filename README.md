# lilNotion

## About

lilNotion is a fullstack, single-page web app that clones some of [Notion](https://www.notion.so/)'s functionalities. lilNotion is a workspace that allows users to write rich-text notes and wikis in a flexible format.

**Live Demo: [lilnotion.herokuapp.com](https://lilnotion.herokuapp.com)**

## Technologies

- Frontend: React/Redux/Webpack
- Backend: Ruby on Rails/PostgreSQL
- Storage: AWS S3
- Hosting: Heroku

## Key Features

### User Auth

Users can create an account to hold their data. Visitors who don't want to make an account can log in as a demo user.

### Pages and Blocks

Each block and page have a unique identifier (UUID v4). Users can write seamlessly with different data types, drag-and-drop blocks to rearrange information, and share documents with others. A block can be turned into another type of block using the `⌘` + `/` command or block menu. Changing the type of a block will affect how React renders that block.

## Future Features

- Additional block types
- Block nesting
- Database collections
- Comments