# To-Do's

## Q

- Should I store all of a user's blocks inside state? Or just blocks for one page and refetch on request?
- A: Can store all blocks of all pages inside redux state. 

- Cover photo S3?
- A: url_for(nil) will be an error. check whether there is an attached photo, then use url_for

- How should I structure my page w/ page header?
- A: Export header to another component. Wrap it in a container if it needs read/write access to redux state.

- Where do I fit modals into my component tree?
- A: Anywhere. Use component state to keep track of modal open/close.

## High priority

[ ] When user logs in, redirect ot the first page

[ ] If page id is invalid or missing, redirect to the first page

[ ] Fix contenteditable with drag and drop

[ ] Refactor block state to be arrays with keys of pageId's

[ ] Image storage with Amazon S3

[ ] Add modals for menus and settings


## Medium priority

[ ] Media modal


## Low priority

[ ] Add mixins for different breakpoints

[ ] Refactor container sizes according the breakpoint sizes

[ ] Refactor class components into React hooks

[ ] Clean up color codes and variables

[ ] Unify icon usage

[ ] Fix code style

## Last priority (after project completion)

[ ] SEO/meta tags

[ ] Favicon

[ ] Dynamic page title and favicon

[ ] Dark mode preferences

[ ] Custom domain on Heroku

[ ] Try to refactor Block.jsx as a functional component using useRef hook

[ ] Regex matching for routes

